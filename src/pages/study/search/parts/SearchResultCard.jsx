import React, { useEffect, useState } from "react";
import { SearchPage as S } from "../style";

const SearchResultCard = ({ result, currentIndex, totalCount, onPrev, onNext, onBack }) => {
  const [videoError, setVideoError] = useState(false);

  //  영상/이미지 실패 처리
  useEffect(() => {

    setVideoError(false);
  }, [result]);

  return (
    <S.CardSection>
    <S.SearchForm as="div">
      <S.SearchInput value={result.word} readOnly />
      <S.SearchButton type="button" onClick={onBack}>검색</S.SearchButton>
    </S.SearchForm>

    <S.ResultCount>
      <span>"{result.word}" 검색 결과 </span>
      <strong>{totalCount}개</strong>
    </S.ResultCount>

      <S.CardArea>
        <S.CardPager>
          <span>
            {currentIndex + 1} / {totalCount}
          </span>
          <button type="button" onClick={onPrev} disabled={currentIndex === 0}>
            ‹
          </button>
          <button type="button" onClick={onNext} disabled={currentIndex === totalCount - 1}>
            ›
          </button>        
        </S.CardPager>
        <S.CardVisual>
          <S.CardNumber>{currentIndex + 1}</S.CardNumber>

          {result.videoUrl && !videoError ? (
            <video
              controls
              poster={result.cardImage || ""}
              onError={() => setVideoError(true)}
            >
              <source src={result.videoUrl} type="video/mp4" />
            </video>
         ) : result.cardImage ? (
            <img
              src={result.cardImage}
              alt={result.word}
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          ) : (
            <S.EmptyVisual>
              <span>영상</span>
              <p>수어 영상을 불러오지 못했어요.</p>
            </S.EmptyVisual>
          )}
        </S.CardVisual>
        <S.CardDetail>
          <S.DetailBlock>
            <S.StepBadge>2</S.StepBadge>
            <S.DetailTitle>수어 정보</S.DetailTitle>
            <S.InfoBox>
              <strong>{result.word}</strong>
              <span> · {result.meaning}</span>
              <p>{result.category}</p>
            </S.InfoBox>
            <S.MotionGrid>
              {result.motions.map((motion) => (
                <S.MotionCard key={motion.id}>
                  <span>{motion.icon}</span>
                  <p>{motion.label}</p>
                </S.MotionCard>
              ))}
            </S.MotionGrid>
            {result.videoUrl && (
              <S.VideoButton
                as="a"
                href={result.videoUrl}
                target="_blank"
                rel="noreferrer"
              >
                동작 영상 새 창으로 보기
              </S.VideoButton>
              )
            }
          </S.DetailBlock>

          <S.DetailBlock>
            <S.StepBadge>3</S.StepBadge>
            <S.DetailTitle>수어의 뜻</S.DetailTitle>
            <S.InfoBox>
              <strong>{result.word}</strong>
              <span> · {result.meaning}</span>
              <p>{result.category}</p>
            </S.InfoBox>
          </S.DetailBlock>

          <S.DetailBlock>
            <S.StepBadge>4</S.StepBadge>
            <S.DetailTitle>동작 설명</S.DetailTitle>
            <S.InfoBox>
              <p>{result.desc}</p>
            </S.InfoBox>
          </S.DetailBlock>

          <S.DetailBlock>
            <S.StepBadge>5</S.StepBadge>
            <S.DetailTitle>한국수어사전 원문</S.DetailTitle>
            <S.SourceBox>
              <S.QRSlot>원문</S.QRSlot>
              <div>
                <strong>한국수어사전</strong>
                <p>원문에서 더 자세한 정보를 확인할 수 있어요.</p>
              </div>
              {result.sourceUrl && (
                <a href={result.sourceUrl} target="_blank" rel="noreferrer">
                  원문 보기
                </a>
              )}
            </S.SourceBox>
          </S.DetailBlock>
        </S.CardDetail>
      </S.CardArea>

      <S.StartLink to="/study/experience/sign/1">
        단어로 학습 시작하기
      </S.StartLink>
    </S.CardSection>
  );
};

export default SearchResultCard;
