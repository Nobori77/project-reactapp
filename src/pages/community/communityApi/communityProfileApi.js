const ROOT_URL = "http://localhost:10000/api";

// 유저 정보 로드
export const getCommunityUserInfo = async (userId) => {
  const response = await fetch(`${ROOT_URL}/community-profile/${userId}`);
  if (!response.ok) throw new Error("채팅 메시지를 불러오는 데 실패했습니다.");
  const { success, message, data } = await response.json();
  return { success, message, data };
};
