import theme from "../../../../../styles/theme";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  AccessBtn,
  AccessibilityBox,
  AccessibilityLabel,
  ActionButtons,
  ActionRow,
  AuthorAvatar,
  AuthorMeta,
  AuthorName,
  AuthorRow,
  AuthorSubRow,
  BlockQuote,
  BodyText,
  Divider,
  EmojiItem,
  HighlightWord,
  IconButton,
  ImageArea,
  ImageBox,
  ImageCaption,
  LevelBadge,
  LikeButton,
  MetaText,
  Paragraph,
  PostContentWrapper,
  PostTitle,
  Tag,
  TagRow,
} from "../postDetailStyle";

const { PALETTE, GRAYSCALE } = theme;

const authorProfileImg =
  "https://www.figma.com/api/mcp/asset/c2cb9995-4cdf-4fcb-97c9-8a6c124289ab";
const reportIconImg =
  "https://www.figma.com/api/mcp/asset/3823b07b-8dff-47fb-9bc5-b1dacb0103e8";
const linkIconImg =
  "https://www.figma.com/api/mcp/asset/307137f6-4a5b-4f60-8e17-56fb9a225552";

const PostContent = ({
  category = "학습 인증",
  breadcrumb = "이음 커뮤니티 › 학습 인증 게시판",
  title = "수어 알파벳 완전 마스터! 1달 열공 후기 남깁니다 🙌",
  authorName = "수어러버김지민",
  authorLevel = "Lv.7",
  authorAvatar = authorProfileImg,
  postDate = "2025.03.08 (오늘)",
  views = 324,
  likes = 42,
  tags = ["# 수어기초", "# 알파벳", "# 태그1", "# 태그2"],
}) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked((prev) => !prev);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div>
      <PostContentWrapper>
        <PostTitle>{title}</PostTitle>

        {/* 게시글 작성자 정보 */}
        <AuthorRow>
          <AuthorAvatar src={authorAvatar} alt={authorName} />
          <AuthorMeta>
            <AuthorName>{authorName}</AuthorName>
            <AuthorSubRow>
              <LevelBadge>{authorLevel}</LevelBadge>
              <MetaText>
                · {postDate} · 조회 {views}
              </MetaText>
            </AuthorSubRow>
          </AuthorMeta>
        </AuthorRow>

        {/* 구분선 */}
        <Divider />

        {/* 게시글 몸체 */}
        <BodyText>
          <Paragraph>안녕하세요! 이음 커뮤니티 여러분 😊</Paragraph>

          <Paragraph>
            드디어 제가 <HighlightWord>수어 알파벳 마스터</HighlightWord> 도전을
            완료했어요! 1달 전부터 시작해서 매일 꾸준히 연습한 결과를 오늘
            공유하려고 합니다.
          </Paragraph>

          <Paragraph>
            처음엔 정말 막막했어요. 손 모양 하나하나가 너무 헷갈리고, 특히
            비슷하게 생긴 ㄱ, ㄴ, ㄷ 같은 자음들은 진짜 무슨 차이인지 한참을
            봐야 했어요. 그런데 이음 앱의{" "}
            <HighlightWord>수형 연습 기능</HighlightWord> 을 사용하면서 카메라로
            직접 내 손을 인식하니까 훨씬 빨리 늘더라고요!
          </Paragraph>

          <BlockQuote>
            <p style={{ margin: 0 }}>
              "처음 2주는 그냥 인풋 기간이라고 생각하고 무조건 보기만 했어요.
            </p>
            <p style={{ margin: 0 }}>
              3주차부터 직접 따라 하면서 피드백 받으니 확실히 달랐어요."
            </p>
          </BlockQuote>

          <Paragraph>
            특히 제가 추천하는 방법은{" "}
            <HighlightWord>하루 15분, 같은 시간에 연습하기</HighlightWord> 예요.
            출근 전 아침 7시에 딱 알람 맞춰서 이음 앱 열고 오늘의 학습 하는 게
            습관이 됐어요. 한 달 동안 단 하루도 빠지지 않고 연속 30일 달성! 🎉
          </Paragraph>

          <Paragraph>
            아래에 제가 오늘 촬영한 수어 알파벳 영상 썸네일을 첨부했어요.
            <br />
            영상은 조만간 수어 영상 게시판에도 올릴 예정이에요. 다들 응원해
            주세요! 💪
          </Paragraph>

          <ImageArea>
            <ImageBox>
              <EmojiItem>🤟</EmojiItem>
              <EmojiItem>✌️</EmojiItem>
              <EmojiItem>👌</EmojiItem>
              <EmojiItem>🤙</EmojiItem>
              <EmojiItem>👍</EmojiItem>
            </ImageBox>
            <ImageCaption $color={GRAYSCALE[9]}>
              수어 알파벳 연습 영상 스틸컷 (촬영: 2025.03.08)
            </ImageCaption>
          </ImageArea>
        </BodyText>

        {/* 해당 게시글의 태그 */}
        <TagRow>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </TagRow>

        {/* 접근성 도구 */}
        <AccessibilityBox>
          <AccessibilityLabel $color={PALETTE.primary.main}>
            접근성 도구
          </AccessibilityLabel>
          <AccessBtn variant="blue" pos="180px">
            수어로 보기
          </AccessBtn>
          <AccessBtn variant="green" pos="466px">
            글 읽어주기
          </AccessBtn>
        </AccessibilityBox>

        {/* 게시글 관련 액션 버튼 */}
        <ActionRow>
          <LikeButton liked={liked} onClick={handleLike}>
            <FontAwesomeIcon icon={faHeart} />
            <span>{likeCount}</span>
          </LikeButton>
          <ActionButtons>
            <IconButton aria-label="링크 복사">
              <img src={linkIconImg} alt="링크" />
            </IconButton>
            <IconButton danger aria-label="게시글 신고">
              <img src={reportIconImg} alt="신고" />
            </IconButton>
          </ActionButtons>
        </ActionRow>
      </PostContentWrapper>

      {/* 댓글 섹션 */}
      {/* <CommentSection /> */}
    </div>
  );
};

export default PostContent;
