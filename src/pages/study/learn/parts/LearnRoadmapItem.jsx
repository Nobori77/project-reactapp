// 학습 로드맵 단계 버튼과 선택 팝오버입니다.
import * as S from "../style";

const LearnRoadmapItem = ({ lesson, index, selected, onSelect, onStart }) => {
  const isLocked = lesson.status === "locked";
  const isReward = lesson.status === "reward";
  const canStart = !isLocked;
  const startLabel = isLocked ? "잠금" : isReward ? "보상 확인" : "시작";

  const handleSelect = () => {
    onSelect?.(lesson);
  };

  const handleStart = () => {
    onStart?.(lesson);
  };

  return (
    <S.RoadmapItem $status={lesson.status} $index={index} $selected={selected}>
      <S.StepButton type="button" $status={lesson.status} $selected={selected} onClick={handleSelect} aria-label={`${lesson.title} 선택`}>
        <S.StepBadge $status={lesson.status}>
          {lesson.badgeImage ? <img src={lesson.badgeImage} alt="보상 수령 완료" /> : lesson.badge}
        </S.StepBadge>
      </S.StepButton>

      {selected && (
        <S.LessonPopover $status={lesson.status} $index={index}>
          <S.LessonPopoverTitle>{lesson.title}</S.LessonPopoverTitle>
          <S.LessonPopoverDesc>{isLocked ? "앞 단계를 완료하면 열려요." : lesson.desc}</S.LessonPopoverDesc>
          <S.LessonStartButton type="button" disabled={!canStart} onClick={handleStart}>
            {startLabel}
          </S.LessonStartButton>
        </S.LessonPopover>
      )}
    </S.RoadmapItem>
  );
};

export default LearnRoadmapItem;