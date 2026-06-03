import React from "react";
import * as S from "../style";

const AccordionHeader = ({ result, isOpen, onToggle }) => {
  return (
    <S.AccordionHeader $open={isOpen} onClick={onToggle}>
      <S.StatusBadge $status={result.inquireStatus}>
        {result.inquireStatus}
      </S.StatusBadge>
      <S.AccordionTitle>{result.inquireTitle}</S.AccordionTitle>
      <S.AccordionDate>
        {result.inquireCreateAt
          ? result.inquireCreateAt.slice(0, 10).replaceAll("-", ".")
          : ""}
      </S.AccordionDate>
      <S.AccordionArrow $open={isOpen}>→</S.AccordionArrow>
    </S.AccordionHeader>
  );
};

export default AccordionHeader;