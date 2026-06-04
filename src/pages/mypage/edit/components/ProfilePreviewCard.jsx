import React from "react";

import S from "../style";

const DEFAULT_PROFILE_IMAGE =
  "https://gi.esmplus.com/cjfals1015/eum/userProfile/thumbnail/default1.png";

const S3_PROFILE_BASE_URL =
  "https://testapp-gyuhoroh213589.s3.ap-northeast-2.amazonaws.com";

// 기본 프로필 여부 확인
const isDefaultProfile = (profileImage) => {
  return (
    !profileImage ||
    profileImage === "default.jpg" ||
    profileImage === "null"
  );
};

// 프로필 이미지 경로 처리
const getProfileImageSrc = (profileImage) => {
  if (isDefaultProfile(profileImage)) {
    return DEFAULT_PROFILE_IMAGE;
  }

  if (profileImage.startsWith("http") || profileImage.startsWith("blob:")) {
    return profileImage;
  }

  const filePath = profileImage.startsWith("/") ? profileImage : `/${profileImage}`;

  return `${S3_PROFILE_BASE_URL}${filePath}`;
};

// 이미지 조회 실패 시 기본 이미지로 대체
const handleProfileImageError = (e) => {
  e.currentTarget.onerror = null;
  e.currentTarget.src = DEFAULT_PROFILE_IMAGE;
};

const ProfilePreviewCard = ({ userInfo, previewImage, onLevelClick }) => {
  // 백엔드 레벨 계산 결과
  const level = userInfo?.userLevel || 1;
  const levelName = userInfo?.userLevelName || "입문자";

  // 프로필 이미지 경로 처리
  const imageSrc = previewImage || getProfileImageSrc(userInfo?.userProfile);

  return (
    <S.PreviewCardBox>
      {/* 미리보기 제목 */}
      <S.PreviewTitle>프로필 미리보기</S.PreviewTitle>

      <S.PreviewInnerBox>
        {/* 프로필 이미지 미리보기 */}
        <S.PreviewProfileImage>
          <img
            key={imageSrc}
            src={imageSrc}
            alt=""
            draggable={false}
            onError={handleProfileImageError}
          />
        </S.PreviewProfileImage>

        {/* 사용자 정보 */}
        <S.PreviewUserName>
          {userInfo?.userNickname || "사용자"}
        </S.PreviewUserName>

        <S.PreviewLevelButton type="button" onClick={onLevelClick}>
          Lv.{level} {levelName}
        </S.PreviewLevelButton>

        <S.PreviewIntro>
          {userInfo?.userIntro || "자기소개가 없습니다."}
        </S.PreviewIntro>

        <S.PreviewGuideText>
          다른 사용자에게 이렇게 보입니다
        </S.PreviewGuideText>
      </S.PreviewInnerBox>
    </S.PreviewCardBox>
  );
};

export default ProfilePreviewCard;