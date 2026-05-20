// api 분리/fetch 담당

const BASE_URL = "http://localhost:10000";

// 학습 목록 조회
export const fetchEduList = async () => {
  const response = await fetch(`${BASE_URL}/api/edus`);

  if (!response.ok) {
    throw new Error("학습 목록 조회 실패");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
};

// 학습별 단어 목록 조회
export const fetchWordsByEduId = async (eduId) => {
  const response = await fetch(`${BASE_URL}/api/words/edu/${eduId}`);

  if (!response.ok) {
    throw new Error("학습별 단어 목록 조회 실패");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
};

// 수어 영상 상세 조회
export const fetchEduVideoById = async (eduVideoId) => {
  const response = await fetch(`${BASE_URL}/api/edu-videos/${eduVideoId}`);

  if (!response.ok) {
    throw new Error("수어 영상 조회 실패");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result.data;
};

// 단어 학습 완료 처리
export const finishWordStudy = async ({ userId, eduWordMapId }) => {
  const response = await fetch(`${BASE_URL}/api/word-studies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      eduWordMapId,
    }),
  });

  if (!response.ok) {
    throw new Error("단어 학습 완료 처리 실패");
  }

  const result = await response.json();

  if (!result.success) {
    throw new Error(result.message);
  }

  return result;
};