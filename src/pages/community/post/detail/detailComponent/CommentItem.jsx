import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots, faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  CommentItemWrapper,
  LeftArea,
  Avatar,
  DefaultAvatar,
  Body,
  AuthorName,
  CommentText,
  ReactionsRow,
  ReactionItem,
  AccessibilityRow,
  AccessBtn,
  RightArea,
  TimeText,
  ReportButton,
} from "./commentStyle";

const reportIconImg =
  "https://www.figma.com/api/mcp/asset/3823b07b-8dff-47fb-9bc5-b1dacb0103e8";

const CommentItem = ({
  avatar = null,
  userNickname = "사용자",
  isAuthor = false,
  commentId = null,
  commentContent = "",
  likeCount = 1,
  replyCount = 1,
  commentCreateAt = "방금 전",
  showAccessibility = true,
}) => {
  const isReply = commentId !== null;
  const displayLines = commentContent ? commentContent.split("\n") : [];

  return (
    <CommentItemWrapper isReply={isReply}>
      <LeftArea>
        {avatar ? (
          <Avatar>
            <img src={avatar} alt={userNickname} />
          </Avatar>
        ) : (
          <DefaultAvatar>👤</DefaultAvatar>
        )}
        <Body>
          <AuthorName isAuthor={isAuthor}>{userNickname}</AuthorName>
          <CommentText>
            {displayLines.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </CommentText>
          <ReactionsRow>
            <ReactionItem>
              <FontAwesomeIcon icon={faHeart} />
              <span>{likeCount}</span>
            </ReactionItem>
            <ReactionItem>
              <FontAwesomeIcon icon={faCommentDots} />
              <span>{replyCount}</span>
            </ReactionItem>
          </ReactionsRow>
          {showAccessibility && (
            <AccessibilityRow>
              <AccessBtn variant="blue">수어로 보기</AccessBtn>
              <AccessBtn variant="green">글 읽어주기</AccessBtn>
            </AccessibilityRow>
          )}
        </Body>
      </LeftArea>
      <RightArea>
        <TimeText>{commentCreateAt}</TimeText>
        <ReportButton aria-label="댓글 신고">
          <img src={reportIconImg} alt="신고" />
        </ReportButton>
      </RightArea>
    </CommentItemWrapper>
  );
};

export default CommentItem;
