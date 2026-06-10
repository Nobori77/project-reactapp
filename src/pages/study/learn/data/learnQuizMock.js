// 학습 퀴즈 임시 데이터: 백엔드 단어가 부족할 때 보기와 복습 문구를 보완
export const learnQuizMockMap = {
  greeting: {
    id: "greeting",
    title: "수어 배우기",
    totalCount: 3,
    questions: [
      {
        id: 1,
        title: "다음 중 알맞은 수어 표현을 고르세요.",
        targetWord: "안녕하세요",
        hint: "기본 인사 상황에서 자주 사용하는 표현이에요.",
        exp: 10,
        options: [
          { id: "a", label: "안녕하세요", desc: "처음 만났을 때 쓰는 인사", icon: "인사", correct: true },
          { id: "b", label: "감사합니다", desc: "고마움을 전하는 표현", icon: "감사" },
          { id: "c", label: "반갑습니다", desc: "만나서 기쁜 마음을 전하는 표현", icon: "반가움" },
        ],
        feedback: {
          correct: "좋아요. 알맞은 수어 표현을 골랐어요.",
          incorrect: "다시 확인해볼까요? 정답 표현을 기억해보세요.",
          reviewTitle: "안녕하세요",
          reviewDesc: "처음 만났을 때 사용할 수 있는 기본 수어 인사예요.",
          action: "손을 들어\n가볍게 인사해요",
          situation: "처음 만났을 때\n인사를 전할 때 사용",
        },
      },
      {
        id: 2,
        title: "고마움을 전할 때 사용하는 수어는 무엇일까요?",
        targetWord: "감사합니다",
        hint: "도움을 받았을 때 자주 쓰는 표현이에요.",
        exp: 10,
        options: [
          { id: "a", label: "감사합니다", desc: "고마운 마음을 전해요", icon: "감사", correct: true },
          { id: "b", label: "안녕하세요", desc: "기본 인사 표현", icon: "인사" },
          { id: "c", label: "미안합니다", desc: "사과를 전하는 표현", icon: "사과" },
        ],
        feedback: {
          correct: "정답이에요. 감사 표현은 일상 대화에서 자주 쓰여요.",
          incorrect: "고마움을 전하는 표현을 다시 찾아볼까요?",
          reviewTitle: "감사합니다",
          reviewDesc: "도움을 받았거나 고마운 마음을 표현할 때 사용하는 수어예요.",
          action: "손을 움직여\n감사의 마음을 표현해요",
          situation: "도움을 받았을 때\n고마움을 전할 때 사용",
        },
      },
      {
        id: 3,
        title: "다음 중 알맞은 수어 표현은 무엇일까요?",
        targetWord: "반갑습니다",
        hint: "만나서 기쁜 마음을 전할 때 쓰는 표현이에요.",
        exp: 10,
        options: [
          { id: "a", label: "안녕하세요", desc: "기본 인사 표현", icon: "인사" },
          { id: "b", label: "반갑습니다", desc: "만나서 기쁠 때 쓰는 표현", icon: "반가움", correct: true },
          { id: "c", label: "감사합니다", desc: "고마움을 전하는 표현", icon: "감사" },
        ],
        feedback: {
          correct: "좋아요. 반가운 마음을 전하는 표현이에요.",
          incorrect: "정답은 반가움을 전하는 표현이에요.",
          reviewTitle: "반갑습니다",
          reviewDesc: "상대방을 만나 기쁜 마음을 전할 때 사용하는 수어예요.",
          action: "표정을 밝게 하고\n반가움을 표현해요",
          situation: "친구를 만났을 때\n반가움을 전할 때 사용",
        },
      },
    ],
  },
  signal: {
    id: "signal",
    title: "수신호 배우기",
    totalCount: 2,
    questions: [
      {
        id: 1,
        title: "도움이 필요할 때 사용하는 기본 수신호는 무엇일까요?",
        targetWord: "도움 요청",
        hint: "위험하거나 도움이 필요할 때 쓰는 신호예요.",
        exp: 10,
        options: [
          { id: "a", label: "도움 요청", desc: "상대에게 도움이 필요함을 알려요", icon: "도움", correct: true },
          { id: "b", label: "완료 알림", desc: "작업이 끝났음을 알려요", icon: "완료" },
          { id: "c", label: "대기 요청", desc: "잠시 기다려 달라고 알려요", icon: "대기" },
        ],
        feedback: {
          correct: "좋아요. 도움이 필요할 때 쓰는 수신호를 골랐어요.",
          incorrect: "위험하거나 도움이 필요한 상황에 어울리는 신호를 찾아보세요.",
          reviewTitle: "도움 요청",
          reviewDesc: "도움이 필요하거나 위험을 알릴 때 사용하는 기본 수신호예요.",
          action: "손을 높게 들어\n천천히 흔들어요",
          situation: "도움이 필요할 때\n위험을 알릴 때 사용",
        },
      },
      {
        id: 2,
        title: "작업이 끝났음을 알릴 때 어울리는 수신호는 무엇일까요?",
        targetWord: "완료 알림",
        hint: "상태가 끝났음을 짧게 알려주는 신호예요.",
        exp: 10,
        options: [
          { id: "a", label: "도움 요청", desc: "위험 상황을 알려요", icon: "도움" },
          { id: "b", label: "완료 알림", desc: "작업 완료를 알려요", icon: "완료", correct: true },
          { id: "c", label: "위치 안내", desc: "장소를 알려요", icon: "위치" },
        ],
        feedback: {
          correct: "정답이에요. 완료 알림은 상태를 짧게 전달할 때 좋아요.",
          incorrect: "작업이 끝났다는 뜻을 전하는 신호를 찾아보세요.",
          reviewTitle: "완료 알림",
          reviewDesc: "작업이나 확인이 끝났음을 알려주는 기본 수신호예요.",
          action: "손을 앞으로 내밀고\n완료 표시를 만들어요",
          situation: "작업이 끝났을 때\n상태를 알려줄 때 사용",
        },
      },
    ],
  },
};

export const getLearnQuiz = (type = "greeting") => learnQuizMockMap[type] || learnQuizMockMap.greeting;
