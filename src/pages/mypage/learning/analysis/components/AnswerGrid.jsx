import React from "react";

import S from "../style";

const MAX_COLUMN_COUNT = 10;
const CELL_WIDTH = 72;

const AnswerGrid = ({ answers = [] }) => {
  const safeAnswers = Array.isArray(answers) ? answers : [];

  // 문제 수에 맞춰 열 개수 설정
  const columnCount = Math.min(
    Math.max(safeAnswers.length, 1),
    MAX_COLUMN_COUNT
  );

  // 상세 분석 영역을 넘지 않도록 최대 너비 설정
  const gridWidth = columnCount * CELL_WIDTH;

  return (
    <S.AnswerGridBox
      style={{
        "--answer-column-count": columnCount,
        "--answer-grid-width": `${gridWidth}px`,
      }}
    >
      {safeAnswers.map((answer, index) => (
        <S.AnswerCell key={`${index}-${answer}`}>
          <S.AnswerNumber>{index + 1}</S.AnswerNumber>

          <S.AnswerMark $correct={answer === "O"}>
            {answer}
          </S.AnswerMark>
        </S.AnswerCell>
      ))}
    </S.AnswerGridBox>
  );
};

export default AnswerGrid;