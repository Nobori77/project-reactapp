// 학습 메인 컴포넌트: 메뉴, 로드맵, 퀘스트, 진행도 확인
import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLearn } from "../hooks/useLearn";
import LearnQuestPanel from "./parts/LearnQuestPanel";
import LearnRoadmapItem from "./parts/LearnRoadmapItem";
import * as S from "./style";

const SERVICE_READY_MESSAGE = "\uc11c\ube44\uc2a4 \uc900\ube44\uc911\uc785\ub2c8\ub2e4.";

const LearnComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading, error } = useLearn();
  const [activeType, setActiveType] = useState(location.state?.activeType || "sign");
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const roadmap = data.roadmaps[activeType] || data.roadmaps.sign;
  const visibleLessons = useMemo(() => {
    const baseLessons = roadmap.lessons.slice(0, 5);

    return Array.from({ length: 5 }, (_, index) => {
      const lesson = baseLessons[index];

      if (lesson) {
        return lesson;
      }

      return {
        id: `locked-${index + 1}`,
        title: `수어 학습 ${index + 1}`,
        desc: "앞 단계를 완료하면 열려요",
        status: "locked",
        badge: "★",
        buttonText: "잠금",
        to: null,
      };
    });
  }, [roadmap.lessons]);

  const currentMenus = useMemo(
    () =>
      data.menus.map((menu) => ({
        ...menu,
        active: menu.type ? menu.type === activeType : false,
      })),
    [activeType, data.menus]
  );

  // 레슨 시작: 선택한 학습 경로로 이동
  // 레슨 선택: 단계 버튼을 눌렀을 때 말풍선만 열기
  const handleSelectLesson = (lesson) => {
    setSelectedLessonId((currentId) => (currentId === lesson.id ? null : lesson.id));
  };

  const handleStartLesson = (lesson) => {
    if (lesson.status === "locked" || lesson.status === "reward") {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    if (activeType === "sign" && Number.isFinite(Number(lesson.id))) {
      navigate(`/study/learn/quiz/greeting/questions/1?eduId=${lesson.id}`, {
        state: {
          eduId: lesson.id,
          lessonTitle: lesson.title,
        },
      });

      return;
    }

    if (!lesson.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(lesson.to);
  };

  // 사이드 메뉴: 학습 종류를 바꾸거나 연결된 경로로 이동
  const handleMenu = (menu) => {
    if (menu.type) {
      setActiveType(menu.type);

      return;
    }

    if (!menu.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(menu.to);
  };

  // 학습종류선택: hover 또는 focus 시 보여줄 학습 고정
  const handleSelectLearningType = (menu) => {

    if (!menu.type)
      return;

    setActiveType(menu.type);
  };

  return (
    <S.LearnWrap>
      <S.LearnLayout>
        <S.SideMenu aria-label="\ud559\uc2b5 \uba54\ub274">
          {currentMenus.map((menu) => (
            <S.SideButton
              key={menu.id}
              type="button"
              $active={menu.active}
              onMouseEnter={() => handleSelectLearningType(menu)}
              onMouseOver={() => handleSelectLearningType(menu)}
              onFocus={() => handleSelectLearningType(menu)}
              onClick={() => handleMenu(menu)}
            >
              <span>{menu.icon}</span>
              {menu.label}
            </S.SideButton>
          ))}
        </S.SideMenu>

        <S.MainArea>
          <S.TopBar>
            <S.StreakBadge>{"\ud83d\udd25"} {data.streak}</S.StreakBadge>
            <S.GuideButton type="button">{roadmap.chapter.guideLabel}</S.GuideButton>
          </S.TopBar>

          <S.ChapterPanel>
            <S.ChapterHead>
              <S.Title>{roadmap.chapter.title}</S.Title>
              <S.GuidePill type="button">{"\ud83d\udcd6"} {roadmap.chapter.guideLabel}</S.GuidePill>
            </S.ChapterHead>

            {loading && <S.StatusText>{"\ud559\uc2b5 \uc815\ubcf4\ub97c \ubd88\ub7ec\uc624\ub294 \uc911\uc774\uc5d0\uc694."}</S.StatusText>}
            {error && <S.StatusText>{error}</S.StatusText>}

            <S.RoadmapStage>
              <S.RoadmapPath aria-hidden="true" viewBox="0 0 592 680" preserveAspectRatio="none">
                <path d="M260 118 C300 144 332 164 332 226 C332 272 296 292 296 356 C296 418 260 444 260 510 C260 570 332 590 332 634" />
              </S.RoadmapPath>
              <S.RoadmapList>
                {visibleLessons.map((lesson, index) => (
                  <LearnRoadmapItem
                    key={lesson.id}
                    lesson={lesson}
                    index={index}
                    selected={selectedLessonId === lesson.id}
                    onSelect={handleSelectLesson}
                    onStart={handleStartLesson}
                  />
                ))}
              </S.RoadmapList>
              <S.RoadmapMascot aria-hidden="true">
                <span className="eye left" />
                <span className="eye right" />
                <span className="smile" />
                <span className="arm left" />
                <span className="arm right" />
                <span className="foot left" />
                <span className="foot right" />
              </S.RoadmapMascot>
            </S.RoadmapStage>

            <S.NextChapter type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>
              <strong>{roadmap.chapter.nextTitle}</strong>
              <span>{roadmap.chapter.nextDesc} {"\u2192"}</span>
            </S.NextChapter>

          </S.ChapterPanel>
        </S.MainArea>

        <LearnQuestPanel quests={data.quests} />
      </S.LearnLayout>

      <S.ProgressArea>
        <S.ProgressText>
          <S.ProgressTitle>{roadmap.chapter.progressTitle}</S.ProgressTitle>
          <S.ProgressDesc>{roadmap.chapter.progressDesc}</S.ProgressDesc>
        </S.ProgressText>
        <S.ProgressBar $progress={roadmap.chapter.percent} aria-label="\uc624\ub298\uc758 \ud559\uc2b5 \uc9c4\ud589\ub960">
          <span />
        </S.ProgressBar>
        <S.Percent>{roadmap.chapter.percent}%</S.Percent>
        <S.ExpBox>
          <span>{"\ud68d\ub4dd EXP"}</span>
          <strong>
            <S.ExpIcon>{"\u26a1"}</S.ExpIcon>
            {roadmap.chapter.exp}
          </strong>
        </S.ExpBox>
      </S.ProgressArea>
    </S.LearnWrap>
  );
};

export default LearnComponent;
