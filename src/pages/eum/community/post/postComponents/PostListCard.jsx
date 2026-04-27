import styled from "styled-components";
import theme from "../../../../../styles/theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faEye, faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px;
  padding: 40px;
  width: 984px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  border: 2px solid transparent;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.2s ease;

  &:hover {
    border-color: ${theme.PALETTE.primary.main};
    box-shadow: 0 8px 24px rgba(67, 89, 252, 0.12);
    transform: translateY(-2px);
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const Tag = styled.span`
  background: ${theme.PALETTE.primary.main};
  color: ${theme.PALETTE.white};
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h12};
  letter-spacing: 0.1px;
  line-height: 16px;
  border-radius: 100px;
  padding: 2px 8px;
  white-space: nowrap;
`;

const TimeText = styled.p`
  font-weight: ${theme.FONT_WEIGHT.medium};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  white-space: nowrap;
`;

const MidRow = styled.div`
  display: flex;
  gap: 28px;
  align-items: flex-end;
  width: 100%;
  margin-top: 16px;
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

const Title = styled.p`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h5};
  color: ${theme.TEXT_COLOR.basic};
  letter-spacing: -0.84px;
  margin: 0;
  word-break: keep-all;
`;

const Description = styled.p`
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h8};
  color: ${theme.GRAYSCALE[9]};
  letter-spacing: -0.54px;
  line-height: 28px;
  margin: 9px 0 0 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Thumbnail = styled.div`
  width: 96px;
  height: 96px;
  border-radius: 20px;
  background: ${theme.GRAYSCALE[0]};
  flex-shrink: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 36px;
`;

const AuthorArea = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.img`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.span`
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.TEXT_COLOR.basic};
  letter-spacing: 0.32px;
  white-space: nowrap;
`;

const StatsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    font-size: ${theme.FONT_SIZE.h11};
    color: ${theme.GRAYSCALE[9]};
  }

  span {
    font-weight: ${theme.FONT_WEIGHT.regular};
    font-size: ${theme.FONT_SIZE.h11};
    color: ${theme.TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

const PostListCard = ({
  tag = "학습 인증",
  time = "방금 전",
  title = "수어에서 감정 표현할 때 표정이 얼마나 중요한가요?",
  content = "수어에서 표정과 몸짓이 단어만큼 중요하다고 들었는데 실제로 어느 정도 비중을 두어야 할지 궁금합니다.",
  thumbnail = null,
  authorName = "수어러버김지민",
  authorAvatar = null,
  likes = 42,
  comments = 18,
  views = 887,
}) => {
  return (
    <Card>
      <TopRow>
        <Tag>{tag}</Tag>
        <TimeText>{time}</TimeText>
      </TopRow>

      <MidRow>
        <ContentArea>
          <Title>{title}</Title>
          <Description>{content}</Description>
        </ContentArea>
        <Thumbnail>
          {thumbnail && <img src={thumbnail} alt="게시글 썸네일" />}
        </Thumbnail>
      </MidRow>

      <BottomRow>
        <AuthorArea>
          {authorAvatar && <Avatar src={authorAvatar} alt={authorName} />}
          <AuthorName>{authorName}</AuthorName>
        </AuthorArea>
        <StatsArea>
          <StatItem>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likes}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faComment} />
            <span>{comments}</span>
          </StatItem>
          <StatItem>
            <FontAwesomeIcon icon={faEye} />
            <span>{views}</span>
          </StatItem>
        </StatsArea>
      </BottomRow>
    </Card>
  );
};

export default PostListCard;
