// 학습퀴즈컴포넌트: 문제 풀이, 정답 확인, 오답 복습 흐름을 담당합니다.
import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { submitQuizAnswers } from "../apis/QuizApi";
import { StudyQuizContext } from "../context/StudyQuizContext";
import { useStudyUser } from "../hooks/useStudyUser";
import { mapQuizAnswersForSubmit } from "../mappers/quizMapper";
import { getLearnQuiz } from "./data/learnQuizMock";
import LearnQuizFeedback from "./parts/LearnQuizFeedback";
import LearnQuizOptionCard from "./parts/LearnQuizOptionCard";
import LearnQuizReview from "./parts/LearnQuizReview";
import * as S from "./style";

const LearnQuizComponent = () => {
  const navigate = useNavigate();
  const { type = "greeting", id = "1" } = useParams();
  const {
    state,
    actions: { setQuiz, selectAnswer, setResult },
  } = useContext(StudyQuizContext);
  const { userId } = useStudyUser();

  const quiz = useMemo(() => getLearnQuiz(type), [type]);
  const currentIndex = Math.max(Number(id) - 1, 0);
  const question = quiz.questions[currentIndex] || quiz.questions[0];
  const [selectedOptionId, setSelectedOptionId] = useState(null);
  const [status, setStatus] = useState("solving");

  // 퀴즈초기화: URL의 퀴즈 종류가 바뀌면 컨텍스트에 문제 목록을 저장합니다.
  useEffect(() => {
    setQuiz({
      mode: "learn",
      quizId: quiz.id,
      quizType: type,
      questions: quiz.questions,
    });
  }, [quiz, setQuiz, type]);

  // 문제변경초기화: 다음 문제로 이동할 때 선택 상태를 초기화합니다.
  useEffect(() => {
    setSelectedOptionId(null);
    setStatus("solving");
  }, [id]);

  const correctOption = question.options.find((option) => option.correct);
  const selectedOption = question.options.find((option) => option.id === selectedOptionId);
  const progress = Math.round(((currentIndex + 1) / quiz.questions.length) * 100);
  const progressStatus = status === "correct" ? "correct" : status === "incorrect" ? "incorrect" : "solving";
  const isLastQuestion = currentIndex >= quiz.questions.length - 1;
  // 수신호구분값: 복습 화면 문구를 수어/수신호에 맞게 바꿉니다.
  const isSignalQuiz = type === "signal";

  // 답안선택함수: 사용자가 고른 보기를 저장합니다.
  const handleSelect = (optionId) => {
    if (status !== "solving") return;
    setSelectedOptionId(optionId);
  };

  // 정답확인함수: 선택한 보기의 정답 여부를 확인하고 컨텍스트에 답안을 기록합니다.
  const handleCheck = () => {
    if (!selectedOption) return;

    const isCorrect = Boolean(selectedOption.correct);
    selectAnswer({
      questionId: question.id,
      answerId: selectedOption.id,
      correct: isCorrect,
    });
    setStatus(isCorrect ? "correct" : "incorrect");
  };

  // 퀴즈완료함수: 마지막 복습까지 끝나면 백엔드 저장을 시도하고 학습 화면으로 돌아갑니다.
  const handleFinish = async () => {
    const answers = mapQuizAnswersForSubmit(state.answers);

    try {
      const result = await submitQuizAnswers({
        quizId: quiz.id,
        userId,
        answers,
      });

      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: true,
        data: result,
        finishedAt: new Date().toISOString(),
      });
    } catch {
      setResult({
        quizId: quiz.id,
        completed: true,
        submitted: false,
        finishedAt: new Date().toISOString(),
      });
    }

    navigate("/study/learn");
  };

  // 다음문제함수: 다음 문제로 이동하거나 마지막 문제에서는 복습 화면으로 넘어갑니다.
  const handleNext = () => {
    if (isLastQuestion) {
      setStatus("review");
      return;
    }

    navigate(`/study/learn/quiz/${type}/questions/${currentIndex + 2}`);
  };

  // 닫기함수: 학습 메인 화면으로 돌아갑니다.
  const handleClose = () => {
    navigate("/study/learn");
  };

  if (status === "review") {
    return (
      <S.LearnQuizWrap>
        <S.LearnQuizShell>
          <S.LearnQuizTop>
            <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
              ×
            </S.LearnQuizClose>
            <S.LearnQuizProgress aria-label="복습 진행률" $progress={50} $status="review">
              <span />
            </S.LearnQuizProgress>
            <S.LearnQuizCount />
          </S.LearnQuizTop>

          <LearnQuizReview
            label={isSignalQuiz ? "▲ 수신호 배우기" : "📖 수어 배우기"}
            headline={isSignalQuiz ? "이 수신호를 기억해봐요!" : "이 수어를 기억해봐요!"}
            mediaText={isSignalQuiz ? "수신호 이미지/영상 슬롯" : "수어 이미지/영상 슬롯"}
            wordLabel={isSignalQuiz ? "수신호 표현" : "수어 표현"}
            title={question.feedback.reviewTitle}
            desc={question.feedback.reviewDesc}
            action={question.feedback.action}
            situation={question.feedback.situation}
            onSkip={handleFinish}
            onRemember={handleFinish}
          />
        </S.LearnQuizShell>
      </S.LearnQuizWrap>
    );
  }

  return (
    <S.LearnQuizWrap>
      <S.LearnQuizShell>
        <S.LearnQuizTop>
          <S.LearnQuizClose type="button" onClick={handleClose} aria-label="퀴즈 닫기">
            ×
          </S.LearnQuizClose>
          <S.LearnQuizProgress aria-label="학습 퀴즈 진행률" $progress={progress} $status={progressStatus}>
            <span />
          </S.LearnQuizProgress>
          <S.LearnQuizCount>
            {currentIndex + 1} / {quiz.questions.length}
          </S.LearnQuizCount>
        </S.LearnQuizTop>

        <S.LearnQuizHeader>
          <S.LearnQuizTitle>{question.title}</S.LearnQuizTitle>
        </S.LearnQuizHeader>

        <S.LearnQuizOptionGrid>
          {question.options.map((option, index) => (
            <LearnQuizOptionCard
              key={option.id}
              option={option}
              index={index}
              selected={selectedOptionId === option.id}
              revealed={status !== "solving"}
              correct={Boolean(option.correct)}
              onClick={() => handleSelect(option.id)}
            />
          ))}
        </S.LearnQuizOptionGrid>

        {status === "solving" ? (
          <S.LearnQuizBottom>
            <S.LearnQuizSkip type="button" onClick={handleNext}>
              건너뛰기
            </S.LearnQuizSkip>
            <S.LearnQuizCheck type="button" disabled={!selectedOptionId} onClick={handleCheck}>
              확인
            </S.LearnQuizCheck>
          </S.LearnQuizBottom>
        ) : (
          <LearnQuizFeedback
            status={status}
            exp={question.exp}
            message={status === "correct" ? question.feedback.correct : question.feedback.incorrect}
            answer={correctOption?.label}
            onNext={handleNext}
          />
        )}
      </S.LearnQuizShell>
    </S.LearnQuizWrap>
  );
};

export default LearnQuizComponent;
