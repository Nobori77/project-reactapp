import React from "react";

import S from "../style";

/* 자격증 목록 데이터 연동 예정 */
const certificateList = [
  {
    name: "수어 통역사 2급",
    date: "2025.03.08",
    status: "미신청",
    apply: "신청하기",
  },
  {
    name: "수어 통역사 1급",
    date: "2024.11.21",
    status: "신청완료",
    apply: "완료",
  },
  {
    name: "수어 지도사",
    date: "2023.08.14",
    status: "신청대기",
    apply: "처리중",
  },
];

const CertificateListCard = () => {
  return (
    <S.CertificateSection>
      {/* 섹션 제목 */}
      <S.CertificateTitle>내 자격증</S.CertificateTitle>

      {/* 섹션 설명 */}
      <S.CertificateDesc>
        취득한 수어 자격증명, 취득일자, 실물 신청 상태를 확인하세요.
      </S.CertificateDesc>

      {/* 자격증 목록 카드 */}
      <S.CertificateCardBox>
        {/* 자격증 목록 헤더 */}
        <S.CertificateHeader>
          <S.CertificateHeaderText>취득한 자격증명</S.CertificateHeaderText>
          <S.CertificateHeaderText>취득일자</S.CertificateHeaderText>
          <S.CertificateHeaderText>실물 신청 상태</S.CertificateHeaderText>
          <S.CertificateHeaderText>신청</S.CertificateHeaderText>
        </S.CertificateHeader>

        {/* 자격증 목록 API 연동 예정 */}
        {certificateList.map((certificate) => (
          <S.CertificateRow key={certificate.name}>
            <S.CertificateText>{certificate.name}</S.CertificateText>

            <S.CertificateText>{certificate.date}</S.CertificateText>

            {/* 실물 신청 상태 연동 */}
            <S.CertificateStatusButton type="button">
              {certificate.status}
            </S.CertificateStatusButton>

            {/* * 실물 자격증 신청 API 연동 * */}
            <S.CertificateApplyButton type="button">
              {certificate.apply}
            </S.CertificateApplyButton>
          </S.CertificateRow>
        ))}

        {/* 자격증 목록 더보기 */}
        <S.CertificateMoreButton type="button">
          더 보기 <span>→</span>
        </S.CertificateMoreButton>
      </S.CertificateCardBox>
    </S.CertificateSection>
  );
};

export default CertificateListCard;