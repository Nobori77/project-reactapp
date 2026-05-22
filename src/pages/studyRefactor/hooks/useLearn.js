// 학습 상태 훅: 로드맵과 퀘스트 화면 데이터를 관리합니다.
import { useEffect, useState } from "react";
import { fetchEduVideoById, fetchLearnList, fetchWordsByLearnId, finishLearnWord } from "../apis/LearnApi";
import { learnHomeMock } from "../learn/data/learnMock";
import { mergeLearnListToHome } from "../mappers/learnMapper";
import { useStudyUser } from "./useStudyUser";

export const useLearn = () => {
  const { userId, isGuest } = useStudyUser();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(learnHomeMock);
  const [wordLoading, setWordLoading] = useState(false);
  const [wordError, setWordError] = useState(null);
  const [selectedLearnId, setSelectedLearnId] = useState(null);
  const [selectedLessonTitle, setSelectedLessonTitle] = useState("");
  const [words, setWords] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // 학습목록조회함수: 백엔드 학습 목록을 로드맵에 반영하고 실패하면 임시데이터를 유지합니다.
  useEffect(() => {
    let ignore = false;

    const loadLearn = async () => {
      setLoading(true);
      setError(null);

      try {
        const learnList = await fetchLearnList();
        if (ignore) return;
        setData(mergeLearnListToHome(learnHomeMock, learnList));
      } catch {
        if (ignore) return;
        setData(learnHomeMock);
        setError("학습 서버 연결이 어려워 임시데이터를 보여주고 있어요.");
      } finally {
        if (!ignore) setLoading(false);
      }
    };

    loadLearn();

    return () => {
      ignore = true;
    };
  }, []);

  // 학습선택함수: 선택한 학습의 단어 목록을 백엔드에서 불러옵니다.
  const handleSelectLearn = async (lesson) => {
    if (!lesson?.id || String(lesson.id).startsWith("learn-")) return;

    setWordLoading(true);
    setWordError(null);
    setSelectedLearnId(lesson.id);
    setSelectedLessonTitle(lesson.title);
    setSelectedWord(null);
    setSelectedVideo(null);

    try {
      const wordList = await fetchWordsByLearnId(lesson.id);
      setWords(wordList || []);
    } catch {
      setWords([]);
      setWordError("단어 목록을 불러오지 못했어요.");
    } finally {
      setWordLoading(false);
    }
  };

  // 단어선택함수: 선택한 단어의 영상을 백엔드에서 불러옵니다.
  const handleSelectWord = async (word) => {
    if (!word) return;

    setWordLoading(true);
    setWordError(null);
    setSelectedWord(word);
    setSelectedVideo(null);

    try {
      if (!word.eduVideoId) throw new Error("영상 번호 없음");
      const video = await fetchEduVideoById(word.eduVideoId);
      setSelectedVideo(video);
    } catch {
      setWordError("수어 영상을 불러오지 못했어요.");
    } finally {
      setWordLoading(false);
    }
  };

  // 단어완료함수: 로그인 상태이고 연결 ID가 있을 때 학습 완료를 저장합니다.
  const handleFinishWord = async () => {
    if (!selectedWord?.eduWordMapId || isGuest || !userId) {
      setWordError("로그인 후 실제 학습 완료 기록을 저장할 수 있어요.");
      return;
    }

    setWordLoading(true);
    setWordError(null);

    try {
      await finishLearnWord({ userId, eduWordMapId: selectedWord.eduWordMapId });
    } catch {
      setWordError("학습 완료 처리에 실패했어요.");
    } finally {
      setWordLoading(false);
    }
  };

  return {
    loading,
    error,
    data,
    wordLoading,
    wordError,
    selectedLearnId,
    selectedLessonTitle,
    words,
    selectedWord,
    selectedVideo,
    handleSelectLearn,
    handleSelectWord,
    handleFinishWord,
  };
};
