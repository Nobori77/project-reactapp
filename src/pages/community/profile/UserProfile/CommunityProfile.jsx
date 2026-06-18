import { useParams } from "react-router-dom";
import * as S from "./communityProfileStyle";
import {
  cancelFollow,
  userFollow,
} from "../../communityApi/communityProfileApi";

const DEFAULT_PROFILE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";

const CommunityProfile = ({
  userNickname,
  userProfile,
  userIntro,
  userLevel,
  userLevelName,
  isMe,
  isFollow,
  onFollowChange,
}) => {
  const { userId } = useParams();

  const handleFollowToggle = async () => {
    try {
      const { success } = await userFollow(userId);
      if (success) onFollowChange();
    } catch (err) {
      console.error("팔로우 요청 실패:", err);
    }
  };

  const handleCancelFollow = async () => {
    try {
      await cancelFollow(userId);
      onFollowChange();
    } catch (err) {}
  };

  return (
    <S.ProfileBar>
      <S.AvatarImg
        src={userProfile}
        alt={userNickname}
        onError={(e) => {
          e.currentTarget.src = DEFAULT_PROFILE;
        }}
      />
      <S.UserInfoRow>
        <S.TextBlock>
          <S.Nickname>{userNickname}</S.Nickname>
          <S.TagRow>
            <S.InfoTag>
              Lv.{userLevel ?? 1} · {userLevelName ?? "입문자"}
            </S.InfoTag>
          </S.TagRow>
          <S.Bio>{userIntro}</S.Bio>
          <S.JoinInfo>{userIntro}</S.JoinInfo>
        </S.TextBlock>

        {/* 로그인 상태(isMe가 boolean) + 타인 프로필일 때만 팔로우 버튼 노출 */}
        {isMe === false && !isFollow && (
          <S.FollowButton onClick={handleFollowToggle}>+ 팔로우</S.FollowButton>
        )}
        {isMe === false && isFollow && (
          <S.FollowButton onClick={handleCancelFollow}>
            팔로우 취소
          </S.FollowButton>
        )}
      </S.UserInfoRow>
    </S.ProfileBar>
  );
};

export default CommunityProfile;
