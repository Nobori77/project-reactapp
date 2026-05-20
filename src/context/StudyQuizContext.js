import { createContext, useState } from "react";

export const StudyQuizContext = createContext({

    state: {
        quizzes: [],
        answers: [],
        loading: false,
        error: null,
    },

    actions: {

        getQuizzes: () => {},
        insertQuizzes: () => {},
        removeQuizzes: () => {},
        insertAnswers: () => {},
        removeAnswers: () => {},
        submitQuiz: () => {},
    }
});

const StudyQuizProvider = ({children}) => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [answers, setAnswers] = useState([]);

    // [
    //      { id: 1, title: "이규학이 잘하는 것은?", answers: [{example: "맞는 생각", correct: true}, {example: "자는 생각", correct: false},] }
    // ]

    // const getQuizzes = async () => {
    //     const response = await fetch("퀴즈 경로")
    //     if(!response.ok) throw new Error("")
    //     const {success, message, data} = await response.json()
    //     if(success){
    //         setQuizzes(data)
    //     }
    // }

    // getQuizzes()

    const getQuizzes = async (quizId) => {
        try {
            setLoading(true);
            setError(null);

            // 나중에 서버 주소로 변경
            // const response = await fetch(`/api/study/chapter/${quizType}`);
            // const data = await response.json();

            const questionResponse = await fetch(`http://localhost:10000/api/quizzes/${quizId}/questions`);

            if (!questionResponse.ok) {
                throw new Error("퀴즈 문제 조회 실패");
            }

            const questionResult = await questionResponse.json();

            if (!questionResult.success) {
                throw new Error(questionResult.message);
            }

            const questions = await Promise.all(
                questionResult.data.map(async (question) => {
                    const choiceResponse = await fetch(`http://localhost:10000/api/quiz-questions/${question.id}/choices`);

                    if (!choiceResponse.ok) {
                    throw new Error("퀴즈 보기 조회 실패");
                    }

                    const choiceResult = await choiceResponse.json();

                    if (!choiceResult.success) {
                        throw new Error(choiceResult.message);
                    }
                    
                    const correctChoice = choiceResult.data.find(
                        (choice) => choice.quizChoiceIsCorrect === 1
                    );

                    return {
                        id: question.id,
                        title: question.quizQuestionDetail,
                        lessonTitle: question.quizQuestionType,
                        exp: 10,
                        heart: 5,
                        correctText: correctChoice?.quizChoiceDetail || "",
                        feedback: "정답을 확인했어요.",
                        review: {
                            mediaText: "수어 이미지/영상 준비 중",
                            motion: [],
                            useCase: [],
                        },
                        answers: choiceResult.data.map((choice) => ({
                            id: choice.id,
                            example: choice.quizChoiceDetail,
                            emoji: "",
                            correct: choice.quizChoiceIsCorrect === 1,
                        })),
                    };
                })
            );

                setQuizzes(questions);
            } catch (error) {
                setError("퀴즈를 불러오지 못했어요.");
            } finally {
                setLoading(false);
            }
        };

const insertQuizzes = (quizList) => {
    setQuizzes(quizList);
};

const removeQuizzes = () => {
    setQuizzes([]);
};

const insertAnswers = (answer) => {
    setAnswers((prev) => [...prev, answer]);
};

const removeAnswers = () => {
    setAnswers([]);
};

const submitQuiz = async ({ quizId, userId, answers }) => {
  const response = await fetch(`http://localhost:10000/api/quizzes/${quizId}/submit`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      answers,
    }),
  });

  if (!response.ok) {
    throw new Error("퀴즈 제출 실패");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
};

const value = {
  state: {
    quizzes:quizzes,
    answers:answers,
    loading:loading,
    error:error,
  },
  actions: {
    getQuizzes,
    insertQuizzes,
    removeQuizzes,
    insertAnswers,
    removeAnswers,
    submitQuiz,
  },
};

    return (
        <StudyQuizContext.Provider value={value}>
            {children}
        </StudyQuizContext.Provider>
    )
}


export default StudyQuizProvider;