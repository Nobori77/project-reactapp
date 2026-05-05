import styled from "styled-components";
import theme from "../../../../../styles/theme";
import {
  ACCESSIBILITY,
  FONT_FAMILY,
  FONT_SIZE_EXT,
  RADIUS,
  SURFACE,
} from "../../../constants";

const { PALETTE, GRAYSCALE, TEXT_COLOR, FONT_SIZE, FONT_WEIGHT } = theme;

// ── CommentItem ──

export const CommentItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 16px 0;
  background: ${SURFACE.card};
  padding-left: ${({ isReply }) => (isReply ? "56px" : "0")};
`;

export const LeftArea = styled.div`
  display: flex;
  gap: 19px;
  align-items: flex-start;
  flex: 1;
  min-width: 0;
`;

export const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${SURFACE.section};
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

export const DefaultAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${PALETTE.primary.extraLight};
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${FONT_SIZE_EXT.h8_5};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  min-width: 0;
`;

export const AuthorName = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h10};
  color: ${({ isAuthor }) =>
    isAuthor ? PALETTE.primary.main : TEXT_COLOR.basic};
  margin: 0;
`;

export const CommentText = styled.div`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;

  p {
    margin: 0;
  }
`;

export const ReactionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ReactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;

  svg {
    font-size: ${FONT_SIZE.h11};
    color: ${({ active }) => (active ? PALETTE.primary.main : GRAYSCALE[9])};
  }

  span {
    font-family: ${FONT_FAMILY};
    font-weight: ${FONT_WEIGHT.regular};
    font-size: ${FONT_SIZE.h11};
    color: ${TEXT_COLOR.basic};
    white-space: nowrap;
  }
`;

export const AccessibilityRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const AccessBtn = styled.button`
  padding: 6px 16px;
  border-radius: ${RADIUS.sm};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  cursor: pointer;
  white-space: nowrap;
  background: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.extraLight : ACCESSIBILITY.readBg};
  color: ${({ variant }) =>
    variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readColor};
  border: 1px solid
    ${({ variant }) =>
      variant === "blue" ? PALETTE.primary.main : ACCESSIBILITY.readColor};
`;

export const RightArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  align-self: stretch;
  flex-shrink: 0;
  width: 74px;
`;

export const TimeText = styled.p`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h11};
  color: ${GRAYSCALE[9]};
  letter-spacing: -0.24px;
  margin: 0;
  text-align: right;
`;

export const ReportButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${RADIUS.button};
  background: ${SURFACE.card};
  border: 2px solid ${PALETTE.red};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;
  padding: 0;

  img {
    width: 24px;
    height: 24px;
    object-fit: cover;
  }
`;

// ── CommentSection ──

export const CommentSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;
  width: 100%;
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const CommentTitle = styled.h2`
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h5};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.56px;
  margin: 0;
`;

export const CountBadge = styled.span`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h12};
  letter-spacing: -0.2px;
  border-radius: ${RADIUS.pill};
  padding: 4px 8px;
  white-space: nowrap;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 97px;
  border: 1px solid ${PALETTE.primary.main};
  border-radius: ${RADIUS.input};
  padding: 16px 24px;
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.regular};
  font-size: ${FONT_SIZE.h10};
  color: ${TEXT_COLOR.basic};
  letter-spacing: -0.28px;
  line-height: 22px;
  resize: none;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: ${GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${PALETTE.primary.dark};
  }
`;

export const SubmitRow = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const SubmitButton = styled.button`
  background: ${PALETTE.primary.main};
  color: ${PALETTE.white};
  font-family: ${FONT_FAMILY};
  font-weight: ${FONT_WEIGHT.bold};
  font-size: ${FONT_SIZE.h11};
  letter-spacing: -0.24px;
  padding: 8px 30px;
  border-radius: ${RADIUS.sm};
  border: none;
  cursor: pointer;
  white-space: nowrap;
  transition: background 0.2s ease;

  &:hover {
    background: ${PALETTE.primary.dark};
  }
`;

export const CommentList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
