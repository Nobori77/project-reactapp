import styled from "styled-components";
import theme from "../../../styles/theme";

const imgVector =
  "https://www.figma.com/api/mcp/asset/ae9cf8c7-f2f4-48ac-a168-0f43c3f0ed15";
const imgVector1 =
  "https://www.figma.com/api/mcp/asset/6dced7bc-e9d3-45dd-906e-846871a7042b";

// ─── 후보 A: 멀티 블롭 스타일 (메인 페이지 Blob 6개와 동일 구성) ───
// 흰색 배경 위에 메인 페이지와 동일한 6가지 색상의 블롭을 배치.
// 텍스트는 키컬러(#4359FC) 중심으로 구성.

const Container = styled.div`
  background-color: ${theme.PALETTE.white};
  position: relative;
  overflow: hidden;
  /* height: 650px; */
`;

const BlobGreen = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -80px;
  top: 60px;
  width: 260px;
  height: 260px;
  background-color: #a8f0d8;
  filter: blur(80px);
  opacity: 0.35;
  z-index: 0;
  pointer-events: none;
`;

const BlobBlue = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -60px;
  top: -50px;
  width: 340px;
  height: 340px;
  background-color: #7eb8ff;
  filter: blur(100px);
  opacity: 0.32;
  z-index: 0;
  pointer-events: none;
`;

const BlobOrange = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 520px;
  top: -20px;
  width: 230px;
  height: 230px;
  background-color: #ffbf80;
  filter: blur(100px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

const BlobYellow = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 780px;
  top: 60px;
  width: 230px;
  height: 230px;
  background-color: #ffd96b;
  filter: blur(80px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

const BlobPurple = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -50px;
  right: -100px;
  width: 320px;
  height: 320px;
  background-color: #c4a8ff;
  filter: blur(90px);
  opacity: 0.32;
  z-index: 0;
  pointer-events: none;
`;

const BlobPink = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 1050px;
  top: 10px;
  width: 230px;
  height: 230px;
  background-color: #fbc8ff;
  filter: blur(80px);
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

const TitleBlack = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  /* line-height: 51px; */
  letter-spacing: -0.72px;
  color: ${theme.PALETTE.black};
  margin: 0;

  > p {
    margin: 0;
  }
`;
const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h4};
  font-weight: ${theme.FONT_WEIGHT.bold};
  /* line-height: 51px; */
  letter-spacing: -0.72px;
  color: ${theme.PALETTE.primary.main};
  margin: 0;

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

const EventItem = styled.div`
  background: rgba(255, 255, 255, 0.65);
  border: 1px solid ${theme.PALETTE.primary.light};
  border-radius: 12px;
  padding: 13px 16px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(6px);
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
    opacity: 0.12;
  }

  &.vector2 {
    bottom: -20px;
    right: 20px;
    width: 300px;
    height: 300px;
    opacity: 0.08;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// 후보 A — 메인 페이지와 동일한 6색 블롭 구성, 흰 배경, 키컬러 텍스트
const CommunityHeaderA = () => {
  return (
    <Container>
      <BlobGreen />
      <BlobBlue />
      <BlobOrange />
      <BlobYellow />
      <BlobPurple />
      <BlobPink />
      <Inner>
        <MainSection>
          <LeftSection>
            <TitleBlack>함께 배우고 성장하는</TitleBlack>
            <Title>이음 커뮤니티</Title>
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

          {/* <VectorImage className="vector1">
            <img alt="" src={imgVector} />
          </VectorImage>
          <VectorImage className="vector2">
            <img alt="" src={imgVector1} />
          </VectorImage> */}
        </MainSection>
      </Inner>
    </Container>
  );
};

export default CommunityHeaderA;
