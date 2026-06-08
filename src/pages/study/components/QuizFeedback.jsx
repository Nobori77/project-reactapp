import * as S from "./style";

const QuizFeedback = ({ status, title, answer, desc, onNext, buttonText = "계속하기" }) => {
  const isCorrect = status === "correct";

  return (
    <S.QuizFeedbackBox data-status={status}>
      <S.QuizFeedbackIcon data-status={status}>{isCorrect ? "🎉" : "💔"}</S.QuizFeedbackIcon>
      <S.QuizFeedbackText data-status={status}>
        <strong>{title}</strong>
        {answer && <p>{answer}</p>}
        {desc && (
          <div className="descriptionWrap">
            {!isCorrect && <span className="descriptionLabel">설명</span>}
            <p className="description">{desc}</p>
          </div>
        )}
      </S.QuizFeedbackText>
      {onNext && (
        <S.QuizFeedbackActions data-status={status}>
          <button type="button" onClick={onNext}>
            {buttonText}
          </button>
        </S.QuizFeedbackActions>
      )}
    </S.QuizFeedbackBox>
  );
};

export default QuizFeedback;
