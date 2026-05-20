import { useEffect, useState } from "react";
import { fetchEduList, fetchWordsByEduId, fetchEduVideoById, finishWordStudy,} from "../apis/LearnApi";

// 상태 + 핸들러 담당

// 임시데이터
const learnData = {
  streak: 7,
  sideMenus: [
    { id: "learn", icon: "韓", label: "학습", active: true },
    { id: "letter", icon: "♟", label: "문자", active: false },
    { id: "signal", icon: "🚨", label: "수신호", active: false },
    { id: "profile", icon: "👤", label: "프로필", active: false },
    { id: "more", icon: "⋯", label: "더 보기", active: false },
  ],
  chapter: {
    title: "인사말 배워보기",
    guideLabel: "📖 가이드북",
    progressTitle: "챕터 진행도",
    progressDesc: "인사말 배워보기 · 1 / 4 완료",
    percent: 25,
    exp: 120,
  },
  lessons: [],
  nextChapter: {
    title: "다음 챕터 · 숫자 표현 배우기",
    desc: "이 챕터를 완료하면 잠금이 해제돼요 →",
  },
  quests: [
    { id: 1, icon: "⚡", title: "10 EXP 획득하기", current: 0, total: 10 },
    { id: 2, icon: "🤟", title: "레슨 2개에서 연속 5개 정답", current: 0, total: 2 },
    { id: 3, icon: "⏱️", title: "10분 동안 학습하기", current: 0, total: 10 },
  ],
};

const convertEdusToLessons = (edus) => {
  return edus.map((edu) => ({
    id: edu.id,
    status: "active",
    icon: "⭐",
    title: edu.eduTitle,
    desc: edu.eduDetail,
    buttonText: edu.eduDia > 0 ? `${edu.eduDia} 다이아` : "시작하기",
  }));
};

export const useLearn = () => {
  const [data, setData] = useState(learnData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // 학습번호, 단어목록
  const [selectedEduId, setSelectedEduId] = useState(null);
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  // 영상
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    const loadLearnPageData = async () => {
      try {
        setLoading(true);
        setError(null);

        const edus = await fetchEduList();

        setData({
          ...learnData,
          lessons: convertEdusToLessons(edus),
        });
      } catch (error) {
        setError("학습 정보를 불러오지 못했어요.");
      } finally {
        setLoading(false);
      }
    };

    loadLearnPageData();
  }, []);

  // 학습, 단어 핸들러
  const handleSelectEdu = async (eduId) => {
    try {
      setLoading(true);
      setError(null);
      setSelectedEduId(eduId);
      setSelectedWord(null);
      setSelectedVideo(null);

      const wordsData = await fetchWordsByEduId(eduId);
      setWords(wordsData);
    } catch (error) {
      setError("단어 목록을 불러오지 못했어요.");
    } finally {
      setLoading(false);
    }
  };

  // 단어 클릭 핸들러
  const handleSelectWord = async (word) => {
    try {
      setLoading(true);
      setError(null);
      setSelectedWord(word);

      const videoData = await fetchEduVideoById(word.eduVideoId);
      setSelectedVideo(videoData);
    } catch (error) {
      setError("수어 영상을 불러오지 못했어요.");
    } finally {
      setLoading(false);
    }
  };

  // 완료 버튼 핸들러
  const handleFinishWordStudy = async () => {
    if (!selectedWord) return;

    try {
      setLoading(true);
      setError(null);

      await finishWordStudy({
        userId: 1,
        eduWordMapId: selectedWord.eduWordMapId,
      });
    } catch (error) {
      setError("단어 학습 완료 처리에 실패했어요.");
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    selectedEduId,
    words,
    selectedWord,
    selectedVideo,
    handleSelectEdu,
    handleSelectWord,
    handleFinishWordStudy,
  };
};