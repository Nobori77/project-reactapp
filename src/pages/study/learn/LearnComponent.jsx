import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { claimRoadmapReward, startLearn } from "../apis/LearnApi";
import { useLearn } from "../hooks/useLearn";
import { useStudyUser } from "../hooks/useStudyUser";
import LearnSideMenu from "./parts/LearnSideMenu";
import * as S from "./style";

const SERVICE_READY_MESSAGE = "서비스 준비중입니다.";
const REWARD_EXP = 50;
const ROADMAP_ICON_PATH = "/assets/image/learn/roadmap";

const REWARD_MODAL_CONTENT = {
  locked: {
    icon: "🔒",
    title: "조금만 더 가면 보상이 열려요!",
    desc: "앞 단계를 완료하면 보상을 받을 수 있어요.",
    button: "확인",
  },
  available: {
    icon: "🎁",
    title: "보상 도착!",
    desc: "학습을 완료했어요. 보상을 받아볼까요?",
    button: "보상 받기",
  },
  received: {
    icon: "✓",
    title: "보상 수령 완료!",
    desc: "이미 지급된 보상이에요.",
    button: "확인",
  },
};

const SIGN_ROADMAP_STEPS = [
  { key: "intro", label: "수어 입문", icon: `${ROADMAP_ICON_PATH}/hand1.png`, lessonIndex: 0 },
  { key: "basic", label: "수어 초급", icon: `${ROADMAP_ICON_PATH}/hand2.png`, lessonIndex: 1 },
  { key: "middle", label: "수어 중급", icon: `${ROADMAP_ICON_PATH}/hand3.png`, lessonIndex: 2 },
  {
    key: "reward",
    label: "보상 받기",
    icon: `${ROADMAP_ICON_PATH}/giftboxbe.png`,
    receivedIcon: `${ROADMAP_ICON_PATH}/giftboxaf.png`,
    reward: true,
  },
  { key: "advanced", label: "수어 고급", icon: `${ROADMAP_ICON_PATH}/hand3.png`, lessonIndex: 3 },
];

const SIGNAL_ROADMAP_STEPS = SIGN_ROADMAP_STEPS.map((step) => {
  const signalLabels = {
    intro: "입문",
    basic: "초급",
    middle: "중급",
    advanced: "고급",
  };

  return signalLabels[step.key] ? { ...step, label: signalLabels[step.key] } : step;
});

const getLessonStatus = (lesson) => {
  if (!lesson) return "locked";
  if (lesson.status === "done") return "done";
  if (lesson.status === "active") return "active";
  return "locked";
};

const createSignRoadmapSteps = (lessons = [], rewardClaimed = false, steps = SIGN_ROADMAP_STEPS) => {
  const learningLessons = lessons.filter((lesson) => lesson.status !== "reward");
  const rewardIndex = steps.findIndex((step) => step.reward);
  const rewardBaseLesson = learningLessons[rewardIndex - 1];
  const rewardUnlocked = rewardBaseLesson?.status === "done";
  const advancedLesson = learningLessons[3];

  return steps.map((step) => {
    if (step.reward) {
      const nodeStatus = rewardClaimed ? "done" : rewardUnlocked ? "active" : "locked";

      return {
        ...step,
        id: "reward-step",
        title: step.label,
        desc: "앞 단계를 완료하면 보상을 받을 수 있어요.",
        status: "reward",
        nodeStatus,
        icon: rewardClaimed ? step.receivedIcon : step.icon,
      };
    }

    const sourceLesson = step.key === "advanced" ? advancedLesson : learningLessons[step.lessonIndex];
    const status = step.key === "advanced" && !rewardClaimed ? "locked" : getLessonStatus(sourceLesson);

    return {
      ...step,
      ...(sourceLesson || {}),
      id: sourceLesson?.id || `locked-${step.key}`,
      title: sourceLesson?.title || step.label,
      displayTitle: step.label,
      desc: sourceLesson?.desc || "이전 단계를 완료하면 열려요.",
      status,
      nodeStatus: status,
      sourceLesson,
      icon: status === "locked" ? `${ROADMAP_ICON_PATH}/lockimage.png` : step.icon,
    };
  });
};

const getNodeBadge = (step, rewardClaimed) => {
  if (step.status === "reward") {
    return rewardClaimed ? "수령 완료" : "EXP 획득";
  }

  if (step.nodeStatus === "done") return "✓ 완료";
  if (step.nodeStatus === "active") return "현재 단계";
  return "잠금";
};
const LearnComponent = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, loading, error } = useLearn();
  const { userId, isGuest } = useStudyUser();
  const [activeType, setActiveType] = useState(location.state?.activeType || "sign");
  const [selectedLessonId, setSelectedLessonId] = useState(null);
  const [rewardModalType, setRewardModalType] = useState(null);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [rewardLoading, setRewardLoading] = useState(false);
  const [showRewardBurst, setShowRewardBurst] = useState(false);
  const roadmap = data.roadmaps[activeType] || data.roadmaps.sign;
  const currentLessons = roadmap.lessons || [];
  const isEmpty = !loading && !error && currentLessons.length === 0;
  const shouldShowRoadmap = !loading && !error && !isEmpty;
  const statusMessage = loading
    ? "학습 정보를 불러오는 중이에요."
    : error || (isEmpty ? "등록된 학습이 아직 없어요. 관리자에서 학습 단어를 등록하면 여기에 표시돼요." : null);

  const visibleLessons = useMemo(() => {
    if (!shouldShowRoadmap) {
      return [];
    }

    if (activeType === "sign") {
      return createSignRoadmapSteps(roadmap.lessons, rewardClaimed, SIGN_ROADMAP_STEPS);
    }

    if (activeType === "signal") {
      return createSignRoadmapSteps(roadmap.lessons, rewardClaimed, SIGNAL_ROADMAP_STEPS);
    }

    return roadmap.lessons.slice(0, 5);
  }, [activeType, roadmap.lessons, rewardClaimed, shouldShowRoadmap]);

  const currentMenus = useMemo(
    () =>
      data.menus.map((menu) => ({
        ...menu,
        active: menu.type ? menu.type === activeType : false,
      })),
    [activeType, data.menus]
  );

  const rewardAvailable = useMemo(() => {
    const rewardIndex = visibleLessons.findIndex((lesson) => lesson.status === "reward");

    if (rewardIndex < 0) {
      return false;
    }

    return visibleLessons.slice(0, rewardIndex).every((lesson) => lesson.status === "done" || lesson.nodeStatus === "done");
  }, [visibleLessons]);

  const rewardEduId = useMemo(() => {
    const rewardIndex = visibleLessons.findIndex((lesson) => lesson.status === "reward");

    if (rewardIndex <= 0) {
      return null;
    }

    const previousLesson = visibleLessons[rewardIndex - 1]?.sourceLesson || visibleLessons[rewardIndex - 1];

    return Number.isFinite(Number(previousLesson?.id)) ? Number(previousLesson.id) : null;
  }, [visibleLessons]);

  const rewardStorageKey = useMemo(() => {
    if (!userId || !rewardEduId) {
      return null;
    }

    return `roadmapReward:${userId}:${rewardEduId}`;
  }, [rewardEduId, userId]);

  useEffect(() => {
    if (!rewardStorageKey) {
      setRewardClaimed(false);

      return;
    }

    setRewardClaimed(localStorage.getItem(rewardStorageKey) === "received");
  }, [rewardStorageKey]);

  const openRewardModal = () => {
    if (!rewardAvailable) {
      setRewardModalType("locked");

      return;
    }

    setRewardModalType(rewardClaimed ? "received" : "available");
  };

  const handleRewardAction = async () => {
    if (rewardLoading) {
      return;
    }

    if (rewardModalType === "available") {
      if (isGuest || !userId || !rewardEduId) {
        alert("로그인 후 보상을 받을 수 있어요.");

        return;
      }

      setRewardLoading(true);

      try {
        const rewardExp = await claimRoadmapReward({ userId, eduId: rewardEduId });

        setRewardClaimed(true);
        setRewardModalType("received");

        if (rewardStorageKey) {
          localStorage.setItem(rewardStorageKey, "received");
        }

        if (rewardExp > 0) {
          setShowRewardBurst(true);
          window.setTimeout(() => setShowRewardBurst(false), 1200);
        }
      } catch (error) {
        alert(error.message || "보상 수령에 실패했어요.");
      } finally {
        setRewardLoading(false);
      }

      return;
    }

    setRewardModalType(null);
  };

  const handleSelectLesson = (lesson) => {
    if (lesson.status === "reward") {
      openRewardModal();

      return;
    }

    setSelectedLessonId((currentId) => (currentId === lesson.id ? null : lesson.id));
  };

  const handleStartLesson = async (lesson) => {
    if (lesson.status === "reward") {
      openRewardModal();

      return;
    }

    if (lesson.status === "locked" || lesson.nodeStatus === "locked") {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    const sourceLesson = lesson.sourceLesson || lesson;

    if ((activeType === "sign" || activeType === "signal") && Number.isFinite(Number(sourceLesson.id))) {
      try {
        await startLearn(sourceLesson.id);
      } catch {
        // 시작 기록 저장에 실패해도 학습 진입은 막지 않습니다.
      }

      const quizType = activeType === "signal" ? "signal" : "greeting";

      navigate(`/study/learn/quiz/${quizType}/questions/1?eduId=${sourceLesson.id}`, {
        state: {
          eduId: sourceLesson.id,
          lessonTitle: sourceLesson.title,
          activeType,
        },
      });

      return;
    }

    if (!sourceLesson.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(sourceLesson.to);
  };

  const handleMenu = (menu) => {
    if (menu.type) {
      setActiveType(menu.type);
      setSelectedLessonId(null);

      return;
    }

    if (!menu.to) {
      alert(SERVICE_READY_MESSAGE);

      return;
    }

    navigate(menu.to);
  };


  const rewardModalContent = rewardModalType ? REWARD_MODAL_CONTENT[rewardModalType] : null;

  return (
    <S.LearnWrap>
      <S.LearnLayout>
        <LearnSideMenu menus={currentMenus} onMenu={handleMenu} />

        <S.MainArea>
          <S.ChapterPanel>
            <S.RoadmapGuideSlot>
              <S.GuideButton type="button" onClick={() => alert(SERVICE_READY_MESSAGE)}>
                📘 {roadmap.chapter.guideLabel || "가이드북"}
              </S.GuideButton>
            </S.RoadmapGuideSlot>

            {statusMessage && <S.StatusText>{statusMessage}</S.StatusText>}
            {shouldShowRoadmap && (activeType === "sign" || activeType === "signal") && (
              <S.SignRoadmapStage>
                <S.SignRoadmapSvg viewBox="0 0 1040 360" aria-hidden="true" focusable="false">
                  <defs>
                    <marker id="sign-roadmap-arrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                      <path d="M0 0 L8 4 L0 8 Z" />
                    </marker>
                    <marker id="sign-roadmap-arrow-active" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto" markerUnits="strokeWidth">
                      <path d="M0 0 L8 4 L0 8 Z" />
                    </marker>
                  </defs>
                  <path className={visibleLessons[0]?.nodeStatus === "done" ? "connector-active" : ""} d="M108 152 H280" />
                  <path className={visibleLessons[1]?.nodeStatus === "done" ? "connector-active" : ""} d="M408 152 H540" />
                  <path
                    className={visibleLessons[2]?.nodeStatus === "done" ? "connector-active" : ""}
                    d="M604 96 C604 18 690 0 762 0 C828 0 874 30 874 94"
                    markerEnd={visibleLessons[2]?.nodeStatus === "done" ? "url(#sign-roadmap-arrow-active)" : "url(#sign-roadmap-arrow)"}
                  />
                  <path
                    className={rewardClaimed ? "connector-active" : ""}
                    d="M874 214 C874 236 886 246 910 252 C946 260 964 268 956 288 C948 308 906 306 880 312 C858 318 858 338 858 362"
                    markerEnd={rewardClaimed ? "url(#sign-roadmap-arrow-active)" : "url(#sign-roadmap-arrow)"}
                  />
                </S.SignRoadmapSvg>

                {visibleLessons.map((lesson) => (
                  <S.SignRoadmapNode key={lesson.key || lesson.id} className={`node-${lesson.key} status-${lesson.nodeStatus || lesson.status}`}>
                    <S.SignNodeButton
                      type="button"
                      onClick={() => (lesson.status === "reward" ? handleStartLesson(lesson) : handleSelectLesson(lesson))}
                      disabled={(lesson.nodeStatus || lesson.status) === "locked" && lesson.status !== "reward"}
                    >
                      <img src={lesson.icon} alt="" />
                    </S.SignNodeButton>
                    <S.SignNodeTitle>{lesson.displayTitle || lesson.label || lesson.title}</S.SignNodeTitle>
                    <S.SignNodeBadge>{getNodeBadge(lesson, rewardClaimed)}</S.SignNodeBadge>

                    {selectedLessonId === lesson.id && lesson.status !== "reward" && (lesson.nodeStatus || lesson.status) !== "locked" && (
                      <S.SignNodeAction type="button" onClick={() => handleStartLesson(lesson)}>
                        학습 시작
                      </S.SignNodeAction>
                    )}
                  </S.SignRoadmapNode>
                ))}
              </S.SignRoadmapStage>
            )}

            {shouldShowRoadmap && activeType !== "sign" && activeType !== "signal" && (
              <S.RoadmapReadyText>{activeType === "analysis" ? "분석그래프 준비중" : "로드맵 준비중"}</S.RoadmapReadyText>
            )}
          </S.ChapterPanel>
        </S.MainArea>
        {/* 오늘의 퀘스트는 현재 화면에서 사용하지 않아 렌더링만 막아둡니다. */}
        {/* <LearnQuestPanel quests={quests} /> */}
      </S.LearnLayout>

      {rewardModalContent && (
        <S.RewardModalBackdrop onClick={() => setRewardModalType(null)}>
          {showRewardBurst && (
            <S.RewardFireworks aria-hidden="true">
              <span />
              <span />
              <span />
            </S.RewardFireworks>
          )}
          <S.RewardModalCard onClick={(event) => event.stopPropagation()}>
            <S.RewardModalIcon $type={rewardModalType}>{rewardModalContent.icon}</S.RewardModalIcon>
            <S.RewardModalTitle>{rewardModalContent.title}</S.RewardModalTitle>
            <S.RewardModalDesc>{rewardModalContent.desc}</S.RewardModalDesc>

            <S.RewardModalValue>
              <span>학습 보상</span>
              <strong>+{REWARD_EXP} EXP</strong>
            </S.RewardModalValue>

            <S.RewardModalButton type="button" onClick={handleRewardAction} disabled={rewardLoading}>
              {rewardLoading ? "보상 수령 중..." : rewardModalContent.button}
            </S.RewardModalButton>
          </S.RewardModalCard>
        </S.RewardModalBackdrop>
      )}
    </S.LearnWrap>
  );
};

export default LearnComponent;
