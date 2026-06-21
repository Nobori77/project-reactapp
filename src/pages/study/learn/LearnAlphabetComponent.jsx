// 문자학습컴포넌트: 한글 자모 카드 목록과 글자 상세 팝업
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { alphabetSections, getAlphabetInfo } from "./data/alphabetMock";
import LearnAlphabetPopup from "./parts/LearnAlphabetPopup";
import LearnSideMenu from "./parts/LearnSideMenu";
import LetterCard from "./parts/LetterCard";
import * as S from "./style";

const SERVICE_READY_MESSAGE = "서비스 준비중입니다.";

const LearnAlphabetComponent = () => {
  const navigate = useNavigate();
  const [selectedIndex, setSelectedIndex] = useState(null);

  const sidebarMenus = useMemo(
    () => [
      { id: "home", label: "학습 홈", to: "/study" },
      { id: "analysis", label: "학습현황", to: "/study/learn", activeType: "analysis" },
      { id: "sign", label: "수어", to: "/study/learn", activeType: "sign" },
      { id: "signal", label: "응급수신호", to: "/study/learn", activeType: "signal" },
      { id: "alphabet", label: "문자", to: "/study/learn/alphabet", active: true },
    ],
    []
  );

  // 전체글자목록: 팝업에서 이전/다음 이동할 때 사용합니다.
  const letters = useMemo(() => alphabetSections.flatMap((section) => section.letters), []);
  const selectedLetter = selectedIndex !== null ? getAlphabetInfo(letters[selectedIndex]) : null;

  // 메뉴이동: 왼쪽 메뉴에서 연결된 화면이동
  const handleMenu = (menu) => {
    if (!menu.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(menu.to, { state: { activeType: menu.activeType } });
  };

  // 글자선택: 선택한 글자의 상세 팝업열림
  const handleOpenLetter = (letter) => {
    setSelectedIndex(letters.indexOf(letter));
  };

  // 이전글자: 팝업에서 이전 글자로 이동
  const handlePrev = () => {
    setSelectedIndex((prev) => (prev <= 0 ? letters.length - 1 : prev - 1));
  };

  // 다음글자: 팝업에서 다음 글자로 이동
  const handleNext = () => {
    setSelectedIndex((prev) => (prev >= letters.length - 1 ? 0 : prev + 1));
  };

  return (
    <S.AlphaWrap>
      <S.AlphaLayout>
        <LearnSideMenu menus={sidebarMenus} onMenu={handleMenu} />

        <S.AlphaMain>
          <S.AlphaHeader>
            <S.AlphaTitle>수어로 한글을 표현해볼까요?</S.AlphaTitle>
            <S.AlphaDesc>자음과 모음을 손 모양으로 익히고, 글자별 설명을 팝업에서 확인해보세요.</S.AlphaDesc>
            <S.AlphaStartButton type="button" onClick={() => handleOpenLetter(letters[0])}>
              글자 학습 시작하기
            </S.AlphaStartButton>
          </S.AlphaHeader>

          {alphabetSections.map((section) => (
            <S.AlphaSection key={section.id}>
              <S.AlphaSectionTitle>{section.title}</S.AlphaSectionTitle>
              <S.AlphaLetterGrid>
                {section.letters.map((letter) => (
                  <LetterCard key={letter} letter={letter} onClick={() => handleOpenLetter(letter)} />
                ))}
              </S.AlphaLetterGrid>
            </S.AlphaSection>
          ))}
        </S.AlphaMain>

        {/*
        <LearnQuestPanel quests={quests} />
        */}
      </S.AlphaLayout>

      {selectedLetter && (
        <LearnAlphabetPopup
          letter={selectedLetter}
          onClose={() => setSelectedIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </S.AlphaWrap>
  );
};

export default LearnAlphabetComponent;
