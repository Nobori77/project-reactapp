import * as S from "./communityHeaderStyle";

const CommunityHeader = () => {
  console.log("헤더 빌드");
  return (
    <S.Container>
      <S.BlobGreen />
      <S.BlobBlue />
      <S.BlobOrange />
      <S.BlobYellow />
      <S.BlobPurple />
      <S.BlobPink />
      <S.Inner>
        <S.MainSection>
          <S.LeftSection>
            <S.TitleBlack>함께 배우고 성장하는</S.TitleBlack>
            <S.Title>이음 커뮤니티</S.Title>
            <S.Description>
              청각장애인, 수어 학습자, 교사 모두가 함께하는 따뜻한 소통
              공간입니다.
            </S.Description>
            <S.StatisticsSection>
              <S.StatItem>
                <S.StatNumber>78</S.StatNumber>
                <S.StatLabel>전체 회원</S.StatLabel>
              </S.StatItem>
              <S.StatItem>
                <S.StatNumber>18</S.StatNumber>
                <S.StatLabel>오늘 게시글</S.StatLabel>
              </S.StatItem>
              <S.StatItem>
                <S.StatNumber>21</S.StatNumber>
                <S.StatLabel>지금 접속중</S.StatLabel>
              </S.StatItem>
            </S.StatisticsSection>
          </S.LeftSection>

          <S.RightSection>
            <S.EventItem>
              <S.EventText>이달의 베스트 작성자 모집 중</S.EventText>
            </S.EventItem>
            <S.EventItem>
              <S.EventText>수어 챌린지 이벤트</S.EventText>
            </S.EventItem>
            <S.EventItem>
              <S.EventText>자격시험 응시료 한시적 할인 (최대 80%)</S.EventText>
            </S.EventItem>
          </S.RightSection>
        </S.MainSection>
      </S.Inner>
    </S.Container>
  );
};

export default CommunityHeader;
