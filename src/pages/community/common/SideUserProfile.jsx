import { DEFAULT_IMAGES } from "../constants";
import { useNavigate } from "react-router-dom";
import { AuthorAvatar } from "../post/detail/postDetailStyle";
import * as S from "./sideUserProfileStyle";

const FIGMA_AVATAR =
  "https://www.figma.com/api/mcp/asset/30837f06-8619-4116-9d6a-fa29c45a9b36";

const MOCK_MEMBERS = [
  {
    id: 1,
    name: "수어러버김지민",
    status: "학습 인증 게시 중",
    level: 7,
    avatarUrl: FIGMA_AVATAR,
  },
  {
    id: 2,
    name: "수어러너홍지민",
    status: "학습 인증 게시 중",
    level: 7,
    avatarUrl: FIGMA_AVATAR,
  },
  {
    id: 3,
    name: "수어마스터",
    status: "자유 채팅 중",
    level: 15,
    avatarUrl: FIGMA_AVATAR,
  },
  {
    id: 4,
    name: "열공맘",
    status: "게시글 열람 중",
    level: 7,
    avatarUrl: FIGMA_AVATAR,
  },
];

export default function SideUserProfile({ members = MOCK_MEMBERS }) {
  const navigate = useNavigate();
  return (
    <S.Card>
      <S.Title>지금 활동 중인 멤버</S.Title>
      <S.MemberList>
        {members.map((member) => (
          // 각 프로필 타일 (클릭 하면 프로필로 이동하게 하기)
          <S.MemberItem
            key={member.id}
            onClick={() => navigate(`/community/profile/${member.id}`)}
          >
            <S.ProfileGroup>
              <S.AvatarWrapper>
                {/* <Avatar src={member.avatarUrl} alt={member.name} /> */}
                <AuthorAvatar
                  size="34px"
                  border-radius="10px"
                  src={member.avatarUrl}
                  alt={member.name}
                  onError={(e) => {
                    e.currentTarget.src = DEFAULT_IMAGES.authorProfile;
                  }}
                />
                <S.OnlineDot />
              </S.AvatarWrapper>
              <S.MemberInfo>
                <S.MemberName>{member.name}</S.MemberName>
                <S.MemberStatus>{member.status}</S.MemberStatus>
              </S.MemberInfo>
            </S.ProfileGroup>
            <S.LevelBadge>Lv.{member.level}</S.LevelBadge>
          </S.MemberItem>
        ))}
      </S.MemberList>
    </S.Card>
  );
}
