import React, { useState, useEffect } from "react";
import styled from "styled-components";
import theme from "../../styles/theme";

// ── 더미 데이터 — 백엔드 연동 시 제거 ────────────────────────────
const DUMMY_NOTIFICATIONS = [
  { id: 1, type: "수어",   color: "#eef0ff", textColor: "#4f6ef7", title: "오늘의 수어",      desc: "오늘의 수어는 '고맙습니다' 입니다.", time: "1시간 전",  badge: null },
  { id: 2, type: "%",    color: "#fff8ed", textColor: "#f5a623", title: "학습 진척도",     desc: "현재 진척도는 60% 입니다.",        time: "2시간 전",  badge: null },
  { id: 3, type: "♥",    color: "#fff0f0", textColor: "#f55",    title: "수어마스터",      desc: "회원님의 게시글을 좋아합니다.",     time: "5분 전",    badge: null },
  { id: 4, type: "댓",    color: "#fff8ed", textColor: "#f5a623", title: "이음선생",        desc: "회원님의 게시글에 댓글을 남겼습니다.", time: "12분 전", badge: 2 },
  { id: 5, type: "답",    color: "#eef0ff", textColor: "#4f6ef7", title: "댓글 답글",       desc: "회원님의 댓글에 답글이 달렸습니다.", time: "28분 전",  badge: null },
  { id: 6, type: "채팅",  color: "#edfbf4", textColor: "#2ecc71", title: "1:1 채팅 신청",   desc: "새로운 채팅 요청이 도착했습니다.",  time: "1시간 전",  badge: null },
  { id: 7, type: "복습",  color: "#f3f0ff", textColor: "#9b59b6", title: "복습 알림",       desc: "어제 학습한 단어를 다시 복습해보세요.", time: "4시간 전", badge: null },
  { id: 8, type: "팔로우", color: "#eef8ff", textColor: "#3498db", title: "달빛조각사",      desc: "회원님을 팔로우하기 시작했습니다.", time: "3시간 전",  badge: null },
];
// ────────────────────────────────────────────────────────────────

const TABS = ["모두", "교육", "커뮤니티"];

/* ── Styles ── */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999;
`;

const DropdownWrap = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 380px;
  max-height: 600px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.12);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 16px;
`;

const Title = styled.span`
  font-size: 20px;
  font-weight: 800;
  color: #1a1a2e;
`;

const ReadAllBtn = styled.button`
  font-size: 13px;
  font-weight: 600;
  color: #888;
  background: #f5f5f7;
  border: none;
  border-radius: 10px;
  padding: 6px 14px;
  cursor: pointer;
`;

const TabRow = styled.div`
  display: flex;
  gap: 4px;
  margin: 0 24px 16px;
  background: #f5f5f7;
  border-radius: 12px;
  padding: 4px;
`;

const TabBtn = styled.button`
  flex: 1;
  padding: 8px 0;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 700 : 500)};
  background: ${({ $active }) => ($active ? "#fff" : "transparent")};
  color: ${({ $active }) => ($active ? theme.PALETTE.primary.main : "#888")};
  cursor: pointer;
  transition: all 0.15s;
  box-shadow: ${({ $active }) => ($active ? "0 2px 8px rgba(0,0,0,0.08)" : "none")};
`;

const NotificationList = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 0 12px 12px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 4px; }
`;

const NotificationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.12s;

  &:hover { background: #f7f8fd; }
  & + & { border-top: 1px solid #f5f5f7; }
`;

const IconWrap = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const IconBox = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${({ $bg }) => $bg};
  color: ${({ $color }) => $color};
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Badge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: ${theme.PALETTE.primary.main};
  color: #fff;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotifContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const NotifTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #1a1a2e;
  margin-bottom: 2px;
`;

const NotifDesc = styled.div`
  font-size: 12px;
  color: #888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const NotifTime = styled.div`
  font-size: 11px;
  color: #bbb;
  flex-shrink: 0;
`;

const EmptyMsg = styled.div`
  text-align: center;
  padding: 40px 0;
  font-size: 14px;
  color: #bbb;
`;

/* ── Component ── */

const NotificationDropdown = ({ onClose, onCountChange }) => {
  const [activeTab, setActiveTab] = useState("모두");

  // ── 더미 데이터 초기화 — 백엔드 연동 시 [] 로 변경 후 아래 fetch 주석 해제 ──
  const [notifications, setNotifications] = useState(DUMMY_NOTIFICATIONS);
  // ────────────────────────────────────────────────────────────────────────────

  // ── 백엔드 연동 시 아래 주석 해제 ────────────────────────────────────────────
  // useEffect(() => {
  //   const fetchNotifications = async () => {
  //     try {
  //       const res = await fetch("http://localhost:10000/api/notifications", {
  //         credentials: "include",
  //       });
  //       const data = await res.json();
  //       setNotifications(data); // [{ id, type, color, textColor, title, desc, time, badge }]
  //     } catch {}
  //   };
  //   fetchNotifications();
  // }, []);
  // ────────────────────────────────────────────────────────────────────────────

  // 알림 개수 변경될 때마다 부모에 전달
  useEffect(() => {
    onCountChange?.(notifications.length);
  }, [notifications, onCountChange]);

  const handleReadAll = () => {
    setNotifications([]);
    // ── 백엔드 연동 시 아래 주석 해제 ──────────────────────────────
    // await fetch("http://localhost:10000/api/notifications/read-all", {
    //   method: "PUT", credentials: "include",
    // });
    // ────────────────────────────────────────────────────────────────
  };

  const handleReadOne = (id) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
    // ── 백엔드 연동 시 아래 주석 해제 ──────────────────────────────
    // await fetch(`http://localhost:10000/api/notifications/${id}/read`, {
    //   method: "PUT", credentials: "include",
    // });
    // ────────────────────────────────────────────────────────────────
  };

  return (
    <>
      <Overlay onClick={onClose} />
      <DropdownWrap>
        <Header>
          <Title>알림</Title>
          {notifications.length > 0 && (
            <ReadAllBtn onClick={handleReadAll}>모두 읽음</ReadAllBtn>
          )}
        </Header>

        <TabRow>
          {TABS.map((tab) => (
            <TabBtn key={tab} $active={activeTab === tab} onClick={() => setActiveTab(tab)}>
              {tab}
            </TabBtn>
          ))}
        </TabRow>

        <NotificationList>
          {notifications.length === 0 ? (
            <EmptyMsg>새로운 알림이 없습니다.</EmptyMsg>
          ) : (
            notifications.map((n) => (
              <NotificationItem key={n.id} onClick={() => handleReadOne(n.id)}>
                <IconWrap>
                  <IconBox $bg={n.color} $color={n.textColor}>{n.type}</IconBox>
                  {n.badge && <Badge>{n.badge}</Badge>}
                </IconWrap>
                <NotifContent>
                  <NotifTitle>{n.title}</NotifTitle>
                  <NotifDesc>{n.desc}</NotifDesc>
                </NotifContent>
                <NotifTime>{n.time}</NotifTime>
              </NotificationItem>
            ))
          )}
        </NotificationList>
      </DropdownWrap>
    </>
  );
};

export default NotificationDropdown;
