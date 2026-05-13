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
  width: 100%;
  min-height: 100vh;
  padding: 150px 0 180px;
  background: #fff;
  box-sizing: border-box;

  .chapterInner {
    width: min(1200px, calc(100% - 48px));
    margin: 0 auto;
  }

  .chapterHeader {
    margin-bottom: 54px;
    text-align: center;
  }

  .subTitle {
    margin: 0 0 18px;
    color: #4359fc;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0;
  }

  .chapterHeader h1 {
    margin: 0 0 16px;
    color: #1a1a1a;
    font-size: 42px;
    font-weight: 900;
  }

  .chapterHeader .desc {
    margin: 0;
    color: #666;
    font-size: 16px;
    font-weight: 600;
  }

  .quizList {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
    margin-bottom: 60px;
  }

  .quizCard {
    height: 260px;
    padding: 38px 30px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background: #fff;
    border: 1.5px solid #e6e6e6;
    border-radius: 22px;

    text-decoration: none;
    transition: 0.2s;
  }

  .quizCard:hover {
    transform: translateY(-6px);
    border-color: #4359fc;
    box-shadow: 0 18px 40px rgba(67, 89, 252, 0.12);
  }

  .iconBox {
    font-size: 44px;
    line-height: 1;
  }

  .quizTitle {
    margin: 0 0 12px;
    color: #1a1a1a;
    font-size: 22px;
    font-weight: 900;
  }

  .quizDesc {
    margin: 0;
    color: #777;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.5;
  }

  .quizStartButton {
    width: 176px;
    height: 48px;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #4359fc;
    border-radius: 14px;

    color: #fff;
    font-size: 15px;
    font-weight: 900;
    text-decoration: none;
  }
`;




