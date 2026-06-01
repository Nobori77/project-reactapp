import React from "react";
import * as S from "./style.js";

const ChatbotInput = ({ input, onChange, onSend }) => (
  <S.InputArea>
    <S.ChatInput
      value={input}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={(e) => e.key === "Enter" && onSend()}
      placeholder="메시지를 입력..."
    />
    <S.SendBtn onClick={onSend}>
      <span style={{ color: "#fff", fontSize: "16px", display: "block", transform: "translateX(1px) translateY(-1px)" }}>➤</span>
    </S.SendBtn>
  </S.InputArea>
);

export default ChatbotInput;