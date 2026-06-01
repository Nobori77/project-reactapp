import React, { useState, useRef, useEffect } from "react";
import ReviewCardComponent from "./ReviewCardComponent";
import * as S from "./style.js";

const CARD_WIDTH = 380;
const CARD_GAP = 24;
const PER_VIEW = 3;
const STEP = CARD_WIDTH + CARD_GAP;

const ReviewSectionComponent = ({ reviews = [], hasMore, onMore }) => {
  const total = reviews.length;

  const cloned = [
    ...reviews.slice(-PER_VIEW),
    ...reviews,
    ...reviews.slice(0, PER_VIEW),
  ];

  const [index, setIndex] = useState(PER_VIEW);
  const [animated, setAnimated] = useState(true);
  const isTransitioning = useRef(false);

  const offset = index * STEP;

  const go = (dir) => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setAnimated(true);
    setIndex((prev) => prev + dir);
  };

  const handleTransitionEnd = () => {
    if (index >= total + PER_VIEW) {
      setAnimated(false);
      setIndex(PER_VIEW);
    } else if (index < PER_VIEW) {
      setAnimated(false);
      setIndex(total + PER_VIEW - 1);
    }
    isTransitioning.current = false;
  };

  useEffect(() => {
    if (!animated) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimated(true));
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [animated]);

  return (
    <S.SectionWrap>
      <S.TitleWrap>
        <S.Title>이음에서 달라진 이야기들</S.Title>
        <S.SubTitle>42,000명이 이음과 함께 수어를 배웠습니다.</S.SubTitle>
      </S.TitleWrap>

      <S.SliderWrap>
        <S.ArrowBtn onClick={() => go(-1)}>◀</S.ArrowBtn>
        <S.CardViewport>
          <S.CardTrack
            $offset={offset}
            $animated={animated}
            onTransitionEnd={handleTransitionEnd}
          >
            {cloned.map((review, i) => (
              <ReviewCardComponent key={i} review={review} index={i % total} />
            ))}
          </S.CardTrack>
        </S.CardViewport>
        <S.ArrowBtn onClick={() => go(1)}>▶</S.ArrowBtn>
      </S.SliderWrap>

      {hasMore && (
        <S.MoreButton onClick={onMore}>
          다른 후기들 보러가기
        </S.MoreButton>
      )}
    </S.SectionWrap>
  );
};

export default ReviewSectionComponent;