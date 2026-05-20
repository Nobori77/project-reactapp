import React, { useState, useEffect, useRef, useCallback } from "react";
import { colors } from "../constants";
import S from "./ChatStyle";
import PopupChatHeader from "./popupChat/PopupChatHeader";
import PopupParticipantList from "./popupChat/PopupParticipantList";
import PopupChatCenter from "./popupChat/PopupChatCenter";
import PopupRoomInfoPanel from "./popupChat/PopupRoomInfoPanel";
import PopupUserInfoPanel from "./popupChat/PopupUserInfoPanel";
import { useChatContext } from "../context/ChatContext";
import useAuthStore from "../../../store/authStore";
import {
  getChatMessages,
  getChatRoomUsers,
  getChatRoomInfo,
} from "../communityApi/chatApi";

const WS_BASE = "ws://localhost:10000/ws/chat";

const toDisplayUser = (userDTO) => ({
  email: userDTO.userEmail,
  id: userDTO.id,
  name: userDTO.userNickname,
  role: "학습자",
  level: Math.max(1, Math.floor(userDTO.userExp / 100)),
  avatar: userDTO.userProfile,
  iconProfile: false,
  online: false,
});

const TAGS = [
  { label: "#수어기초", bg: colors.primaryLight, color: colors.primary },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#일상회화", bg: colors.liveBg, color: colors.live },
  { label: "#일상수어", bg: colors.liveBg, color: colors.live },
  { label: "#질문환영", bg: "#fff3e8", color: "#ff8004" },
  { label: "#초보환영", bg: "#e1beec", color: "#b63fde" },
];

const formatTime = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
};

let wsMessageSeq = 0;
const makeWsMessageId = (msg) =>
  `ws-${msg.userId}-${msg.chatCreateAt}-${++wsMessageSeq}`;

const toDisplayMessage = (msg, currentUserId) => {
  const {
    id,
    chatContent,
    chatCreateAt,
    chatType,
    userNickname = "사용자",
    userProfile = "default.jpg",
    chatRoomId,
    chatIsMe,
    userId,
  } = msg;

  return {
    id: id ?? makeWsMessageId(msg),
    chatContent,
    chatCreateAt: formatTime(chatCreateAt),
    chatType,
    userNickname,
    userProfile,
    chatRoomId,
    // WS 메시지는 chatIsMe를 직접 제공, REST 초기 로딩은 userId 비교로 판별
    chatIsMe: chatIsMe ?? (currentUserId != null && userId === currentUserId),
  };
};

const PopupChatScreen = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [chatRoomInfo, setChatRoomInfo] = useState(null);
  const { activeChatRoom } = useChatContext();
  const { user } = useAuthStore();
  const wsRef = useRef(null);

  const chatRoomId = activeChatRoom?.id;
  const currentUserId = user?.id;

  useEffect(() => {
    if (!chatRoomId) return;
    getChatRoomInfo(chatRoomId)
      .then(setChatRoomInfo)
      .catch((err) => console.error("채팅방 정보 불러오기 실패:", err));
  }, [chatRoomId]);

  useEffect(() => {
    if (!chatRoomId) return;
    getChatRoomUsers(chatRoomId)
      .then((data) => setUsers(data.map(toDisplayUser)))
      .catch((err) => console.error("유저 목록 불러오기 실패:", err));
  }, [chatRoomId]);

  useEffect(() => {
    if (!chatRoomId) return;

    let ws;
    let cancelled = false;

    const init = async () => {
      try {
        const data = await getChatMessages(chatRoomId);
        if (cancelled) return;
        const sorted = [...data].sort(
          (a, b) => new Date(a.chatCreateAt) - new Date(b.chatCreateAt),
        );
        setMessages(sorted.map((msg) => toDisplayMessage(msg, currentUserId)));
      } catch (err) {
        if (!cancelled) console.error("메시지 불러오기 실패:", err);
      }

      if (cancelled) return;

      ws = new WebSocket(`${WS_BASE}/${chatRoomId}`);
      wsRef.current = ws;

      ws.onmessage = (event) => {
        try {
          const msg = JSON.parse(event.data);
          setMessages((prev) => [
            ...prev,
            toDisplayMessage(msg, currentUserId),
          ]);
        } catch (e) {
          console.error("WS 메시지 파싱 실패:", e);
        }
      };

      ws.onerror = (err) => console.error("WebSocket 오류:", err);
    };

    init();

    return () => {
      cancelled = true;
      ws?.close();
      wsRef.current = null;
    };
  }, [chatRoomId, currentUserId]);

  const handleSendMessage = useCallback(
    (content) => {
      const text = content.trim();
      if (!text || !chatRoomId) return;
      const ws = wsRef.current;
      if (!ws || ws.readyState !== WebSocket.OPEN) {
        console.warn("WebSocket이 아직 연결되지 않았습니다.");
        return;
      }
      ws.send(JSON.stringify({ chatContent: text, chatType: "텍스트" }));
    },
    [chatRoomId],
  );

  const handleUserClick = (user) => {
    setSelectedUser((prev) => (prev?.email === user.email ? null : user));
  };

  return (
    <S.PageBg>
      <S.Popup>
        <PopupChatHeader chatRoomInfo={chatRoomInfo} />
        <S.Body>
          <PopupParticipantList
            users={users}
            selectedUserEmail={selectedUser?.email}
            onUserClick={handleUserClick}
          />
          {/* 채팅 메세지 나열되는 곳 */}
          <PopupChatCenter
            messages={messages}
            onSendMessage={handleSendMessage}
          />
          <S.RightPanel>
            {selectedUser ? (
              <PopupUserInfoPanel
                user={selectedUser}
                onClose={() => setSelectedUser(null)}
              />
            ) : (
              <PopupRoomInfoPanel chatRoomInfo={chatRoomInfo} tags={TAGS} />
            )}
          </S.RightPanel>
        </S.Body>
      </S.Popup>
    </S.PageBg>
  );
};

export default PopupChatScreen;
