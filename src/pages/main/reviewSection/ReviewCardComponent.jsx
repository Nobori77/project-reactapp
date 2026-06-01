import React from "react";
import * as S from "./style.js";

const DUMMY_PROFILES = [
  "/assets/image/main/dummyUserProfileImg1.svg",
  "/assets/image/main/dummyUserProfileImg2.svg",
  "/assets/image/main/dummyUserProfileImg3.svg",
  "/assets/image/main/dummyUserProfileImg4.svg",
  "/assets/image/main/dummyUserProfileImg5.svg",
  "/assets/image/main/dummyUserProfileImg6.svg",
  "/assets/image/main/dummyUserProfileImg7.svg",
];

const ReviewCard = ({ review, index }) => {
  const profileImg =
    review.img || DUMMY_PROFILES[index % DUMMY_PROFILES.length];

  return (
    <S.ReviewCard>
      <S.StarRow>
        {[...Array(review.reviewRating || 5)].map((_, j) => (
          <img key={j} src="/assets/image/main/starIcon.svg" alt="star" />
        ))}
      </S.StarRow>
      <S.ReviewText>{review.reviewContent || review.text}</S.ReviewText>
      <S.ProfileRow>
        <S.ProfileImg src={profileImg} alt={review.userNickname || review.name} />
        <S.ProfileInfo>
          <S.ProfileName>{review.userNickname || review.name}</S.ProfileName>
          <S.ProfileSub>{review.userJob || review.sub}</S.ProfileSub>
        </S.ProfileInfo>
      </S.ProfileRow>
    </S.ReviewCard>
  );
};

export default ReviewCard;
