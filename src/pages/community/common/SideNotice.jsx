import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import theme from "../../../styles/theme";
import {
  hoverStyle,
  sideCardStyle,
  sideComponentStyle,
  sideHeaderStyle,
} from "../communityStyle";
import { h10Bold } from "../../../styles/common";
import { BORDER_STYLE } from "../constants";

const formatDate = (iso) => {
  const d = new Date(iso);
  return `${d.getMonth() + 1}/${d.getDate()}`;
};

export default function SideNotice() {
  const navigate = useNavigate();
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch(
          "http://localhost:10000/api/notice?offset=0&size=4",
          { credentials: "include" },
        );
        const data = await res.json();
        setNotices(data.notices || []);
      } catch {}
    };
    fetchNotices();
  }, []);

  return (
    <Card>
      <Title>공지사항</Title>
      <NoticeList>
        {notices.map(({ id, noticeTitle, noticeCreateAt }) => (
          <NoticeItem
            key={id}
            onClick={() => navigate(`/customservice/notice/${id}`)}
          >
            <ItemLeft>
              <Tag>공</Tag>
              <NoticeTitle>{noticeTitle}</NoticeTitle>
            </ItemLeft>
            <DateText>{formatDate(noticeCreateAt)}</DateText>
          </NoticeItem>
        ))}
      </NoticeList>
      <MoreLink onClick={() => navigate("/customservice/notice")}>
        공지 더 보기
      </MoreLink>
    </Card>
  );
}

const Card = styled.div`
  background: ${theme.PALETTE.white};
  display: flex;
  flex-direction: column;
  ${sideCardStyle}
  width: 100%;
  box-sizing: border-box;
`;

const Title = styled.p`
  ${sideHeaderStyle}
  ${h10Bold}
  color: ${theme.TEXT_COLOR.basic};
`;

const NoticeList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

// 각각의 것들
const NoticeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  background: ${theme.GRAYSCALE[10]};
  border-radius: 8px;
  width: 100%;
  box-sizing: border-box;
  border: ${BORDER_STYLE.original};
  ${sideComponentStyle}
  ${hoverStyle}
`;

const ItemLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
`;

const Tag = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px 5px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 4px;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.bold};
  color: ${theme.PALETTE.white};
  line-height: ${theme.FONT_LINE.h12};
  white-space: nowrap;
`;

const NoticeTitle = styled.p`
  margin: 0;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${theme.FONT_SIZE.h11};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.TEXT_COLOR.basic};
  line-height: ${theme.FONT_LINE.h11};
`;

const DateText = styled.p`
  margin: 0;
  flex-shrink: 0;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[9]};
  line-height: ${theme.FONT_LINE.h12};
  text-align: right;
  white-space: nowrap;
`;

const MoreLink = styled.p`
  margin: 0;
  text-align: center;
  font-size: ${theme.FONT_SIZE.h12};
  font-weight: ${theme.FONT_WEIGHT.regular};
  color: ${theme.GRAYSCALE[7]};
  cursor: pointer;
  &:hover {
    color: ${theme.TEXT_COLOR.basic};
  }
`;
