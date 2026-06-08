import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchSignWords } from "../apis/SignWordApi";
import { useSignWordSearch } from "../hooks/useSignWordSearch";
import { mapSignWords } from "../mappers/signWordMapper";
import SearchResultCard from "./parts/SearchResultCard";
import SearchResultList from "./parts/SearchResultList";
import * as S from "./style";

const TEXT = {
  all: "\uC804\uCCB4",
  title: "\uD544\uC694\uD55C \uC218\uC5B4 \uD45C\uD604\uC744 \uBC14\uB85C \uCC3E\uC544\uBCF4\uC138\uC694",
  placeholder: "\uC608: \uC548\uB155\uD558\uC138\uC694, \uBCD1\uC6D0, \uB3C4\uC640\uC8FC\uC138\uC694",
  inputLabel: "\uC218\uC5B4 \uAC80\uC0C9\uC5B4",
  submitLabel: "\uAC80\uC0C9",
  categoryLabel: "\uC218\uC5B4 \uAC80\uC0C9 \uCE74\uD14C\uACE0\uB9AC",
  serverError: "\uAC80\uC0C9 \uC11C\uBC84\uC5D0 \uC5F0\uACB0\uD558\uAE30 \uC5B4\uB824\uC6CC\uC694. \uC7A0\uC2DC \uD6C4 \uB2E4\uC2DC \uC2DC\uB3C4\uD574\uC8FC\uC138\uC694.",
  detailTitle: "\uC218\uC5B4 \uC0C1\uC138",
  resultTitle: "\uAC80\uC0C9 \uACB0\uACFC",
  searching: "\uAC80\uC0C9 \uC911",
  countUnit: "\uAC1C",
  loadingTitle: "\uAC80\uC0C9 \uACB0\uACFC\uB97C \uBD88\uB7EC\uC624\uB294 \uC911\uC774\uC5D0\uC694.",
  loadingDesc: "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824\uC8FC\uC138\uC694.",
  emptyTitle: "\uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC5B4\uC694.",
  emptyDesc: "\uB2E4\uB978 \uB2E8\uC5B4\uB098 \uCE74\uD14C\uACE0\uB9AC\uB85C \uB2E4\uC2DC \uAC80\uC0C9\uD574\uBCF4\uC138\uC694.",
};

const StudySearchComponent = () => {
  const location = useLocation();
  const initialKeyword = location.state?.keyword || new URLSearchParams(location.search).get("keyword") || "";
  const categoryScrollRef = useRef(null);
  const categoryDragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
  });
  const {
    keyword,
    setKeyword,
    results,
    setResults,
    selectedIndex,
    setSelectedIndex,
    loading,
    setLoading,
    error,
    setError,
  } = useSignWordSearch(initialKeyword);
  const [selectedCategory, setSelectedCategory] = useState(TEXT.all);

  const categories = useMemo(
    () => [
      TEXT.all,
      ...new Set(
        results
          .map((item) => item.category)
          .filter((category) => category && category !== TEXT.all)
      ),
    ],
    [results]
  );

  const filteredResults = useMemo(() => {
    return results.filter((item) => selectedCategory === TEXT.all || item.category === selectedCategory);
  }, [results, selectedCategory]);

  const selectedResult = selectedIndex !== null ? filteredResults[selectedIndex] : null;

  const searchSignWords = async (searchKeyword = keyword) => {
    setLoading(true);
    setError(null);
    setSelectedIndex(null);
    setSelectedCategory(TEXT.all);

    try {
      const data = await fetchSignWords(searchKeyword);
      setResults(mapSignWords(data));
    } catch {
      setResults([]);
      setError(TEXT.serverError);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    searchSignWords(initialKeyword);
    // Run once on first entry so the initial keyword can prepare results.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchSignWords(keyword);
  };

  const handleCategory = (category) => {
    setSelectedCategory(category);
    setSelectedIndex(null);
  };

  const handleCategoryMouseDown = (event) => {
    const list = categoryScrollRef.current;
    if (!list) return;

    categoryDragRef.current = {
      active: true,
      startX: event.pageX - list.offsetLeft,
      scrollLeft: list.scrollLeft,
    };
  };

  const handleCategoryMouseMove = (event) => {
    const list = categoryScrollRef.current;
    const drag = categoryDragRef.current;
    if (!list || !drag.active) return;

    event.preventDefault();
    const currentX = event.pageX - list.offsetLeft;
    list.scrollLeft = drag.scrollLeft - (currentX - drag.startX);
  };

  const handleCategoryMouseEnd = () => {
    categoryDragRef.current.active = false;
  };

  const handleCategoryArrow = (direction) => {
    const list = categoryScrollRef.current;
    if (!list) return;

    list.scrollBy({ left: direction * 260, behavior: "smooth" });
  };

  const handleSelect = (index) => {
    setSelectedIndex(index);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => Math.max((prev ?? 0) - 1, 0));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => Math.min((prev ?? 0) + 1, filteredResults.length - 1));
  };

  return (
    <S.SearchWrap>
      <S.SearchHero>
        <S.Title>{TEXT.title}</S.Title>

        <S.SearchForm onSubmit={handleSubmit}>
          <S.SearchIcon aria-hidden="true" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M16.5 16.5L21 21" />
          </S.SearchIcon>
          <S.SearchInput
            type="search"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder={TEXT.placeholder}
            aria-label={TEXT.inputLabel}
          />
          <S.SearchButton type="submit" aria-label={TEXT.submitLabel}>
            <span aria-hidden="true">&gt;</span>
          </S.SearchButton>
        </S.SearchForm>
      </S.SearchHero>

      <S.CategoryShell>
        <S.CategoryArrowButton type="button" aria-label="previous categories" onClick={() => handleCategoryArrow(-1)}>
          &lt;
        </S.CategoryArrowButton>
        <S.CategoryList
          ref={categoryScrollRef}
          aria-label={TEXT.categoryLabel}
          onMouseDown={handleCategoryMouseDown}
          onMouseMove={handleCategoryMouseMove}
          onMouseUp={handleCategoryMouseEnd}
          onMouseLeave={handleCategoryMouseEnd}
        >
          {categories.map((category) => (
            <S.CategoryButton
              type="button"
              key={category}
              $active={selectedCategory === category}
              onClick={() => handleCategory(category)}
            >
              {category}
            </S.CategoryButton>
          ))}
        </S.CategoryList>
        <S.CategoryArrowButton type="button" aria-label="next categories" onClick={() => handleCategoryArrow(1)}>
          &gt;
        </S.CategoryArrowButton>
      </S.CategoryShell>

      <S.SearchContent>
        <S.ContentHead>
          <S.ContentTitle>{selectedResult ? TEXT.detailTitle : TEXT.resultTitle}</S.ContentTitle>
          <S.ResultCount>{loading ? TEXT.searching : filteredResults.length + TEXT.countUnit}</S.ResultCount>
        </S.ContentHead>

        {error && <S.SearchNotice>{error}</S.SearchNotice>}

        {loading ? (
          <S.EmptyBox>
            <strong>{TEXT.loadingTitle}</strong>
            <span>{TEXT.loadingDesc}</span>
          </S.EmptyBox>
        ) : selectedResult ? (
          <SearchResultCard
            result={selectedResult}
            currentIndex={selectedIndex}
            totalCount={filteredResults.length}
            onBack={() => setSelectedIndex(null)}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        ) : filteredResults.length > 0 ? (
          <SearchResultList results={filteredResults} onSelect={handleSelect} />
        ) : (
          <S.EmptyBox>
            <strong>{TEXT.emptyTitle}</strong>
            <span>{TEXT.emptyDesc}</span>
          </S.EmptyBox>
        )}
      </S.SearchContent>
    </S.SearchWrap>
  );
};

export default StudySearchComponent;
