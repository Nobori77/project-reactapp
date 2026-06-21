import styled from "styled-components";

const blink = `
  0%, 92%, 100% {
    transform: scaleY(1);
  }

  94%, 96% {
    transform: scaleY(0.12);
  }
`;

export const LearnWrap = styled.section`
  position: relative;
  z-index: 0;
  isolation: isolate;
  width: 100%;
  min-height: 100vh;
  padding: 30px 24px 80px;
  background: #fbfcff;
  color: #111827;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 24px 16px 64px;
  }
`;

export const LearnLayout = styled.div`
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  gap: 36px;
  align-items: start;
  width: min(1560px, 100%);
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const SideColumn = styled.aside`
  position: sticky;
  top: 88px;
  display: grid;
  gap: 24px;
  align-self: start;

  @media (max-width: 900px) {
    position: static;
  }
`;

export const SideCard = styled.div`
  width: 200px;
  padding: 20px 0;
  border: 1px solid #eee;
  border-radius: 14px;
  background: #fff;
`;

export const SideTitle = styled.h2`
  margin: 0;
  padding: 12px 20px 6px;
  color: #aaa;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: 0.2px;
`;

export const GoalCard = styled.div`
  width: 200px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 16px;
  background: #fff;
`;

export const GoalTitle = styled.strong`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0;
  padding-bottom: 14px;
  border-bottom: 1px solid #dfe3ea;
  color: #111827;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.25;

  span {
    color: #4359fc;
    font-size: 16px;
  }
`;

export const GoalList = styled.div`
  display: grid;
  gap: 10px;
  padding: 14px 0 16px;
  border-bottom: 1px solid #dfe3ea;
`;

export const GoalItem = styled.div`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  color: #111827;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.15;

  span {
    display: inline-grid;
    place-items: center;
    font-size: 15px;
  }

  p {
    margin: 0;
  }

  strong {
    color: #4359fc;
    font-weight: 700;
    font-size: 13px;
    white-space: nowrap;
  }
`;

export const GoalText = styled.p`
  margin: 0;
  color: #374151;
  font-size: 14px;
  font-weight: 700;
`;

export const GoalProgressRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 12px;
  align-items: center;
  margin-bottom: 24px;

  strong {
    color: #374151;
    font-size: 14px;
    font-weight: 800;
    white-space: nowrap;
  }
`;

export const GoalProgressBar = styled.div`
  overflow: hidden;
  height: 8px;
  border-radius: 999px;
  background: #e5e7eb;

  span {
    display: block;
    width: 50%;
    height: 100%;
    border-radius: inherit;
    background: #4359fc;
  }
`;

export const GoalExp = styled.div`
  display: grid;
  grid-template-columns: 20px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  padding-top: 16px;
  color: #111827;
  font-size: 13px;
  font-weight: 700;
  line-height: 1.25;

  span {
    display: inline-grid;
    place-items: center;
    font-size: 15px;
  }

  p {
    margin: 0;
  }

  strong {
    color: #4359fc;
    font-size: 13px;
    font-weight: 700;
    white-space: nowrap;
  }
`;

export const SideMenu = styled.nav`
  display: block;
`;

export const SideButton = styled.button`
  display: block;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 9px 20px;
  border: 0;
  border-left: 3px solid ${({ $active }) => ($active ? "#4359fc" : "transparent")};
  border-radius: 0;
  background: ${({ $active }) => ($active ? "#eef0ff" : "transparent")};
  color: ${({ $active }) => ($active ? "#4359fc" : "#111827")};
  font-size: 16px;
  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  line-height: 1.4;
  cursor: pointer;
  text-align: left;
  transition: all 0.5s;

  &:hover {
    background: #eef0ff;
    color: #4359fc;
  }
`;

export const MenuIcon = styled.span`
  display: inline-grid;
  place-items: center;
  width: 20px;
  height: 20px;
  flex: 0 0 20px;
  font-size: 15px;
  line-height: 1;
`;

export const MainArea = styled.main`
  min-width: 0;
`;

export const RoadmapHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
  margin-bottom: 18px;
`;

export const TopBar = styled.div`
  position: absolute;
  right: 0;
  top: -40px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

export const GuideButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: ${({ $variant }) => ($variant === "profile" ? "40px" : "38px")};
  min-width: ${({ $variant }) => ($variant === "profile" ? "118px" : "auto")};
  padding: ${({ $variant }) => ($variant === "profile" ? "4px 16px 4px 4px" : "0 18px")};
  border: ${({ $variant }) => ($variant === "profile" ? "0" : "1px solid #4359fc")};
  border-radius: ${({ $variant }) => ($variant === "profile" ? "999px" : "8px")};
  background: ${({ $variant }) => ($variant === "profile" ? "#f3f5ff" : "#fff")};
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
  cursor: pointer;

  &:hover {
    background: #eef1ff;
  }
`;

export const GuideProfileAvatar = styled.img`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
  display: block;
  border-radius: 50%;
  object-fit: cover;
  background: #d9d9d9;
`;

export const GuideProfileName = styled.span`
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
  line-height: 1;
  white-space: nowrap;
`;

export const RoadmapGuideSlot = styled.div`
  position: absolute;
  top: 28px;
  right: 28px;
  z-index: 2;
`;

export const StudyAnalysisHeader = styled.header`
  padding: 36px 36px 0;
  margin-bottom: 48px;
`;

export const StudyAnalysisTitle = styled.h3`
  margin: 0 0 10px;
  color: #111827;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.35;
`;

export const StudyAnalysisDesc = styled.p`
  margin: 0;
  color: #94a3b8;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ChapterPanel = styled.article`
  position: relative;
  overflow: visible;
  min-height: 660px;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 24px 80px rgba(30, 48, 86, 0.04);
`;

export const ChapterHead = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  min-height: 64px;
  padding: 0 28px;
  background: #4359fc;
`;

export const Title = styled.h1`
  margin: 0;
  color: #111827;
  font-size: 28px;
  font-weight: 900;
  line-height: 1.3;
`;

export const GuidePill = styled.button`
  height: 32px;
  padding: 0 16px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.28);
  color: #fff;
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
`;

export const StatusText = styled.p`
  margin: 18px 24px 0;
  color: #777;
  font-size: 14px;
  font-weight: 700;
`;

export const RoadmapReadyText = styled.div`
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #4359fc;
  font-size: 28px;
  font-weight: 900;
  letter-spacing: 0;
`;

export const RoadmapStage = styled.div`
  position: relative;
  min-height: 680px;
  padding: 26px 0 120px;
  overflow: visible;

  @media (max-width: 760px) {
    min-height: 760px;
    padding: 30px 18px 120px;
  }
`;

export const RoadmapPath = styled.svg`
  position: absolute;
  left: 50%;
  top: 18px;
  z-index: 1;
  width: 592px;
  height: 680px;
  overflow: visible;
  pointer-events: none;
  transform: translateX(-50%);

  path {
    fill: none;
    stroke: #dfe4ff;
    stroke-width: 8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  @media (max-width: 760px) {
    width: 520px;
  }
`;

export const RoadmapList = styled.div`
  width: min(592px, 100%);
  min-height: 680px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  &::before {
    content: none;
  }

  &::after {
    content: none;
  }

  @media (max-width: 760px) {
    margin: 0 auto;
  }
`;

export const RoadmapMascot = styled.div`
  position: absolute;
  right: 90px;
  top: 270px;
  width: 114px;
  height: 126px;
  border-radius: 54% 54% 45% 45%;
  background: #4359fc;
  box-shadow: 0 18px 34px rgba(67, 89, 252, 0.16);
  transform: rotate(-2deg) scale(0.7);
  transform-origin: center;

  .eye {
    position: absolute;
    top: 36px;
    width: 28px;
    height: 34px;
    border-radius: 50%;
    background: #fff;
    animation: mascotBlink 4.2s ease-in-out infinite;
    transform-origin: center;

    &::after {
      content: "";
      position: absolute;
      left: 9px;
      top: 11px;
      width: 11px;
      height: 14px;
      border-radius: 50%;
      background: #27315f;
    }
  }

  .eye.left {
    left: 28px;
  }

  .eye.right {
    right: 26px;
  }

  @keyframes mascotBlink {
    ${blink}
  }

  .smile {
    position: absolute;
    left: 42px;
    top: 72px;
    width: 32px;
    height: 18px;
    border-bottom: 7px solid #ffd35c;
    border-radius: 0 0 26px 26px;
  }

  .arm {
    position: absolute;
    top: 90px;
    width: 18px;
    height: 56px;
    border-radius: 999px;
    background: #4359fc;
  }

  .arm.left {
    left: -14px;
    transform: rotate(45deg);
  }

  .arm.right {
    right: -13px;
    transform: rotate(-42deg);
  }

  .foot {
    position: absolute;
    bottom: -18px;
    width: 14px;
    height: 42px;
    border-radius: 999px;
    background: #ff9f1c;
  }

  .foot.left {
    left: 40px;
    transform: rotate(16deg);
  }

  .foot.right {
    right: 31px;
    transform: rotate(-15deg);
  }

  @media (max-width: 760px) {
    right: 24px;
    top: 392px;
    transform: scale(0.62);
  }
`;

export const RoadmapItem = styled.article`
  position: absolute;
  left: ${({ $index }) => {
    const positions = ["260px", "332px", "296px", "260px", "332px"];
    return positions[$index] || "296px";
  }};
  top: ${({ $index }) => {
    const positions = ["58px", "166px", "296px", "452px", "564px"];
    return positions[$index] || `${58 + $index * 120}px`;
  }};
  z-index: ${({ $selected }) => ($selected ? 20 : 3)};
  display: grid;
  justify-items: center;
  width: 132px;
  min-height: 82px;
  transform: translateX(-50%);
`;

export const StartLabel = styled.span`
  position: absolute;
  left: 50%;
  top: -48px;
  z-index: 4;
  min-width: 94px;
  height: 44px;
  display: grid;
  place-items: center;
  margin-bottom: -2px;
  border: 2px solid #c9d1ff;
  border-radius: 15px;
  background: #fff;
  color: #4359fc;
  font-size: 17px;
  font-weight: 900;
  box-shadow: 0 10px 24px rgba(67, 89, 252, 0.12);
  transform: translateX(-50%);
`;

export const StepButton = styled.button`
  position: relative;
  display: grid;
  place-items: center;
  width: ${({ $selected }) => ($selected ? "108px" : "88px")};
  height: ${({ $selected }) => ($selected ? "108px" : "88px")};
  border: 0;
  border-radius: 50%;
  background: ${({ $status, $selected }) =>
    $status === "done" || $status === "active" || $status === "reward" ? "rgba(67, 89, 252, 0.12)" : $selected ? "#eef1ff" : "#f2f2f2"};
  cursor: pointer;
  box-shadow: ${({ $status, $selected }) =>
    $status === "done" || $status === "active" || $status === "reward"
      ? "0 0 0 12px rgba(67, 89, 252, 0.1)"
      : $selected
      ? "0 0 0 10px rgba(67, 89, 252, 0.08)"
      : "none"};
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

export const StepBadge = styled.span`
  display: grid;
  place-items: center;
  width: 78px;
  height: 70px;
  border-radius: 50%;
  background: ${({ $status }) => ($status === "done" || $status === "active" || $status === "reward" ? "#4359fc" : "#e5e5e5")};
  color: ${({ $status }) => ($status === "done" || $status === "active" || $status === "reward" ? "#fff" : "#afafaf")};
  font-size: 34px;
  font-weight: 800;
  line-height: 1;
  box-shadow: ${({ $status }) =>
    $status === "done" || $status === "active" || $status === "reward"
      ? "0 8px 0 #3045de, 0 8px 0 rgba(0, 0, 0, 0.16)"
      : "0 8px 0 #cfcfcf, 0 8px 0 rgba(0, 0, 0, 0.14)"};

  img {
    width: 62px;
    height: 62px;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const LessonBubble = styled.div`
  position: absolute;
  left: 112px;
  top: 16px;
  z-index: 5;
  width: 178px;
  min-height: 60px;
  display: ${({ $status }) => ($status === "active" ? "grid" : "none")};
  align-content: center;
  gap: 5px;
  padding: 10px 14px;
  border: 1px solid #dfe5ff;
  border-radius: 12px;
  background: #fff;
  text-align: center;
  box-shadow: 0 10px 24px rgba(67, 89, 252, 0.08);
`;

export const LessonPopover = styled.aside`
  position: absolute;
  left: 50%;
  top: 108px;
  z-index: 30;
  display: grid;
  gap: 8px;
  width: 205px;
  min-height: 102px;
  padding: 12px;
  border-radius: 12px;
  background: ${({ $status }) => ($status === "locked" ? "#f2f2f2" : "#4359fc")};
  color: ${({ $status }) => ($status === "locked" ? "#777" : "#fff")};
  box-shadow: 0 10px 22px rgba(30, 48, 86, 0.12);
  transform: translateX(-50%);

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: -7px;
    width: 16px;
    height: 16px;
    border-radius: 3px;
    background: inherit;
    transform: translateX(-50%) rotate(45deg);
  }

  @media (max-width: 760px) {
    width: 205px;
  }
`;

export const LessonPopoverTitle = styled.strong`
  position: relative;
  z-index: 1;
  display: block;
  color: inherit;
  font-size: 14px;
  font-weight: 800;
  line-height: 1.35;
`;

export const LessonPopoverDesc = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  color: inherit;
  font-size: 11px;
  font-weight: 600;
  line-height: 1.4;
  opacity: 0.92;
`;

export const LessonStartButton = styled.button`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 34px;
  margin-top: 2px;
  border: 0;
  border-radius: 10px;
  background: ${({ disabled }) => (disabled ? "#fff" : "#fff")};
  color: ${({ disabled }) => (disabled ? "#aaa" : "#4359fc")};
  font-size: 12px;
  font-weight: 700;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  box-shadow: 0 3px 0 rgba(0, 0, 0, 0.12);
`;

export const LessonCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  min-height: ${({ $status }) => ($status === "active" ? "84px" : "72px")};
  padding: 15px 20px;
  border: 1px solid
    ${({ $status }) =>
      $status === "done" ? "#bbf7d0" : $status === "reward" ? "#fde68a" : $status === "locked" ? "#ebedf2" : "#4359fc"};
  border-radius: 8px;
  background: ${({ $status }) =>
    $status === "done" ? "#f0fdf4" : $status === "reward" ? "#fffbeb" : $status === "locked" ? "#f7f7f8" : "#4359fc"};
  color: ${({ $status }) => ($status === "active" ? "#fff" : "#2c2c2a")};
  box-shadow: ${({ $status }) => ($status === "active" ? "0 10px 22px rgba(67, 89, 252, 0.2)" : "none")};

  @media (max-width: 760px) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const LessonText = styled.div`
  min-width: 0;
`;

export const LessonTitle = styled.h2`
  margin: 0;
  color: inherit;
  font-size: ${({ $status }) => ($status === "active" ? "18px" : "16px")};
  font-weight: 900;
`;

export const LessonDesc = styled.p`
  margin: 8px 0 0;
  color: inherit;
  opacity: 0.74;
  font-size: 14px;
  line-height: 1.45;
`;

export const LessonButton = styled.button`
  flex: 0 0 auto;
  min-width: 82px;
  height: 34px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: ${({ $status }) => ($status === "active" ? "#fff" : $status === "locked" || $status === "reward" ? "#f2f2f2" : "#dcfce7")};
  color: ${({ $status }) => ($status === "active" ? "#4359fc" : $status === "locked" || $status === "reward" ? "#aaa" : "#15803d")};
  font-size: 13px;
  font-weight: 900;
  cursor: pointer;
`;

export const NextChapter = styled.button`
  display: grid;
  align-content: center;
  gap: 7px;
  width: min(520px, calc(100% - 120px));
  min-height: 74px;
  margin: 0 auto 32px;
  padding: 15px 24px;
  border: 1px dashed #cfd6ff;
  border-radius: 8px;
  background: #f8f9ff;
  color: #89c;
  cursor: pointer;

  strong {
    font-size: 15px;
    font-weight: 900;
    line-height: 1.35;
    white-space: nowrap;
  }

  span {
    color: #aaa;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.35;
    white-space: nowrap;
  }

  @media (max-width: 760px) {
    width: calc(100% - 40px);
  }
`;

export const QuestPanel = styled.aside`
  align-self: start;
  margin-top: 0;
  padding: 18px;
  border: 1px solid #e5e8f2;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 8px 22px rgba(44, 52, 92, 0.05);

  @media (max-width: 1100px) {
    grid-column: 2;
  }

  @media (max-width: 760px) {
    grid-column: auto;
  }
`;

export const QuestTitle = styled.h2`
  margin: 0 0 14px;
  color: #2c2c2a;
  font-size: 15px;
  font-weight: 900;
`;

export const QuestItem = styled.div`
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 38px;
  gap: 10px;
  align-items: center;
  min-height: 52px;
  border-top: 1px solid #eef1f5;

  &:first-of-type {
    border-top: 0;
  }
`;

export const QuestIcon = styled.span`
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #eef1ff;
  font-size: 14px;
`;

export const QuestInfo = styled.div`
  min-width: 0;
`;

export const QuestName = styled.strong`
  display: block;
  color: #2c2c2a;
  font-size: 12px;
  font-weight: 900;
  line-height: 1.35;
`;

export const QuestReward = styled.span`
  display: grid;
  place-items: center;
  width: 22px;
  height: 22px;
  border-radius: 7px;
  background: #fff7ed;
  font-size: 12px;
`;

export const QuestMeta = styled.div`
  display: grid;
  gap: 7px;
  justify-items: end;
`;

export const QuestBar = styled.div`
  overflow: hidden;
  height: 5px;
  margin-top: 7px;
  border-radius: 999px;
  background: #edf0f5;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: #4359fc;
  }
`;

export const QuestCount = styled.p`
  margin: 0;
  color: #aaa;
  font-size: 11px;
  font-weight: 800;
  text-align: right;
  white-space: nowrap;
`;

export const ProgressArea = styled.div`
  display: grid;
  grid-template-columns: 168px minmax(0, 1fr) 46px;
  align-items: center;
  gap: 22px;
  width: 100%;
  margin: 34px 0 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    width: 100%;
    gap: 14px;
  }
`;

export const ProgressText = styled.div`
  min-width: 0;
  align-self: center;
`;

export const ProgressTitle = styled.strong`
  display: block;
  color: #2c2c2a;
  font-size: 14px;
  font-weight: 800;
`;

export const ProgressDesc = styled.p`
  margin: 8px 0 0;
  color: #888;
  font-size: 13px;
  line-height: 1.45;
`;

export const ProgressBar = styled.div`
  overflow: hidden;
  height: 9px;
  border-radius: 999px;
  background: #e9edff;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: #4359fc;
  }
`;

export const Percent = styled.strong`
  align-self: center;
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
`;

export const AlphaWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 30px 24px 80px;
  background: #fbfcff;
  color: #111827;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 24px 16px 64px;
  }
`;

export const AlphaLayout = styled(LearnLayout)``;

export const AlphaMain = styled.main`
  min-width: 0;
  padding: 56px 44px 68px;
  border: 1px solid #edf0f7;
  border-radius: 8px;
  background: #fff;
  text-align: center;
`;

export const AlphaHeader = styled.header`
  margin-bottom: 48px;
`;

export const AlphaTitle = styled.h1`
  margin: 0 0 14px;
  color: #1f2430;
  font-size: 32px;
  font-weight: 900;
  line-height: 1.35;
`;

export const AlphaDesc = styled.p`
  width: min(540px, 100%);
  margin: 0 auto 28px;
  color: #777f8e;
  font-size: 16px;
  line-height: 1.65;
`;

export const AlphaStartButton = styled.button`
  width: min(430px, 100%);
  height: 50px;
  border: 0;
  border-radius: 8px;
  background: #4359fc;
  color: #fff;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:hover {
    background: #3545f5;
  }
`;

export const AlphaSection = styled.section`
  margin-top: 46px;
`;

export const AlphaSectionTitle = styled.h2`
  margin: 0 0 24px;
  color: #1f2430;
  font-size: 22px;
  font-weight: 900;
`;

export const AlphaLetterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 86px);
  justify-content: center;
  gap: 18px 24px;

  @media (max-width: 520px) {
    grid-template-columns: repeat(3, 86px);
  }
`;

export const AlphaLetterCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
  width: 86px;
  height: 86px;
  border: 1px solid #dedede;
  border-radius: 8px;
  background: #fff;
  cursor: pointer;

  strong {
    color: #1f2430;
    font-size: 36px;
    font-weight: 900;
    line-height: 1;
  }

  span {
    width: 40px;
    height: 2px;
    border-radius: 999px;
    background: #d9d9d9;
  }

  &:hover {
    border-color: #4359fc;
    background: #f8f9ff;
    box-shadow: 0 10px 22px rgba(67, 89, 252, 0.12);

    strong {
      color: #4359fc;
    }

    span {
      background: #4359fc;
    }
  }
`;

export const AlphaPopupDim = styled.div`
  position: fixed;
  inset: 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(37, 38, 61, 0.56);
`;

export const AlphaPopupCard = styled.aside`
  position: relative;
  width: 360px;
  min-height: 536px;
  padding: 38px 28px 28px;
  border-radius: 18px;
  background: #fff;
  text-align: center;
  box-shadow: 0 24px 54px rgba(23, 31, 77, 0.22);
`;

export const AlphaPopupClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  border: 0;
  background: transparent;
  color: #c3c7d0;
  font-size: 24px;
  cursor: pointer;
`;

export const AlphaPopupLetter = styled.div`
  color: #4359fc;
  font-size: 96px;
  font-weight: 900;
  line-height: 1;
`;

export const AlphaPopupName = styled.h2`
  margin: 10px 0 7px;
  color: #1f2430;
  font-size: 21px;
  font-weight: 900;
`;

export const AlphaPopupSound = styled.p`
  margin: 0 0 22px;
  color: #999;
  font-size: 16px;
  font-weight: 700;
`;

export const AlphaHandBox = styled.div`
  display: grid;
  place-items: center;
  width: 284px;
  height: 148px;
  margin: 0 auto 14px;
  border-radius: 10px;
  background: #eef1ff;

  img {
    width: 156px;
    height: 146px;
    object-fit: contain;
  }
`;

export const AlphaPopupCaption = styled.p`
  margin: 0 0 12px;
  color: #888;
  font-size: 15px;
`;

export const AlphaPopupInfo = styled.div`
  width: 284px;
  margin: 0 auto 24px;
  padding: 13px 14px;
  border: 1px solid #4359fc;
  border-radius: 6px;
  text-align: center;

  p {
    margin: 0 0 6px;
    color: #555b68;
    font-size: 14px;
    line-height: 1.4;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const AlphaPopupActions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 284px;
  margin: 0 auto;

  button {
    border: 0;
    background: transparent;
    color: #1f2430;
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
  }
`;

export const LearnQuizWrap = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 42px 24px 72px;
  background: #fff;
  color: #2c2c2a;
  font-family: Pretendard, sans-serif;

  @media (max-width: 768px) {
    padding: 92px 16px 72px;
  }
`;

export const LearnQuizShell = styled.div`
  width: min(1320px, 100%);
  margin: 0 auto;
`;

export const LearnQuizTop = styled.div`
  display: grid;
  grid-template-columns: 40px minmax(0, 1fr) 60px;
  gap: 24px;
  align-items: center;
  width: min(1120px, 100%);
  margin: 0 auto;
`;

export const LearnQuizClose = styled.button`
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: #aaa;
  font-size: 22px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnQuizProgress = styled.div`
  overflow: hidden;
  height: 14px;
  border-radius: 999px;
  background: #eeeeee;

  span {
    display: block;
    width: ${({ $progress }) => $progress || 0}%;
    height: 100%;
    border-radius: inherit;
    background: ${({ $status }) =>
      $status === "correct" ? "#58cc02" : $status === "incorrect" ? "#f14141" : $status === "review" ? "#ce82ff" : "#4359fc"};
    transition: width 0.2s ease, background 0.2s ease;
  }
`;

export const LearnQuizCount = styled.strong`
  color: #4359fc;
  font-size: 15px;
  font-weight: 900;
  text-align: right;
`;

export const LearnSessionIntro = styled.section`
  width: min(880px, 100%);
  margin: 0 auto 30px;
`;

export const SessionStatus = styled.p`
  margin: 0 0 18px;
  padding: 13px 16px;
  border-radius: 8px;
  background: #f8f9ff;
  color: #4359fc;
  font-size: 14px;
  font-weight: 800;
`;

export const SessionVideoCard = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;

  video {
    width: min(520px, 100%);
    height: auto;
    aspect-ratio: 700 / 466;
    border-radius: 12px;
    background: transparent;
    object-fit: contain;
  }
`;

export const LearnQuizHeader = styled.header`
  width: min(1120px, 100%);
  margin: 32px auto 22px;
  text-align: left;
`;

export const LearnQuizKicker = styled.p`
  margin: 0 0 14px;
  color: #4359fc;
  font-size: 15px;
  font-weight: 900;
`;

export const LearnQuizTitle = styled.h1`
  margin: 0;
  color: #3c3c3c;
  font-size: 30px;
  font-weight: 900;
  line-height: 40px;
`;

export const LearnQuizHint = styled.p`
  margin: 17px auto 0;
  color: #777f8e;
  font-size: 16px;
  line-height: 1.6;
`;

export const LearnQuizTarget = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 180px;
  min-height: 54px;
  margin-top: 28px;
  padding: 0 34px;
  border-radius: 999px;
  background: #eef1ff;
  color: #4359fc;
  font-size: 23px;
  font-weight: 900;
`;

export const LearnQuizOptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 260px);
  justify-content: center;
  gap: 36px;
  width: min(880px, 100%);
  margin: 0 auto 38px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const optionTone = {
  default: {
    border: "#e1e5ef",
    bg: "#fff",
    iconBg: "#f1f3ff",
    text: "#2c2c2a",
    meta: "#888",
    numberBg: "#f2f2f2",
    number: "#888",
  },
  selected: {
    border: "#4359fc",
    bg: "#dff5ff",
    iconBg: "#c8ddff",
    text: "#4359fc",
    meta: "#5b6cff",
    numberBg: "#4359fc",
    number: "#fff",
  },
  correct: {
    border: "#58cc02",
    bg: "#d9ffc6",
    iconBg: "#b9f47e",
    text: "#58cc02",
    meta: "#58cc02",
    numberBg: "#58cc02",
    number: "#fff",
  },
  wrong: {
    border: "#f14141",
    bg: "#ffe8e8",
    iconBg: "#ffc7c7",
    text: "#f14141",
    meta: "#f14141",
    numberBg: "#f14141",
    number: "#fff",
  },
};

export const LearnQuizOptionIcon = styled.div`
  display: grid;
  place-items: center;
  height: ${({ $wordOnly }) => ($wordOnly ? "100%" : "116px")};
  margin-bottom: ${({ $wordOnly }) => ($wordOnly ? "0" : "24px")};
  padding: ${({ $wordOnly }) => ($wordOnly ? "14px 10px" : "0")};
  border: 1px dashed #cbd5ff;
  border-radius: 10px;
  background: #f1f3ff;
  font-size: ${({ $wordOnly }) => ($wordOnly ? "32px" : "48px")};
  font-weight: ${({ $wordOnly }) => ($wordOnly ? "700" : "400")};
  line-height: 1.25;
  text-align: center;
  word-break: keep-all;
`;

export const LearnQuizOptionText = styled.div`
  display: grid;
  gap: 8px;

  strong {
    color: inherit;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  }

  span {
    display: none;
  }
`;

export const LearnQuizOptionNumber = styled.span`
  position: absolute;
  right: 12px;
  bottom: 14px;
  display: grid;
  place-items: center;
  width: 24px;
  height: 24px;
  border-radius: 7px;
  background: #f2f2f2;
  color: #888;
  font-size: 13px;
  font-weight: 900;
`;

export const LearnQuizOption = styled.button`
  position: relative;
  width: 260px;
  height: ${({ $wordOnly }) => ($wordOnly ? "154px" : "210px")};
  overflow: hidden;
  padding: ${({ $wordOnly }) => ($wordOnly ? "16px 18px" : "20px 24px 22px")};
  border: 2px solid ${({ $state }) => optionTone[$state]?.border};
  border-radius: 14px;
  background: ${({ $state }) => optionTone[$state]?.bg};
  text-align: left;
  cursor: pointer;
  box-shadow: none;
  transition: border-color 0.18s ease, background 0.18s ease, transform 0.18s ease, box-shadow 0.18s ease;

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 10px 22px rgba(67, 89, 252, 0.12);
  }

  &:disabled {
    cursor: default;
  }

  .optionIcon {
    background: ${({ $state }) => optionTone[$state]?.iconBg};
  }

  .optionText {
    strong {
      color: ${({ $state }) => optionTone[$state]?.text};
      font-weight: ${({ $state }) => ($state === "default" ? 400 : 900)};
    }

    span {
      color: ${({ $state }) => optionTone[$state]?.meta};
    }
  }

  .optionNumber {
    background: ${({ $state }) => optionTone[$state]?.numberBg};
    color: ${({ $state }) => optionTone[$state]?.number};
  }
`;

export const LearnQuizBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1320px, 100%);
  margin: 0 auto;
  padding: 34px 120px 0;
  border-top: 1px solid #e6e6e6;
`;

export const LearnQuizSkip = styled.button`
  border: 0;
  background: transparent;
  color: #c0c0c0;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnQuizCheck = styled.button`
  min-width: auto;
  height: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #4359fc;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;

  &:disabled {
    background: transparent;
    color: #aaa;
    cursor: default;
  }
`;

export const LearnQuizFeedback = styled.div`
  display: grid;
  grid-template-columns: 44px 1fr 180px;
  gap: 20px;
  align-items: center;
  width: min(1320px, 100%);
  min-height: 160px;
  margin: 38px auto 0;
  padding: 34px 56px;
  border-radius: 0;
  background: ${({ $status }) => ($status === "correct" ? "#d9ffc6" : "#ffe8e8")};

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LearnQuizFeedbackIcon = styled.div`
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  background: transparent;
  color: #1a1a1a;
  font-size: 28px;
  font-weight: 900;
`;

export const LearnQuizFeedbackText = styled.div`
  strong {
    display: block;
    margin-bottom: 14px;
    color: ${({ $status }) => ($status === "correct" ? "#58cc02" : "#f14141")};
    font-size: 22px;
    font-weight: 900;
  }

  p {
    margin: 0 0 14px;
    color: #555b68;
    font-size: 15px;
    line-height: 1.55;
  }

  .descriptionWrap {
    margin-top: 16px;
  }

  .descriptionLabel {
    display: block;
    margin-bottom: 6px;
    color: #f14141;
    font-size: 15px;
    font-weight: 900;
  }

  .description {
    margin-bottom: 0;
    color: #777f8e;
    font-size: 15px;
  }

  span {
    color: #1f2430;
    font-size: 15px;
    font-weight: 900;
  }
`;

export const LearnQuizFeedbackActions = styled.div`
  display: flex;
  gap: 12px;
  justify-content: flex-end;

  button {
    width: ${({ $status }) => ($status === "correct" ? "120px" : "170px")};
    height: 58px;
    border: 0;
    border-radius: ${({ $status }) => ($status === "correct" ? "0" : "12px")};
    background: ${({ $status }) => ($status === "correct" ? "transparent" : "#f14141")};
    color: ${({ $status }) => ($status === "correct" ? "#1a1a1a" : "#fff")};
    font-size: 16px;
    font-weight: 900;
    cursor: pointer;
  }

  .review {
    background: #fff;
    color: #4359fc;
  }
`;

export const LearnReviewCard = styled.article`
  width: min(1320px, 100%);
  margin: 0 auto;
  padding-top: 20px;
`;

export const LearnReviewLabel = styled.p`
  margin: 0 0 14px;
  color: #ce82ff;
  font-size: 23px;
  font-weight: 900;
`;

export const LearnReviewIntro = styled.header`
  width: min(1035px, 100%);
  margin: 50px auto 25px;
  text-align: left;
`;

export const LearnReviewTitle = styled.h1`
  margin: 0 0 16px;
  color: #3c3c3c;
  font-size: 35px;
  font-weight: 900;
  line-height: 1.35;
`;

export const LearnReviewDesc = styled.p`
  margin: 0;
  color: #888;
  font-size: 18px;
  line-height: 1.55;
`;

export const LearnReviewContent = styled.section`
  position: relative;
  display: grid;
  grid-template-columns: minmax(368px, 495px) minmax(253px, 1fr);
  gap: 53px;
  width: min(920px, 100%);
  min-height: 407px;
  margin: 0 auto 85px;
  padding: 30px 46px;
  border: 1px solid #d8d8d8;
  border-radius: 18px;
  background: #fff;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

export const LearnReviewMedia = styled.div`
  display: grid;
  place-items: center;
  min-height: 0;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: #aaa;
  font-size: 13px;

  video {
    width: 100%;
    height: auto;
    aspect-ratio: 700 / 466;
    border-radius: inherit;
    object-fit: contain;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: inherit;
    object-fit: contain;
  }

  p {
    margin: 0;
  }
`;

export const LearnReviewInfo = styled.div`
  padding-top: 25px;
  white-space: pre-line;

  span {
    display: block;
    margin-bottom: 12px;
    color: #3c3c3c;
    font-size: 23px;
    font-weight: 800;
  }

  p {
    margin: 0 0 23px;
    color: #3c3c3c;
    font-size: 16px;
    line-height: 1.45;
  }
`;

export const LearnReviewWord = styled.h2`
  margin: 0 0 39px;
  color: #4359fc;
  font-size: 41px;
  font-weight: 900;
`;

export const LearnReviewControls = styled.div`
  position: absolute;
  left: 40px;
  bottom: 32px;
  display: flex;
  gap: 12px;

  button {
    min-width: 130px;
    height: 34px;
    border: 1px solid #c9d1ff;
    border-radius: 999px;
    background: #f6f8ff;
    color: #4359fc;
    font-size: 12px;
    font-weight: 900;
    cursor: pointer;

    &:first-child {
      border: 0;
      background: #4359fc;
      color: #fff;
      font-size: 13px;
    }
  }
`;

export const LearnReviewButton = styled.button`
  width: auto;
  height: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #4359fc;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnReviewActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(1320px, 100%);
  margin: 0 auto;
  padding: 34px 120px 0;
  border-top: 1px solid #e6e6e6;
`;

export const LearnReviewSkip = styled.button`
  width: auto;
  height: auto;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: #aaa;
  font-size: 16px;
  font-weight: 900;
  cursor: pointer;
`;

export const LearnResultOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
`;

export const LearnResultModal = styled.section`
  width: min(560px, calc(100vw - 48px));
  max-height: calc(100vh - 48px);
  overflow-y: auto;
  padding: 46px 40px 34px;
  border-radius: 16px;
  background: #fff;
  text-align: center;
  box-shadow: 0 26px 70px rgba(38, 48, 104, 0.18);
`;

export const LearnResultCelebrate = styled.p`
  margin: 0 0 12px;
  font-size: 48px;
  line-height: 1;
`;

export const LearnResultTitle = styled.h1`
  margin: 0 0 34px;
  color: #111;
  font-size: 24px;
  font-weight: 900;
`;

export const LearnResultAccuracy = styled.strong`
  display: block;
  margin-bottom: 12px;
  color: #4359fc;
  font-size: 58px;
  line-height: 1;
  font-weight: 900;
`;

export const LearnResultSubText = styled.p`
  margin: 0 0 38px;
  color: #555;
  font-size: 16px;
`;

export const LearnResultStatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: min(430px, 100%);
  margin: 0 auto 52px;

  div {
    display: grid;
    justify-items: center;
    gap: 8px;
  }

  span {
    font-size: 22px;
    line-height: 1;
  }

  small {
    color: #999;
    font-size: 14px;
  }

  strong {
    color: #111;
    font-size: 25px;
    font-weight: 900;
  }
`;

export const LearnResultWrongBox = styled.article`
  width: min(520px, 100%);
  min-height: 88px;
  margin: 0 auto 44px;
  padding: 18px 20px;
  border: 1px solid #fca5a5;
  border-radius: 10px;
  text-align: left;

  > strong {
    display: block;
    margin-bottom: 12px;
    color: #ef4444;
    font-size: 16px;
    font-weight: 900;
  }

  > p {
    margin: 0;
    color: #888;
    font-size: 13px;
    line-height: 1.6;
  }
`;

export const LearnResultWrongItem = styled.div`
  p {
    margin: 0 0 15px;
    color: #555;
    font-size: 15px;
    line-height: 18px;
  }

  span,
  em {
    display: block;
    margin: 0 0 5px;
    font-size: 15px;
    line-height: 18px;
    font-style: normal;
  }

  span {
    color: #ef4444;
  }

  em {
    color: #22c55e;
    font-weight: 800;
  }
`;

export const LearnResultLine = styled.div`
  width: min(520px, 100%);
  height: 1px;
  margin: 0 auto 28px;
  background: #e6e6e6;
`;

export const LearnResultActions = styled.div`
  width: min(520px, 100%);
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: 0 auto;

  button {
    border: 0;
    background: transparent;
    color: #666;
    font-size: 15px;
    font-weight: 900;
    cursor: pointer;
  }

  button:hover {
    color: #4359fc;
  }
`;

export const RewardModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.42);
`;

export const RewardModalCard = styled.div`
  position: relative;
  z-index: 2;
  width: min(360px, 100%);
  display: grid;
  justify-items: center;
  gap: 14px;
  padding: 34px 28px 26px;
  border-radius: 24px;
  background: #fff;
  text-align: center;
  font-family: Pretendard, sans-serif;
  box-shadow: 0 26px 70px rgba(15, 23, 42, 0.22);
`;

export const RewardFireworks = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  span {
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    opacity: 0;
    background: radial-gradient(circle, #fff 0 28%, #facc15 30% 54%, transparent 56%);
    box-shadow: 0 0 0 0 transparent;
    animation: reward-firework 0.9s cubic-bezier(0.16, 0.84, 0.35, 1) forwards;
  }

  span:nth-child(1) {
    left: 30%;
    top: 28%;
    box-shadow:
      0 -105px 0 1px #facc15,
      50px -88px 0 0 #ff4d6d,
      88px -50px 0 1px #60a5fa,
      105px 0 0 0 #22c55e,
      88px 50px 0 1px #fb923c,
      50px 88px 0 0 #a78bfa,
      0 105px 0 1px #f472b6,
      -50px 88px 0 0 #38bdf8,
      -88px 50px 0 1px #fde047,
      -105px 0 0 0 #34d399,
      -88px -50px 0 1px #c084fc,
      -50px -88px 0 0 #fb7185,
      0 -58px 0 0 #fff,
      58px 0 0 0 #fff,
      0 58px 0 0 #fff,
      -58px 0 0 0 #fff,
      42px 42px 0 0 #fff,
      -42px 42px 0 0 #fff,
      42px -42px 0 0 #fff,
      -42px -42px 0 0 #fff;
  }

  span:nth-child(2) {
    left: 70%;
    top: 30%;
    animation-delay: 0.35s;
    box-shadow:
      0 -118px 0 1px #60a5fa,
      56px -98px 0 0 #facc15,
      98px -56px 0 1px #ff4d6d,
      118px 0 0 0 #22c55e,
      98px 56px 0 1px #a78bfa,
      56px 98px 0 0 #fb923c,
      0 118px 0 1px #38bdf8,
      -56px 98px 0 0 #f472b6,
      -98px 56px 0 1px #fde047,
      -118px 0 0 0 #34d399,
      -98px -56px 0 1px #c084fc,
      -56px -98px 0 0 #fb7185,
      0 -64px 0 0 #fff,
      64px 0 0 0 #fff,
      0 64px 0 0 #fff,
      -64px 0 0 0 #fff,
      46px 46px 0 0 #fff,
      -46px 46px 0 0 #fff,
      46px -46px 0 0 #fff,
      -46px -46px 0 0 #fff;
  }

  span:nth-child(3) {
    left: 50%;
    top: 70%;
    animation-delay: 0.7s;
    box-shadow:
      0 -112px 0 1px #22c55e,
      54px -94px 0 0 #ff4d6d,
      94px -54px 0 1px #facc15,
      112px 0 0 0 #60a5fa,
      94px 54px 0 1px #f472b6,
      54px 94px 0 0 #fb923c,
      0 112px 0 1px #a78bfa,
      -54px 94px 0 0 #38bdf8,
      -94px 54px 0 1px #fde047,
      -112px 0 0 0 #34d399,
      -94px -54px 0 1px #c084fc,
      -54px -94px 0 0 #fb7185,
      0 -60px 0 0 #fff,
      60px 0 0 0 #fff,
      0 60px 0 0 #fff,
      -60px 0 0 0 #fff,
      44px 44px 0 0 #fff,
      -44px 44px 0 0 #fff,
      44px -44px 0 0 #fff,
      -44px -44px 0 0 #fff;
  }

  @keyframes reward-firework {
    0% {
      opacity: 0;
      transform: scale(0.04);
      filter: blur(0);
    }

    10% {
      opacity: 1;
      transform: scale(0.16);
      filter: drop-shadow(0 0 14px rgba(255, 255, 255, 0.9));
    }

    42% {
      opacity: 1;
      transform: scale(1);
      filter: drop-shadow(0 0 18px rgba(250, 204, 21, 0.45));
    }

    100% {
      opacity: 0;
      transform: scale(1.25);
      filter: blur(1.2px);
    }
  }
`;

export const RewardModalIcon = styled.div`
  width: 70px;
  height: 70px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: ${({ $type }) => ($type === "locked" ? "#f3f4f6" : "#eef1ff")};
  color: ${({ $type }) => ($type === "locked" ? "#8b8b8b" : "#4359fc")};
  font-size: ${({ $type }) => ($type === "received" ? "34px" : "32px")};
  font-weight: 700;
`;

export const RewardModalTitle = styled.h3`
  margin: 4px 0 0;
  color: #1f2937;
  font-size: 20px;
  font-weight: 800;
  line-height: 1.35;
`;

export const RewardModalDesc = styled.p`
  margin: 0;
  color: #777;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.55;
`;

export const RewardModalValue = styled.div`
  width: 100%;
  display: grid;
  gap: 6px;
  padding: 16px;
  border-radius: 16px;
  background: #f5f7ff;

  span {
    color: #7780a1;
    font-size: 12px;
    font-weight: 600;
  }

  strong {
    color: #4359fc;
    font-size: 27px;
    font-weight: 800;
  }
`;

export const RewardModalButton = styled.button`
  width: 100%;
  height: 46px;
  margin-top: 4px;
  border: 0;
  border-radius: 14px;
  background: #4359fc;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(67, 89, 252, 0.22);

  &:hover {
    background: #3348ee;
  }

  &:disabled {
    background: #9aa5ff;
    cursor: default;
    box-shadow: none;
  }
`;


export const SignRoadmapStage = styled.div`
  position: relative;
  width: min(1040px, calc(100% - 64px));
  height: 360px;
  margin: 88px auto 0;

  @media (max-width: 980px) {
    width: min(980px, calc(100% - 40px));
  }
`;

export const SignRoadmapSvg = styled.svg`
  position: absolute;
  inset: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  overflow: visible;
  pointer-events: none;

  path {
    fill: none;
    stroke: #aeb7c7;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 7 8;
  }

  marker path {
    fill: #aeb7c7;
    stroke: none;
    stroke-dasharray: none;
  }

  #sign-roadmap-arrow-active path {
    fill: #4359fc;
  }

  .connector-active {
    stroke: #4359fc;
    stroke-dasharray: none;
  }
`;

export const SignConnector = styled.span`
  position: absolute;
  z-index: 1;
  pointer-events: none;

  &.line-1,
  &.line-2 {
    top: 146px;
    height: 0;
    border-top: 2px dashed #aeb7c7;
  }

  &.line-1 {
    left: 118px;
    width: 98px;
  }

  &.line-2 {
    left: 298px;
    width: 98px;
  }

  &.line-3 {
    left: 456px;
    top: 36px;
    width: 220px;
    height: 110px;
    border-top: 2px dashed #aeb7c7;
    border-left: 2px dashed #aeb7c7;
    border-right: 2px dashed #aeb7c7;
    border-radius: 76px 76px 0 0;
  }

  &.line-4 {
    left: 676px;
    top: 146px;
    width: 68px;
    height: 128px;
    border-right: 2px dashed #aeb7c7;
    border-bottom: 2px dashed #aeb7c7;
    border-radius: 0 0 70px 0;
  }

  &.line-4::before {
    content: "";
    position: absolute;
    right: -2px;
    bottom: -72px;
    width: 72px;
    height: 72px;
    border-left: 2px dashed #aeb7c7;
    border-top: 2px dashed #aeb7c7;
    border-radius: 70px 0 0 0;
  }

  &.line-3::after,
  &.line-4::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
  }

  &.line-3::after {
    top: -7px;
    right: 116px;
    border-width: 6px 0 6px 10px;
    border-color: transparent transparent transparent #aeb7c7;
  }

  &.line-4::after {
    left: -6px;
    bottom: -78px;
    border-width: 10px 6px 0 6px;
    border-color: #aeb7c7 transparent transparent transparent;
  }

  &.is-active.line-1,
  &.is-active.line-2 {
    border-top-style: solid;
    border-top-color: #4359fc;
  }

  &.is-active.line-3 {
    border-top-style: solid;
    border-left-style: solid;
    border-right-style: solid;
    border-color: #4359fc;
  }

  &.is-active.line-4 {
    border-right-style: solid;
    border-bottom-style: solid;
    border-color: #4359fc;
  }

  &.is-active.line-4::before {
    border-left-style: solid;
    border-top-style: solid;
    border-color: #4359fc;
  }
`;

export const SignRoadmapNode = styled.article`
  position: absolute;
  display: grid;
  justify-items: center;
  gap: 29px;
  text-align: center;

  &.node-intro {
    top: 108px;
  }

  &.node-basic {
    left: 300px;
    top: 108px;
  }

  &.node-middle {
    left: 560px;
    top: 108px;
  }

  &.node-reward {
    left: 830px;
    top: 108px;
  }

  &.node-advanced {
    left: 812px;
    top: 368px;
  }

  &.status-locked {
    color: #8f98aa;
  }
`;

export const RoadmapRabbitWrap = styled.div`
  position: absolute;
  z-index: 3;
  width: 230px;
  display: grid;
  justify-items: center;
  pointer-events: none;
`;

export const RoadmapRabbitButton = styled.button`
  width: 185px;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: grab;
  pointer-events: auto;
  touch-action: none;
  transform-origin: 76% 30%;

  &:active {
    cursor: grabbing;
  }

  &:hover {
    animation: roadmap-rabbit-wave 1.8s ease-in-out infinite;
    filter: drop-shadow(0 12px 20px rgba(67, 88, 255, 0.16));
  }

  &:focus-visible {
    outline: 2px solid #4358ff;
    outline-offset: 4px;
    border-radius: 18px;
  }

  @keyframes roadmap-rabbit-wave {
    0%,
    100% {
      transform: translate3d(0, 0, 0) rotate(0deg);
    }

    18% {
      transform: translate3d(0, -2px, 0) rotate(-3deg);
    }

    36% {
      transform: translate3d(0, 1px, 0) rotate(3deg);
    }

    54% {
      transform: translate3d(0, -1px, 0) rotate(-2deg);
    }

    72% {
      transform: translate3d(0, 0, 0) rotate(2deg);
    }
  }
`;

export const RoadmapRabbit = styled.img`
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
  user-select: none;
  pointer-events: none;
`;

export const RabbitSpeechBubble = styled.div`
  position: absolute;
  right: 160px;
  top: 6px;
  width: max-content;
  max-width: 240px;
  padding: 12px 14px;
  border: 1px solid #dbe2ff;
  border-radius: 16px;
  background: #ffffff;
  color: #1f2937;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.45;
  box-shadow: 0 16px 36px rgba(30, 42, 92, 0.14);
  pointer-events: none;
  animation: rabbit-bubble-in 0.18s ease-out;

  &::after {
    content: "";
    position: absolute;
    right: -7px;
    top: 28px;
    width: 12px;
    height: 12px;
    border-top: 1px solid #dbe2ff;
    border-right: 1px solid #dbe2ff;
    background: #ffffff;
    transform: rotate(45deg);
  }

  @keyframes rabbit-bubble-in {
    from {
      opacity: 0;
      transform: translate3d(6px, 4px, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
`;

export const SignNodeButton = styled.button`
  display: grid;
  place-items: center;
  width: 88px;
  height: 88px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  cursor: pointer;
  transition: transform 0.18s ease, filter 0.18s ease;

  img {
    display: block;
    width: 88px;
    height: 88px;
    object-fit: contain;
    border-radius: 50%;
  }

  .status-active & {
    box-shadow: 0 0 0 3px #4359fc;
  }

  .status-done & {
    box-shadow: 0 0 0 3px rgba(67, 89, 252, 0.2);
  }

  .status-locked & {
    cursor: default;
    filter: grayscale(1);
    opacity: 0.72;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
  }
`;

export const SignNodeTitle = styled.strong`
  color: #111827;
  font-size: 17px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: 0;

  .status-locked & {
    color: #7f8797;
  }

  .node-reward & {
    display: none;
  }

`;

export const SignNodeBadge = styled.span`
  display: none;
  min-width: 58px;
  height: 26px;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 0 11px;
  border-radius: 999px;
  background: #eef2ff;
  color: #4359fc;
  font-size: 12px;
  font-weight: 800;
  line-height: 1;

  .status-locked & {
    background: #eef0f4;
    color: #98a0ae;
  }

  .status-done:not(.node-reward) & {
    display: inline-flex;
    font-size: 0;
  }

  .status-done:not(.node-reward) &::before {
    content: "✓ 완료";
    font-size: 12px;
  }

  .node-advanced.status-locked & {
    display: none;
  }
`;

export const SignNodeAction = styled.button`
  min-width: 86px;
  height: 30px;
  padding: 0 14px;
  border: 0;
  border-radius: 999px;
  background: #4359fc;
  color: #fff;
  font-size: 12px;
  font-weight: 800;
  line-height: 1;
  cursor: pointer;
  box-shadow: 0 10px 18px rgba(67, 89, 252, 0.18);

  &:hover {
    background: #3348ee;
  }
`;
