import React, { useState, useEffect } from "react";
import NoticeCard from "./NoticeCardComponent";
import * as S from "./style.js";

const NoticeSection = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const res = await fetch("http://localhost:10000/api/notice?offset=0&size=4", {
          credentials: "include",
        });
        const data = await res.json();
        setNotices(data.notices || []);
      } catch {}
    };
    fetchNotices();
  }, []);

  if (notices.length === 0) return null;

  return (
    <S.SectionWrap>
      <S.SectionHeader>
        <span>
          <img src="/assets/image/main/noticeIcon.svg" alt="" />
        </span>
        <S.SectionTitle>알려드려요</S.SectionTitle>
      </S.SectionHeader>

      <S.NoticeGrid>
        {notices.map((notice) => (
          <NoticeCard
            key={notice.id}
            id={notice.id}
            tag={notice.noticeCategory}
            title={notice.noticeTitle}
            date={notice.noticeCreateAt ? notice.noticeCreateAt.slice(0, 10).replaceAll("-", ".") : ""}
          />
        ))}
      </S.NoticeGrid>
    </S.SectionWrap>
  );
};

export default NoticeSection;
