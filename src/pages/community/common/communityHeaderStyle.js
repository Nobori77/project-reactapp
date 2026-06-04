import styled from "styled-components";
import theme from "../../../styles/theme";

export const Container = styled.div`
  background-color: ${theme.PALETTE.white};
  position: relative;
  overflow: hidden;
  height: 650px;
`;

export const BlobGreen = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -120px;
  top: 100px;
  width: 400px;
  height: 400px;
  background-color: #a8f0d8;
  filter: blur(110px);
  opacity: 0.35;
  z-index: 0;
  pointer-events: none;
`;

export const BlobBlue = styled.div`
  position: absolute;
  border-radius: 50%;
  left: -100px;
  top: -80px;
  width: 520px;
  height: 520px;
  background-color: #7eb8ff;
  filter: blur(140px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

export const BlobOrange = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 460px;
  top: 160px;
  width: 340px;
  height: 340px;
  background-color: #ffbf80;
  filter: blur(120px);
  opacity: 0.25;
  z-index: 0;
  pointer-events: none;
`;

export const BlobYellow = styled.div`
  position: absolute;
  border-radius: 50%;
  left: 700px;
  bottom: 20px;
  width: 340px;
  height: 340px;
  background-color: #ffd96b;
  filter: blur(110px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

export const BlobPurple = styled.div`
  position: absolute;
  border-radius: 50%;
  top: -90px;
  right: -120px;
  width: 500px;
  height: 500px;
  background-color: #c4a8ff;
  filter: blur(130px);
  opacity: 0.28;
  z-index: 0;
  pointer-events: none;
`;

export const BlobPink = styled.div`
  position: absolute;
  border-radius: 50%;
  right: 60px;
  bottom: -20px;
  width: 320px;
  height: 320px;
  background-color: #fbc8ff;
  filter: blur(100px);
  opacity: 0.3;
  z-index: 0;
  pointer-events: none;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const MainSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1320px;
  height: 100%;
  position: relative;
  gap: 60px;
  /* z-index: 1; */
`;

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 0 0 560px;
  text-align: center;
`;

export const TitleBlack = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: 54px;
  line-height: 64px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
  color: ${theme.PALETTE.black};
  margin: 0;
`;

export const Title = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-size: 84px;
  line-height: 96px;
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
  color: ${theme.PALETTE.primary.main};
  margin: 0;
`;

export const Description = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h8};
  font-weight: ${theme.FONT_WEIGHT.medium};
  line-height: 30px;
  letter-spacing: -0.32px;
  color: ${theme.TEXT_COLOR.basic};
  margin: 0;
  text-align: center;
`;

export const StatisticsSection = styled.div`
  display: flex;
  gap: 52px;
  align-items: center;
  margin-top: 8px;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const StatNumber = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h5};
  font-weight: ${theme.FONT_WEIGHT.bold};
  letter-spacing: -0.48px;
  color: ${theme.PALETTE.primary.main};
  margin: 0;
`;

export const StatLabel = styled.p`
  font-family: "Pretendard";
  font-size: ${theme.FONT_SIZE.h10};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  margin: 0;
`;

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  flex: 0 0 360px;
`;

export const EventItem = styled.div`
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid ${theme.PALETTE.primary.light};
  border-radius: 14px;
  padding: 20px 24px;
  display: flex;
  align-items: center;
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 12px rgba(67, 89, 252, 0.06);
`;

export const EventText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: ${theme.FONT_SIZE.h9};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: 24px;
  letter-spacing: -0.28px;
  color: ${theme.PALETTE.primary.dark};
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
