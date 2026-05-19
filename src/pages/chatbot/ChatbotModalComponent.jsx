import React, { useState, useRef, useEffect } from "react";
import * as S from "./style.js";

const CATEGORIES = [
  { id: "account", label: "계정 / 로그인",   desc: "로그인 문제, 비밀번호 변경 등",      emoji: "👤" },
  { id: "report",  label: "신고 / 불편신고", desc: "부적절한 콘텐츠, 사용자 신고",       emoji: "🚨" },
  { id: "etc",     label: "기타 문의",       desc: "기타 궁금한 사항",                  emoji: "💬" },
];

const QUICK_REPLIES = {
  account: ["계정 / 로그인 안되시나요?", "비밀번호 분실", "소셜 로그인 오류"],
  report:  ["부적절한 콘텐츠 신고", "사용자 신고", "기타 불편신고"],
  etc:     ["서비스 이용 방법", "자주 묻는 질문", "기타 문의"],
};

const timeNow = () => {
  const d = new Date();
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, "0")}`;
};

const Feedback = () => (
  <S.FeedbackRow>
    <S.FeedbackBtn>👍 도움이 됐어요</S.FeedbackBtn>
    <S.FeedbackBtn>👎 아쉬워요</S.FeedbackBtn>
  </S.FeedbackRow>
);

const BotMessage = ({ text, time, children }) => (
  <S.BotMessageWrap>
    <S.BotAvatar>
      <img src="/assets/image/chatbot/chatbotIcon2.svg" alt="" style={{ width: "28px", height: "auto" }} />
    </S.BotAvatar>
    <S.BotMessageInner>
      <S.BotName>이음 도우미</S.BotName>
      <S.BotBubble>{text}</S.BotBubble>
      {children}
      {time && <S.BotTime>{time}</S.BotTime>}
    </S.BotMessageInner>
  </S.BotMessageWrap>
);

const ChatbotModal = ({ onClose }) => {
  const [step, setStep]                         = useState("category");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [messages, setMessages]                 = useState([]);
  const [input, setInput]                       = useState("");
  const [loading, setLoading]                   = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const selectCategory = (cat) => {
    setSelectedCategory(cat);
    setStep("chat");
    setMessages([{
      type: "bot",
      text: `${cat.label} 관련해서 도와드릴게요!\n아래 항목을 선택하거나 직접 질문해주세요.`,
      time: timeNow(),
      quickReplies: QUICK_REPLIES[cat.id],
    }]);
  };

  const sendMessage = async (text) => {
    const msg = text || input.trim();
    if (!msg) return;
    setInput("");

    setMessages((prev) => [...prev, { type: "user", text: msg, time: timeNow() }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: msg, category: selectedCategory?.id }),
      });
      const data = await res.json();
      setMessages((prev) => [...prev, {
        type: "bot", text: data.reply, time: timeNow(), showFeedback: true,
      }]);
    } catch {
      setMessages((prev) => [...prev, {
        type: "bot", text: "오류가 발생했어요. 잠시 후 다시 시도해주세요.", time: timeNow(),
      }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.ModalWrap>
      {/* 헤더 */}
      <S.ModalHeader>
        <S.HeaderLeft>
          <img src="/assets/image/chatbot/chatbotIcon2.svg" alt="" style={{ width: "28px", height: "auto" }} />
          <S.HeaderTitle>이음 도우미</S.HeaderTitle>
        </S.HeaderLeft>
        <S.HeaderBtnRow>
          <S.HeaderBtn>－</S.HeaderBtn>
          <S.HeaderBtn>□</S.HeaderBtn>
          <S.HeaderBtn $red onClick={onClose}>✕</S.HeaderBtn>
        </S.HeaderBtnRow>
      </S.ModalHeader>

      {/* 카테고리 — 봇 말풍선 형식 */}
      {step === "category" && (
        <S.CategoryArea>
          <BotMessage text="안녕하세요! 이음 도우미입니다.&#10;무엇을 도와드릴까요?" time={timeNow()}>
            <S.CategoryList style={{ marginTop: "10px" }}>
              {CATEGORIES.map((cat) => (
                <S.CategoryBtn key={cat.id} onClick={() => selectCategory(cat)}>
                  <S.CategoryIcon>{cat.emoji}</S.CategoryIcon>
                  <div>
                    <S.CategoryLabel>{cat.label}</S.CategoryLabel>
                    <S.CategoryDesc>{cat.desc}</S.CategoryDesc>
                  </div>
                </S.CategoryBtn>
              ))}
            </S.CategoryList>
          </BotMessage>
          <div ref={bottomRef} />
        </S.CategoryArea>
      )}

      {/* 채팅 */}
      {step === "chat" && (
        <S.ChatArea>
          {messages.map((msg, i) =>
            msg.type === "bot" ? (
              <BotMessage key={i} text={msg.text} time={msg.time}>
                {msg.quickReplies && (
                  <S.QuickReplyRow>
                    {msg.quickReplies.map((q, j) => (
                      <S.QuickReplyBtn key={j} onClick={() => sendMessage(q)}>{q}</S.QuickReplyBtn>
                    ))}
                  </S.QuickReplyRow>
                )}
                {msg.showFeedback && <Feedback />}
              </BotMessage>
            ) : (
              <S.UserMessageWrap key={i}>
                <S.UserBubble>{msg.text}</S.UserBubble>
                <S.UserTime>{msg.time}</S.UserTime>
              </S.UserMessageWrap>
            )
          )}
          {loading && <BotMessage text="답변을 불러오는 중..." />}
          <div ref={bottomRef} />
        </S.ChatArea>
      )}

      {/* 입력창 */}
      <S.InputArea>
        <S.ChatInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="메시지를 입력..."
        />
        <S.SendBtn onClick={() => sendMessage()}>
          <span style={{ color: "#fff", fontSize: "16px" }}>▶</span>
        </S.SendBtn>
      </S.InputArea>
    </S.ModalWrap>
  );
};

export default ChatbotModal;
