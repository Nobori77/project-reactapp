import styled from "styled-components";
import theme from "../../../styles/theme";

const imgVector =
  "https://www.figma.com/api/mcp/asset/ae9cf8c7-f2f4-48ac-a168-0f43c3f0ed15";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/6dced7bc-e9d3-45dd-906e-846871a7042b";

// ─── 후보 B: 소프트 블루 그라데이션 + 블롭 2개 (미니멀 스타일) ───
// 극도로 연한 파란색(extraLight) → 흰색 배경 그라데이션 위에
// 파란+보라 블롭 2개만 사용해 조용하고 정갈한 느낌.
// 제목은 짙은 파란색 → 키컬러 그라데이션 텍스트로 표현.

const Container = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.PALETTE.primary.extraLight} 0%,
    ${theme.PALETTE.white} 65%
  );
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid ${theme.PALETTE.primary.extraLight};
`;

const BlobBlue = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -100px;
  top: -60px;
  width: 380px;
  height: 380px;
  background-color: #7eb8ff;
  filter: blur(110px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
`;

const BlobPurple = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -60px;
  right: -120px;
  width: 340px;
  height: 340px;
  background-color: #c4a8ff;
  filter: blur(100px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 32px;
  padding-bottom: 16px;
  width: 1320px;
  height: 100%;
  position: relative;
  gap: 44px;
  z-index: 1;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 0 445px;
`;

const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 51px;
  letter-spacing: -0.72px;
  margin: 0;

  background: linear-gradient(
    135deg,
    ${theme.PALETTE.primary.dark} 0%,
    ${theme.PALETTE.primary.main} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  > p {
    margin: 0;
  }
`;

const Description = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.medium};
  line-height: 24px;
  letter-spacing: -0.32px;
  color: ${theme.TEXT_COLOR.basic};
  margin: 0;
`;

const StatisticsSection = styled.div`
  display: flex;
  gap: 44px;
  align-items: center;
`;

const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
`;

const StatNumber = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h7};
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.48px;
  color: ${theme.PALETTE.primary.main};
  margin: 0;
`;

const StatLabel = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  margin: 0;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 0 0 312px;
`;

// 왼쪽 키컬러 라인 포인트 강조 스타일
const EventItem = styled.div`
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.PALETTE.primary.extraLight};
  border-left: 3px solid ${theme.PALETTE.primary.main};
  border-radius: 12px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 6px rgba(67, 89, 252, 0.06);
`;

const EventText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 22px;
  letter-spacing: -0.28px;
  color: ${theme.PALETTE.primary.dark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const VectorImage = styled.div`
  position: absolute;

  &.vector1 {
    right: 100px;
    top: -92px;
    width: 196px;
    height: 200px;
    opacity: 0.1;
  }

  &.vector2 {
    bottom: -20px;
    right: 20px;
    width: 300px;
    height: 300px;
    opacity: 0.07;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 후보 B — 연한 파란 배경 + 파란/보라 블롭 2개, 그라데이션 제목 텍스트
const CommunityHeaderB = () => {
  return (
    <Container>
      <BlobBlue />
      <BlobPurple />
      <Inner>
        <MainSection>
          <LeftSection>
            <Title>
              <p>함께 배우고 성장하는</p>
              <p>이음 커뮤니티</p>
            </Title>
            <Description>
              청각장애인, 수어 학습자, 교사 모두가 함께하는 따뜻한 소통
              공간입니다.
            </Description>
            <StatisticsSection>
              <StatItem>
                <StatNumber>0000</StatNumber>
                <StatLabel>전체 회원</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>000</StatNumber>
                <StatLabel>오늘 게시글</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>00</StatNumber>
                <StatLabel>지금 접속중</StatLabel>
              </StatItem>
            </StatisticsSection>
          </LeftSection>

          <RightSection>
            <EventItem>
              <EventText>이달의 베스트 작성자 모집 중</EventText>
            </EventItem>
            <EventItem>
              <EventText>수어 챌린지 이벤트</EventText>
            </EventItem>
            <EventItem>
              <EventText>자격시험 응시료 한시적 할인 (최대 80%)</EventText>
            </EventItem>
          </RightSection>

          <VectorImage className="vector1">
            <img alt="" src={imgVector} />
          </VectorImage>
          <VectorImage className="vector2">
            <img alt="" src={imgVector1} />
          </VectorImage>
        </MainSection>
      </Inner>
    </Container>
  );
};

export default CommunityHeaderB;
