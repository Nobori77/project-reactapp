import React, { useState } from "react";

import ProfileCard from "../components/ProfileCard";
import StudyStatusCard from "../components/StudyStatusCard";
import AttendanceCard from "../components/AttendanceCard";
import QuickMenuCard from "../components/QuickMenuCard";
import LevelGuideModal from "../components/LevelGuideModal";

import StudySummaryCard from "./components/StudySummaryCard";

import S from "./style";

const learningStatusList = [
  {
    title: "수어 기초 회화",
    progress: "70%",
    recentTime: "2시간 전",
  },
  {
    title: "점자 수어",
    progress: "30%",
    recentTime: "어제",
  },
  {
    title: "모스부호 기초",
    progress: "90%",
    recentTime: "3일전",
  },
  {
    title: "실생활 수어",
    progress: "100%",
    recentTime: "1주일전",
  },
];

const learningResultList = [
  {
    title: "수어 중급",
    score: "7/10",
    time: "3분20초",
    accuracy: "70%",
  },
  {
    title: "점자 읽기",
    score: "8/10",
    time: "1분45초",
    accuracy: "80%",
  },
  {
    title: "실생활 모스부호",
    score: "1/10",
    time: "5분",
    accuracy: "10%",
  },
  {
    title: "수어 기초",
    score: "10/10",
    time: "4분20초",
    accuracy: "100%",
  },
];

const MyPageLearningComponent = () => {
  const [isLevelModalOpen, setIsLevelModalOpen] = useState(false);

  const openLevelModal = () => {
    setIsLevelModalOpen(true);
  };

  const closeLevelModal = () => {
    setIsLevelModalOpen(false);
  };

  return (
    <>
      <S.LearningLayout>
        {/* 왼쪽 영역 */}
        <S.LearningLeftArea>
          <ProfileCard onLevelClick={openLevelModal} />

          {/* 학습현황 */}
          <S.LearningSection>
            <S.LearningTitle>
              학습현황
            </S.LearningTitle>

            <S.LearningCardBox>
              <S.LearningHeader>
                <S.LearningHeaderText>
                  제목
                </S.LearningHeaderText>

                <S.LearningHeaderText>
                  진행도
                </S.LearningHeaderText>

                <S.LearningHeaderText>
                  최근 학습 시간
                </S.LearningHeaderText>
              </S.LearningHeader>

              {/* 학습 현황 목록 API 연동 예정 */}
              {learningStatusList.map((learning) => (
                <S.LearningRow key={learning.title}>
                  <S.LearningText>
                    {learning.title}
                  </S.LearningText>

                  <S.LearningText>
                    {learning.progress}
                  </S.LearningText>

                  <S.LearningText>
                    {learning.recentTime}
                  </S.LearningText>
                </S.LearningRow>
              ))}

              <S.LearningMoreButton type="button">
                더 보기 <span>→</span>
              </S.LearningMoreButton>
            </S.LearningCardBox>
          </S.LearningSection>

          {/* 학습결과 */}
          <S.LearningSection>
            <S.LearningTitle>
              학습결과
            </S.LearningTitle>

            <S.LearningCardBox>
              <S.LearningResultHeader>
                <S.LearningHeaderText>
                  제목
                </S.LearningHeaderText>

                <S.LearningHeaderText>
                  정답 수
                </S.LearningHeaderText>

                <S.LearningHeaderText>
                  소요시간
                </S.LearningHeaderText>

                <S.LearningHeaderText>
                  정답률
                </S.LearningHeaderText>
              </S.LearningResultHeader>

              {/* 학습 결과 목록 API 연동 예정 */}
              {learningResultList.map((result) => (
                <S.LearningResultRow key={result.title}>
                  <S.LearningText>
                    {result.title}
                  </S.LearningText>

                  <S.LearningText>
                    {result.score}
                  </S.LearningText>

                  <S.LearningText>
                    {result.time}
                  </S.LearningText>

                  <S.LearningText>
                    {result.accuracy}
                  </S.LearningText>
                </S.LearningResultRow>
              ))}

              <S.LearningMoreButton type="button">
                더 보기 <span>→</span>
              </S.LearningMoreButton>
            </S.LearningCardBox>
          </S.LearningSection>
        </S.LearningLeftArea>

        {/* 오른쪽 영역 */}
        <S.LearningRightArea>
          <StudySummaryCard />

          <StudyStatusCard />

          <AttendanceCard />

          <QuickMenuCard />
        </S.LearningRightArea>
      </S.LearningLayout>

      {isLevelModalOpen && (
        <LevelGuideModal onClose={closeLevelModal} />
      )}
    </>
  );
};

export default MyPageLearningComponent;