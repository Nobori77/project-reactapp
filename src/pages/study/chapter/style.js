import styled from "styled-components";
import theme from "../../../styles/theme";
import createGlobalStyle from "styled-components";

// 오 퀴즈 화면_style

// 크기
const fontSize = (key) => ({theme}) => theme.FONT_SIZE[key];
// 굵기
const fontWeight = (key) => ({theme}) => theme.FONT_WEIGHT[key];
// 행간
const lineHeight = (key) => ({theme}) => theme.FONT_LINE[key];
// 색
const textColor = (key) => ({theme}) => theme.PALETTE[key];

// 스터디 quiz 컨테이너
export const StudyQuizProvider = styled.section`
  
  --inner: 1320px;

  width: 100%;
  overflow: hidden;
  position: relative;
  color: ${textColor("black")};
  font-size: ${fontSize("h8")};
  font-weight: ${fontWeight("regular")};

`;


// 전체
export const OhQuiz = styled.section`

  --inner: 1320px;

  width: 100%;
  overflow: hidden;
  position: relative;
  color: ${textColor("black")};
  font-size: ${fontSize("h8")};
  font-weight: ${fontWeight("regular")};
`;



