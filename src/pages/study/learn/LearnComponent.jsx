import { LearnPage as S } from "./style";
import { useNavigate } from "react-router-dom";
import { useLearn } from "./hooks/useLearn";


const LearnComponent = ({ onStartQuiz, onChangeView }) => {
  const { data, loading, error, selectedEduId, words, selectedWord, selectedVideo,
    handleSelectEdu, handleSelectWord, handleFinishWordStudy,} = useLearn();

  const navigate = useNavigate();

return (
    <S.Page>
      <S.ContentWrap>
        <S.SideMenu>
          {data.sideMenus.map((menu) => (
            <S.SideButton
              key={menu.id}
              type="button"
              $active={menu.active}
              onClick={() => {
                if (menu.id === "letter") {
                  onChangeView?.("alphabet");
                  return;
                }
                if (menu.id === "signal") {
                  onStartQuiz?.("sos", 1);
                  return;
                }
                if (menu.id === "profile") {
                  navigate("/mypage/learning");
                }
              }}
            >
              <span>{menu.icon}</span>
              {menu.label}
            </S.SideButton>
          ))}
        </S.SideMenu>

        <S.Main>
          <S.TopLine>
            <S.Streak>
              <span>🔥</span>
              {data.streak}
            </S.Streak>
          </S.TopLine>

          <S.ChapterHeader>
            <strong>{data.chapter.title}</strong>
            <button type="button">{data.chapter.guideLabel}</button>
          </S.ChapterHeader>

          {loading && <S.StatusText>학습 정보를 불러오는 중이에요.</S.StatusText>}
          {error && <S.StatusText>{error}</S.StatusText>}

          <S.RoadMap>
            {data.lessons.map((lesson) => (
              <S.LessonItem key={lesson.id} $status={lesson.status}>
                <S.LessonCircle $status={lesson.status}>{lesson.icon}</S.LessonCircle>
                <S.LessonCard $status={lesson.status}>
                  <div>
                    <S.LessonTitle $status={lesson.status}>{lesson.title}</S.LessonTitle>
                    <S.LessonDesc $status={lesson.status}>{lesson.desc}</S.LessonDesc>
                  </div>

                  {lesson.quizType ? (
                    <S.LessonStartButton
                      type="button"
                      onClick={() => onStartQuiz?.(lesson.quizType, lesson.quizId)}
                    >
                      {lesson.buttonText}
                    </S.LessonStartButton>
                  ) : (
                    <S.LessonButton
                      type="button"
                      $status={lesson.status}
                      onClick={() => handleSelectEdu(lesson.id)}
                    >
                      {lesson.buttonText}
                    </S.LessonButton>
                  )}
                </S.LessonCard>
              </S.LessonItem>
            ))}
          </S.RoadMap>

          {selectedEduId && words.length === 0 && !loading && (
            <S.StatusText>등록된 단어가 없습니다.</S.StatusText>
          )}

          {words.length > 0 && (
            <S.WordPanel>
              {words.map((word) => (
                <S.WordCard key={word.id} type="button" onClick={() => handleSelectWord(word)}>
                  <S.WordTitle>{word.wordsTitle}</S.WordTitle>
                  <S.WordDesc>{word.wordsDetail}</S.WordDesc>
                </S.WordCard>
              ))}
            </S.WordPanel>
          )}

          {selectedVideo && (
            <S.VideoPanel>
              <S.VideoTitle>{selectedVideo.eduVideoTitle}</S.VideoTitle>
              <S.VideoDesc>{selectedVideo.eduVideoDetail}</S.VideoDesc>
              <S.Video controls>
                <source src={selectedVideo.eduVideoUrl} type="video/mp4" />
              </S.Video>
            </S.VideoPanel>
          )}

          {selectedWord && (
            <S.FinishButton type="button" onClick={handleFinishWordStudy}>
              학습 완료
            </S.FinishButton>
          )}

          <S.NextChapter type="button">
            <strong>{data.nextChapter.title}</strong>
            <span>{data.nextChapter.desc}</span>
          </S.NextChapter>
        </S.Main>

        <S.QuestPanel>
          <S.QuestTitle>오늘의 퀘스트</S.QuestTitle>

          {data.quests.map((quest) => (
            <S.QuestItem key={quest.id}>
              <S.QuestIcon>{quest.icon}</S.QuestIcon>
              <div>
                <S.QuestName>{quest.title}</S.QuestName>
                <S.QuestBar>
                  <span style={{ width: `${(quest.current / quest.total) * 100}%` }} />
                </S.QuestBar>
              </div>
              <S.QuestCount>
                {quest.current} / {quest.total}
              </S.QuestCount>
              <S.RewardIcon>🎁</S.RewardIcon>
            </S.QuestItem>
          ))}
        </S.QuestPanel>
      </S.ContentWrap>

      <S.ProgressArea>
        <div>
          <S.ProgressTitle>{data.chapter.progressTitle}</S.ProgressTitle>
          <S.ProgressDesc>{data.chapter.progressDesc}</S.ProgressDesc>
        </div>

        <S.ProgressBar>
          <span style={{ width: `${data.chapter.percent}%` }} />
        </S.ProgressBar>

        <S.Percent>{data.chapter.percent}%</S.Percent>

        <S.ExpBox>
          <span>획득 EXP</span>
          <strong>+{data.chapter.exp}</strong>
        </S.ExpBox>
      </S.ProgressArea>
    </S.Page>
  );
};


export default LearnComponent;
