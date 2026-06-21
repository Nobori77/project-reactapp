// 학습 화면에서 사용하는 왼쪽 메뉴와 오늘의 목표 카드입니다.
import * as S from "../style";

const LearnSideMenu = ({ menus = [], onMenu }) => {
  return (
    <S.SideColumn>
      <S.SideCard>
        <S.SideTitle>학습</S.SideTitle>

        <S.SideMenu aria-label="학습 메뉴">
          {menus.map((menu) => (
            <S.SideButton
              key={menu.id}
              type="button"
              $active={menu.active}
              onClick={() => onMenu(menu)}
            >
              {menu.label}
            </S.SideButton>
          ))}
        </S.SideMenu>
      </S.SideCard>

      <S.GoalCard>
        <S.GoalTitle>
          <span aria-hidden="true">📈</span>
          오늘의 목표
        </S.GoalTitle>

        <S.GoalList aria-label="오늘의 목표 목록">
          <S.GoalItem>
            <span aria-hidden="true">📊</span>
            <p>학습 완료</p>
            <strong>1 / 2</strong>
          </S.GoalItem>
          <S.GoalItem>
            <span aria-hidden="true">📝</span>
            <p>단어 학습</p>
            <strong>0 / 5</strong>
          </S.GoalItem>
        </S.GoalList>

        <S.GoalExp>
          <span aria-hidden="true">⚡️</span>
          <p>획득 EXP</p>
          <strong>120 / 300</strong>
        </S.GoalExp>
      </S.GoalCard>
    </S.SideColumn>
  );
};

export default LearnSideMenu;
