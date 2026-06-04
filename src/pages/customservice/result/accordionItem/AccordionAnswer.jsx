import React, { useState } from "react";
import * as S from "../style";

const AccordionAnswer = ({ resultId, showAnswerInput, setShowAnswerInput, onAnswer }) => {
  const [answerText, setAnswerText] = useState("");

  const handleSubmit = async () => {
    if (!answerText.trim()) return alert("답변 내용을 입력해주세요.");
    await onAnswer(resultId, answerText);
    setAnswerText("");
    setShowAnswerInput(false);
  };

  return (
    <S.AnswerBtnWrap>
      {!showAnswerInput ? (
        <S.AnswerBtn onClick={(e) => { e.stopPropagation(); setShowAnswerInput(true); }}>
          답변하기
        </S.AnswerBtn>
      ) : (
        <S.AnswerInputWrap>
          <S.AnswerTextarea
            placeholder="답변 내용을 입력해주세요."
            value={answerText}
            onChange={(e) => setAnswerText(e.target.value)}
            onClick={(e) => e.stopPropagation()}
          />
          <S.AnswerBtnRow>
            <S.CancelBtn onClick={(e) => { e.stopPropagation(); setShowAnswerInput(false); setAnswerText(""); }}>
              취소
            </S.CancelBtn>
            <S.ConfirmBtn onClick={(e) => { e.stopPropagation(); handleSubmit(); }}>
              등록하기
            </S.ConfirmBtn>
          </S.AnswerBtnRow>
        </S.AnswerInputWrap>
      )}
    </S.AnswerBtnWrap>
  );
};

export default AccordionAnswer;