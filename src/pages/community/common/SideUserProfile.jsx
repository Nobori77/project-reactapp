import styled from "styled-components";
import theme from "../../../styles/theme";
import {
  hoverStyle,
  sideCardStyle,
  sideComponentStyle,
  sideHeaderStyle,
} from "../communityStyle";
import { BORDER_STYLE, DEFAULT_IMAGES } from "../constants";
import { useNavigate } from "react-router-dom";
import { h10Bold } from "../../../styles/common";
import { AuthorAvatar } from "../post/detail/postDetailStyle";

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
    <Card>
      <Title>지금 활동 중인 멤버</Title>
      <MemberList>
        {members.map((member) => (
          // 각 프로필 타일 (클릭 하면 프로필로 이동하게 하기)
          <MemberItem
            key={member.id}
            onClick={() => navigate(`/community/profile/${member.id}`)}
          >
            <ProfileGroup>
              <AvatarWrapper>
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
                <OnlineDot />
              </AvatarWrapper>
              <MemberInfo>
                <MemberName>{member.name}</MemberName>
                <MemberStatus>{member.status}</MemberStatus>
              </MemberInfo>
            </ProfileGroup>
            <LevelBadge>Lv.{member.level}</LevelBadge>
          </MemberItem>
        ))}
      </MemberList>
    </Card>
  );
}

const Card = styled.div`
  background: ${theme.PALETTE.white};
  ${sideCardStyle}
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.p`
  ${sideHeaderStyle}
  color: ${theme.TEXT_COLOR.basic};
  ${h10Bold}
`;

const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
`;

// 멤버 각 요소
const MemberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: ${BORDER_STYLE.original};
  ${sideComponentStyle}
  ${hoverStyle}
`;

const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
`;

// const Avatar = styled.img`
//   display: block;
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;

const OnlineDot = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: ${theme.PALETTE.secondary.main};
  border-radius: 50%;
  border: 1.5px solid ${theme.PALETTE.white};
`;

const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 75px;
  white-space: nowrap;
`;

const MemberName = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h11};
`;

const MemberStatus = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
  letter-spacing: -0.2px;
`;

const LevelBadge = styled.div`
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 6px;
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h12};
  white-space: nowrap;
  text-align: center;
`;
