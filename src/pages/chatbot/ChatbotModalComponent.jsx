import React, { useState, useRef, useEffect } from "react";
import * as S from "./style.js";
import { BotMessage, UserMessage } from "./ChatbotMessage.jsx";
import ChatbotCategory from "./ChatbotCategoryComponent.jsx";
import ChatbotInput from "./ChatbotInputComponent.jsx";
import { QUICK_REPLIES, timeNow } from "./constants.js";

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

  // 카테고리 선택 안했으면 step을 chat으로 전환
  if (step === "category") {
    setStep("chat");
  }

  setMessages((prev) => [...prev, { type: "user", text: msg, time: timeNow() }]);
  setLoading(true);

  try {
    const res = await fetch("/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg, category: selectedCategory?.id ?? "etc" }),
    });
    const data = await res.json();
    setMessages((prev) => [...prev, {
      type: "bot",
      text: data.reply,
      time: timeNow(),
      showFeedback: true,
      buttonLabel: data.buttonLabel,
      buttonPath: data.buttonPath,
      }]);
  } catch {
    setMessages((prev) => [...prev, {
      type: "bot", text: "오류가 발생했어요. 잠시 후 다시 시도해주세요.", time: timeNow(),
    }]);
  } finally {
    setLoading(false);
  }
}

  return (
    <S.ModalWrap>
      {/* 헤더 */}
      <S.ModalHeader>
        <S.HeaderLeft>
          <img src="/assets/image/chatbot/chatbotIcon2.svg" alt="" style={{ width: "28px", height: "auto" }} />
          <S.HeaderTitle>이음 도우미</S.HeaderTitle>
        </S.HeaderLeft>
        <S.HeaderBtnRow>
          <S.HeaderBtn $red onClick={onClose}>✕</S.HeaderBtn>
        </S.HeaderBtnRow>
      </S.ModalHeader>

      {/* 카테고리 */}
      {step === "category" && <ChatbotCategory onSelectCategory={selectCategory} />}

      {/* 채팅 */}
      {step === "chat" && (
        <S.ChatArea>
          {messages.map((msg, i) =>
            msg.type === "bot" ? (
              <BotMessage
                key={i}
                text={msg.text}
                time={msg.time}
                showFeedback={msg.showFeedback}
                buttonLabel={msg.buttonLabel}
                buttonPath={msg.buttonPath}
              >
                {msg.quickReplies && (
                  <S.QuickReplyRow>
                    {msg.quickReplies.map((q, j) => (
                      <S.QuickReplyBtn key={j} onClick={() => sendMessage(q)}>{q}</S.QuickReplyBtn>
                    ))}
                  </S.QuickReplyRow>
                )}
              </BotMessage>
            ) : (
              <UserMessage key={i} text={msg.text} time={msg.time} />
            )
          )}
          {loading && <BotMessage text="답변을 불러오는 중..." />}

          {/* 돌아가기 버튼 */}
          {!loading && messages.length > 0 && (
            <S.QuickReplyRow style={{ justifyContent: "center", margin: "10px 0" }}>
              <S.QuickReplyBtn onClick={() => {
                setStep("category");
                setMessages([]);
                setSelectedCategory(null);
              }}>
                🏠 처음으로 돌아가기
              </S.QuickReplyBtn>
            </S.QuickReplyRow>
          )}

          <div ref={bottomRef} />
        </S.ChatArea>
      )}

      {/* 입력창 */}
      <ChatbotInput input={input} onChange={setInput} onSend={sendMessage} />
    </S.ModalWrap>
  );
};

export default ChatbotModal;