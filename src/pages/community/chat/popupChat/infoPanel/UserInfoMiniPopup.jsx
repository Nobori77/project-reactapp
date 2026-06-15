import React from "react";
import { useNavigate } from "react-router-dom";
import { colors } from "../../../constants";
import OutlineButton from "../../../common/OutlineButton";
import * as S from "../../ChatStyle";
import UserReportButton from "../../../report/userreport/UserReportButton";
import defaultProfile from "../../../assets/chat/chat_default_profile.svg";
import { useChatContext } from "../../../context/ChatContext";

// 유저 레벨 구하는 함수
const calcLevel = (totalExp) => {
  let level = 1;
  let remaining = totalExp ?? 0;
  while (level < 100) {
    const required = 100 + (level - 1) * 20;
    if (remaining < required) break;
    remaining -= required;
    level++;
  }
  return level;
};

const getLevelName = (level) => {
  if (level >= 100) return "이음";
  if (level >= 90) return "수어 마스터";
  if (level >= 80) return "연결자";
  if (level >= 70) return "숙련가";
  if (level >= 60) return "공감가";
  if (level >= 50) return "표현가";
  if (level >= 40) return "소통가";
  if (level >= 30) return "실천가";
  if (level >= 20) return "학습자";
  if (level >= 10) return "새싹 수어인";
  return "입문자";
};

const UserInfoMiniPopup = ({
  id,
  userId,
  userProfile,
  userNickname,
  userExp,
  onClose,
}) => {
  const navigate = useNavigate();
  const { closeView } = useChatContext();

  const goToProfile = () => {
    navigate(`/community/profile/${userId}`);
    closeView();
  };

  const level = calcLevel(userExp);
  const levelName = getLevelName(level);

  console.log("팝업 유저 프로필의 유저 아이디: ", id);
  console.log("팝업 유저 프로필의 또다른 아이디: ", userId);

  return (
    <S.MiniPopupOverlay onClick={onClose}>
      <S.MiniPopupCard onClick={(e) => e.stopPropagation()}>
        <S.MiniPopupCloseBtn onClick={onClose}>✕</S.MiniPopupCloseBtn>
        <S.UserBigAvatarBox>
          <img
            src={userProfile}
            alt={userNickname}
            onError={(e) => {
              e.target.src = defaultProfile;
            }}
          />
        </S.UserBigAvatarBox>
        <S.UserInfoName>{userNickname}</S.UserInfoName>
        <S.LevelRoleBadge>
          Lv.{level} · {levelName}
        </S.LevelRoleBadge>
        <S.Divider />
        <S.MiniPopupBtnGroup>
          <OutlineButton
            borderColor={colors.primary}
            textColor={colors.primary}
            padding="8px 16px"
          >
            + 팔로우
          </OutlineButton>
          {/* <OutlineButton
            bgColor={colors.primary}
            borderColor={colors.primary}
            textColor={colors.textWhite}
            padding="8px 16px"
          >
            1:1 채팅 시작
          </OutlineButton> */}
          <OutlineButton
            borderColor={colors.live}
            textColor={colors.live}
            padding="8px 16px"
            onClick={goToProfile}
          >
            유저 프로필로 이동
          </OutlineButton>
        </S.MiniPopupBtnGroup>
        <S.Divider />
        <S.MiniPopupBtnGroup>
          <UserReportButton userId={id}>신고하기</UserReportButton>
          <OutlineButton
            borderColor={colors.border}
            textColor={colors.textSub}
            padding="8px 16px"
          >
            이 유저 차단하기
          </OutlineButton>
        </S.MiniPopupBtnGroup>
      </S.MiniPopupCard>
    </S.MiniPopupOverlay>
  );
};

export default UserInfoMiniPopup;
