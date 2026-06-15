import { useState, useEffect } from "react";
import { DEFAULT_IMAGES } from "../constants";
import { useNavigate } from "react-router-dom";
import { AuthorAvatar } from "../post/detail/postDetailStyle";
import * as S from "./sideUserProfileStyle";

export default function SideUserProfile() {
  const navigate = useNavigate();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:10000/api/community-profile")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setMembers(json.data);
      })
      .catch(() => {});
  }, []);

  return (
    <S.Card>
      <S.Title>최근 가입 멤버</S.Title>
      <S.MemberList>
        {members.map((member) => (
          <S.MemberItem
            key={member.id}
            onClick={() => navigate(`/community/profile/${member.id}`)}
          >
            <S.ProfileGroup>
              <S.AvatarWrapper>
                <AuthorAvatar
                  size="34px"
                  border-radius="10px"
                  src={member.userProfile}
                  alt={member.userNickname}
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
                  }}
                />
                <S.OnlineDot />
              </S.AvatarWrapper>
              <S.MemberInfo>
                <S.MemberName>{member.userNickname}</S.MemberName>
                <S.MemberStatus>{member.userIntro}</S.MemberStatus>
              </S.MemberInfo>
            </S.ProfileGroup>
            <S.LevelBadge>Lv.{member.userLevel ?? 1}</S.LevelBadge>
          </S.MemberItem>
        ))}
      </S.MemberList>
    </S.Card>
  );
}
