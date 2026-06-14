import styled from "styled-components";
import theme from "../../../styles/theme";
import {
  hoverStyle,
  sideCardStyle,
  sideComponentStyle,
  sideHeaderStyle,
} from "../communityStyle";
import { BORDER_STYLE } from "../constants";
import { h10Bold } from "../../../styles/common";

export const Card = styled.div`
  background: ${theme.PALETTE.white};
  ${sideCardStyle}
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;

export const Title = styled.p`
  ${sideHeaderStyle}
  color: ${theme.TEXT_COLOR.basic};
  ${h10Bold}
`;

export const MemberList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  width: 100%;
`;

export const MemberItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border: ${BORDER_STYLE.original};
  ${sideComponentStyle}
  ${hoverStyle}
`;

export const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
`;

export const OnlineDot = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 10px;
  height: 10px;
  background: ${theme.PALETTE.secondary.main};
  border-radius: 50%;
  border: 1.5px solid ${theme.PALETTE.white};
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 75px;
  white-space: nowrap;
`;

export const MemberName = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h11};
`;

export const MemberStatus = styled.p`
  margin: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
  letter-spacing: -0.2px;
`;

export const LevelBadge = styled.div`
  flex-shrink: 0;
  padding: 2px 8px;
  border-radius: 6px;
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  line-height: ${theme.FONT_LINE.h12};
  white-space: nowrap;
  text-align: center;
`;
