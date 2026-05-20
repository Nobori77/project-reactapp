import React from "react";

import S from "../style";

const summaryList = [
  {
    icon: "📊",
    label: "총 정답률",
    value: "75%",
  },
  {
    icon: "📝",
    label: "총 푼 문제",
    value: "55",
  },
  {
    icon: "🕐",
    label: "총 학습시간",
    value: "2시간30분",
  },
];

const StudySummaryCard = () => {
  return (
    <S.StudySummaryCardBox>
      <S.StudySummaryTitle>
        📈 학습요약
      </S.StudySummaryTitle>

      <S.StudySummaryList>
        {/* 학습 요약 데이터 연동 예정 */}
        {summaryList.map((summary) => (
          <S.StudySummaryItem key={summary.label}>
            <S.StudySummaryLabel>
              <span>{summary.icon}</span>
              {summary.label}
            </S.StudySummaryLabel>

            <S.StudySummaryValue>
              {summary.value}
            </S.StudySummaryValue>
          </S.StudySummaryItem>
        ))}
      </S.StudySummaryList>
    </S.StudySummaryCardBox>
  );
};

export default StudySummaryCard;