import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./communityHeaderStyle";

const CommunityHeader = () => {
  const navigate = useNavigate();
  const [pinnedNotices, setPinnedNotices] = useState([]);

  useEffect(() => {
    const fetchPinnedNotices = async () => {
      try {
        const res = await fetch(
          "http://localhost:10000/api/notice?offset=0&size=10",
          { credentials: "include" },
        );
        const data = await res.json();
        const pinned = (data.notices || [])
          .filter((n) => n.noticePinned === 1)
          .slice(0, 2);
        setPinnedNotices(pinned);
      } catch {}
    };
    fetchPinnedNotices();
  }, []);

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
            {pinnedNotices.map(({ id, noticeTitle }) => (
              <S.EventItem
                key={id}
                onClick={() => navigate(`/customservice/notice/${id}`)}
              >
                <S.NoticeTag>중요</S.NoticeTag>
                <S.EventText>{noticeTitle}</S.EventText>
              </S.EventItem>
            ))}
          </S.RightSection>
        </S.MainSection>
      </S.Inner>
    </S.Container>
  );
};

export default CommunityHeader;
