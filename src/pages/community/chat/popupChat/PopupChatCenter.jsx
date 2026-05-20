import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import S from "../ChatStyle";
import chatImozi from "../../assets/chat/chat_imozi.svg";
import chatImageUpload from "../../assets/chat/chat_image_upload.svg";
import chatShare from "../../assets/chat/chat_share.svg";
import chatSueo from "../../assets/chat/chat_sueo.svg";

const TextInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-family: inherit;
  font-size: 11px;
  color: inherit;
`;

const PopupChatCenter = ({ messages, onSendMessage }) => {
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText.trim());
    setInputText("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <S.CenterPanel>
      <S.MessagesArea>
        {messages.map((msg) =>
          !msg.chatIsMe ? (
            <S.OtherMsgWrap key={msg.id}>
              <S.MsgAvatar src={msg.userProfile} alt={msg.userNickname} />
              <S.MsgContentCol>
                <S.SenderName>{msg.userNickname}</S.SenderName>
                <S.MsgTimeRow>
                  <S.OtherBubble>
                    <S.OtherBubbleText>{msg.chatContent}</S.OtherBubbleText>
                  </S.OtherBubble>
                  <S.MsgTime>{msg.chatCreateAt}</S.MsgTime>
                </S.MsgTimeRow>
              </S.MsgContentCol>
            </S.OtherMsgWrap>
          ) : (
            <S.MyMsgRow key={msg.id}>
              <S.MsgTime>{msg.chatCreateAt}</S.MsgTime>
              <S.MyBubble>
                <S.MyBubbleText>{msg.chatContent}</S.MyBubbleText>
              </S.MyBubble>
            </S.MyMsgRow>
          ),
        )}
        <div ref={messagesEndRef} />
      </S.MessagesArea>
      <S.InputArea>
        <S.AttachRow>
          <S.AttachIcons>
            <S.AttachIcon src={chatImozi} alt="이모지" />
            <S.AttachIcon src={chatImageUpload} alt="이미지" />
            <S.AttachIcon src={chatShare} alt="링크" />
          </S.AttachIcons>
          <S.AttachDivider />
          <S.AttachIcon src={chatSueo} alt="수어" />
        </S.AttachRow>
        <S.InputRow>
          <S.TextInputBox>
            <TextInput
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="메시지 입력..."
            />
          </S.TextInputBox>
          <S.SendBtn onClick={handleSend}>➤</S.SendBtn>
        </S.InputRow>
      </S.InputArea>
    </S.CenterPanel>
  );
};

export default PopupChatCenter;
