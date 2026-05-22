// 학습 메인 컴포넌트: 메뉴, 로드맵, 퀘스트, 진행도를 보여줍니다.
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
  const {
    data,
    loading,
    error,
    wordLoading,
    wordError,
    selectedLearnId,
    selectedLessonTitle,
    words,
    selectedWord,
    selectedVideo,
    handleSelectLearn,
    handleSelectWord,
    handleFinishWord,
  } = useLearn();
  const [activeType, setActiveType] = useState(location.state?.activeType || "sign");
  const roadmap = data.roadmaps[activeType] || data.roadmaps.sign;
  const currentMenus = useMemo(
    () =>
      data.menus.map((menu) => ({
        ...menu,
        active: menu.type ? menu.type === activeType : false,
      })),
    [activeType, data.menus]
  );

  // 레슨 시작 함수: 선택한 학습 경로로 이동합니다.
  const handleStartLesson = (lesson) => {
    if (activeType === "sign" && Number.isFinite(Number(lesson.id))) {
      handleSelectLearn(lesson);
      return;
    }

    if (!lesson.to) {
      alert(SERVICE_READY_MESSAGE);
      return;
    }

    navigate(lesson.to);
  };

  // 사이드 메뉴 함수: 학습 종류를 바꾸거나 연결된 경로로 이동합니다.
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

  // 학습종류선택함수: hover 또는 focus 시 보여줄 학습 종류를 고정합니다.
  const handleSelectLearningType = (menu) => {
    if (!menu.type) return;
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

            <S.RoadmapList>
              {roadmap.lessons.map((lesson) => (
                <LearnRoadmapItem key={lesson.id} lesson={lesson} onStart={handleStartLesson} />
              ))}
            </S.RoadmapList>

            <S.NextChapter type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>
              <strong>{roadmap.chapter.nextTitle}</strong>
              <span>{roadmap.chapter.nextDesc} {"\u2192"}</span>
            </S.NextChapter>

            {(selectedLearnId || wordLoading || wordError) && (
              <S.LearnDetailPanel>
                <S.LearnDetailHead>
                  <div>
                    <span>학습 자료</span>
                    <strong>{selectedLessonTitle || "선택한 학습"}</strong>
                  </div>
                  {wordLoading && <em>불러오는 중</em>}
                </S.LearnDetailHead>

                {wordError && <S.DetailNotice>{wordError}</S.DetailNotice>}

                {words.length > 0 ? (
                  <S.WordCardGrid>
                    {words.map((word) => (
                      <S.WordCardButton
                        type="button"
                        key={word.id}
                        $active={selectedWord?.id === word.id}
                        onClick={() => handleSelectWord(word)}
                      >
                        <strong>{word.wordsTitle}</strong>
                        <span>{word.wordsType || "수어"}</span>
                        <p>{word.wordsDetail}</p>
                      </S.WordCardButton>
                    ))}
                  </S.WordCardGrid>
                ) : (
                  !wordLoading && <S.DetailEmpty>등록된 단어가 아직 없어요.</S.DetailEmpty>
                )}

                {selectedVideo && (
                  <S.VideoPreviewCard>
                    <S.VideoText>
                      <span>영상 미리보기</span>
                      <strong>{selectedVideo.eduVideoTitle}</strong>
                      <p>{selectedVideo.eduVideoDetail}</p>
                    </S.VideoText>
                    <S.VideoBox>
                      <video controls src={selectedVideo.eduVideoUrl}>
                        수어 영상을 재생할 수 없어요.
                      </video>
                    </S.VideoBox>
                    <S.FinishWordButton type="button" onClick={handleFinishWord}>
                      학습 완료 기록하기
                    </S.FinishWordButton>
                  </S.VideoPreviewCard>
                )}
              </S.LearnDetailPanel>
            )}
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
