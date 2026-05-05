import React from "react";
import { ALPHA, PALETTE_EXT } from "../constants";
import styled from "styled-components";
import theme from "../../../styles/theme";
import { h10Regular, h9Bold, h9Medium } from "../../../styles/common";

const { PALETTE } = theme;

/* ══ Footer ══ */
const Footer = styled.footer`
  background: ${PALETTE_EXT.primaryFooter};
  padding: 40px 300px;
  box-sizing: border-box;
`;

const FooterTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FooterLink = styled.a`
  ${h9Medium}
  color: ${PALETTE.white};
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterLinkDivider = styled.div`
  width: 1px;
  height: 11px;
  background: ${ALPHA.white30};
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SocialBtn = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  border: 1px solid ${ALPHA.white30};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }

  &:hover {
    border-color: ${PALETTE.white};
  }
`;

const FooterInfoLabel = styled.p`
  color: ${PALETTE.white};
  ${h9Bold}
  margin: 0 0 12px 0;
`;

const FooterInfoRow = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  flex-wrap: wrap;
`;

const FooterInfo = styled.p`
  ${h10Regular}
  color: ${PALETTE.white};
  margin: 0;
  white-space: nowrap;
`;

const youtubeLogoImg =
  "https://www.figma.com/api/mcp/asset/e073444c-42eb-42c6-b15c-dc04466d31c2";
const naverLogoImg =
  "https://www.figma.com/api/mcp/asset/cb0bac58-70c1-41df-b8d5-9259540bfbab";
const instagramLogoImg =
  "https://www.figma.com/api/mcp/asset/af47c64f-cc7f-4bc0-b21a-1841ec9e5861";

const BottomFooter = () => {
  return (
    <div>
      {/* 하단 푸터 */}
      <Footer>
        <FooterTop>
          <FooterLinks>
            <FooterLink>개인정보처리방침</FooterLink>
            <FooterLinkDivider />
            <FooterLink>서비스 이용약관</FooterLink>
          </FooterLinks>
          <SocialLinks>
            <SocialBtn href="#" aria-label="유튜브">
              <img src={youtubeLogoImg} alt="YouTube" />
            </SocialBtn>
            <SocialBtn href="#" aria-label="네이버">
              <img src={naverLogoImg} alt="Naver" />
            </SocialBtn>
            <SocialBtn href="#" aria-label="인스타그램">
              <img src={instagramLogoImg} alt="Instagram" />
            </SocialBtn>
          </SocialLinks>
        </FooterTop>

        <FooterInfoLabel>INFO.</FooterInfoLabel>
        <FooterInfoRow>
          <FooterInfo>주식회사 이음</FooterInfo>
          <FooterInfo>대표 : 노규호 외 4명</FooterInfo>
          <FooterInfo>사업자등록번호 : 123-45-67890</FooterInfo>
        </FooterInfoRow>
        <FooterInfoRow style={{ marginTop: "8px" }}>
          <FooterInfo>주소 : 서울특별시 마포구 백범로 130</FooterInfo>
          <FooterInfo>광고·제휴문의 : code-kine@gmail.com</FooterInfo>
        </FooterInfoRow>
      </Footer>
    </div>
  );
};

export default BottomFooter;
