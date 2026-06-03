import React, { useEffect, useState } from "react";
import WordCardComponent from "./WordCardComponent.jsx";
import * as S from "./style.js";
import { WORD_CARDS } from "./constants";

const WordCardSection = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/sign-words/today')
      .then(res => res.json())
      .then(data => {
        const mapped = data.data.map(item => ({
          emoji: item.emoji ?? "🤟",
          title: item.signWordTitle,
          sub: item.signWordCategory ?? "",
          desc: item.signWordDescription ?? "",
          tag: item.signWordCategory ?? "",
          videoUrl: item.signWordVideoUrl,
          thumbnailUrl: item.signWordThumbnailUrl,
        }));
        setCards(mapped);
      })
      .catch(() => setCards(WORD_CARDS))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>불러오는 중...</p>;

  return (
    <S.SectionWrap>
      <S.SectionTitleRow>
        <S.TitleStart>매일 새로운</S.TitleStart>
        <S.TitleHighlight>수어 단어</S.TitleHighlight>
        <S.TitleEnd>하나씩</S.TitleEnd>
      </S.SectionTitleRow>

      <S.CardRow>
        {cards.map((card, i) => (
          <WordCardComponent key={i} card={card} />
        ))}
      </S.CardRow>
    </S.SectionWrap>
  );
};

export default WordCardSection;