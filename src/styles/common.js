// 재사용 CSS 조각 (믹스인) 모음
import { css } from "styled-components";

// ─────────────────────────────────────────
// FLEX
// ─────────────────────────────────────────

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const flexCenterRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const flexCenterColumn = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const flexBetweenRow = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const flexBetweenColumn = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

export const flexStartRow = css`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

export const flexEndRow = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h1 (72px) · bold
// ─────────────────────────────────────────

export const h1Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h1};
  line-height: ${({ theme }) => theme.FONT_LINE.h1};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h2 (48px) · bold
// ─────────────────────────────────────────

export const h2Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h2};
  line-height: ${({ theme }) => theme.FONT_LINE.h2};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h3 (40px) · bold
// ─────────────────────────────────────────

export const h3Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h3};
  line-height: ${({ theme }) => theme.FONT_LINE.h3};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h4 (36px) · bold / medium
// ─────────────────────────────────────────

export const h4Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h4Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h4};
  line-height: ${({ theme }) => theme.FONT_LINE.h4};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h5 (28px) · bold / medium
// ─────────────────────────────────────────

export const h5Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h5Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h5};
  line-height: ${({ theme }) => theme.FONT_LINE.h5};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h6 (28px) · bold / medium
// ─────────────────────────────────────────

export const h6Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h6Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h6};
  line-height: ${({ theme }) => theme.FONT_LINE.h6};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h7 (24px) · bold / medium / regular
// ─────────────────────────────────────────

export const h7Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h7Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

export const h7Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h7};
  line-height: ${({ theme }) => theme.FONT_LINE.h7};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h8 (20px) · bold / medium
// ─────────────────────────────────────────

export const h8Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h8Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h8};
  line-height: ${({ theme }) => theme.FONT_LINE.h8};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h9 (16px) · bold / medium / regular / light
// ─────────────────────────────────────────

export const h9Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h9Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

export const h9Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.02em;
`;

export const h9Light = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h9};
  line-height: ${({ theme }) => theme.FONT_LINE.h9};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.light};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h10 (14px) · bold / medium / regular
// ─────────────────────────────────────────

export const h10Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h10Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

export const h10Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h10};
  line-height: ${({ theme }) => theme.FONT_LINE.h10};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h11 (12px) · bold / medium / regular
// ─────────────────────────────────────────

export const h11Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  line-height: ${({ theme }) => theme.FONT_LINE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h11Medium = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  line-height: ${({ theme }) => theme.FONT_LINE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.medium};
  letter-spacing: -0.02em;
`;

export const h11Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h11};
  line-height: ${({ theme }) => theme.FONT_LINE.h11};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h12 (10px) · bold / regular
// ─────────────────────────────────────────

export const h12Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  line-height: ${({ theme }) => theme.FONT_LINE.h12};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;

export const h12Regular = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h12};
  line-height: ${({ theme }) => theme.FONT_LINE.h12};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.regular};
  letter-spacing: -0.02em;
`;

// ─────────────────────────────────────────
// TYPOGRAPHY — h13 (8px) · bold
// ─────────────────────────────────────────

export const h13Bold = css`
  font-size: ${({ theme }) => theme.FONT_SIZE.h13};
  line-height: ${({ theme }) => theme.FONT_LINE.h13};
  font-weight: ${({ theme }) => theme.FONT_WEIGHT.bold};
  letter-spacing: -0.02em;
`;
