import React from "react";
import * as S from "./style.js";
import { parseMessage } from "./parseMessage.js";


export const BotMessage = ({ text, time, showFeedback, buttonLabel, buttonPath, children }) => (
  <S.BotMessageWrap>
    <S.BotAvatar>
      <img src="/assets/image/chatbot/chatbotIcon2.svg" alt="" style={{ width: "28px", height: "auto" }} />
    </S.BotAvatar>
    <S.BotMessageInner>
      <S.BotName>이음 도우미</S.BotName>
      <S.BotBubble>{text}</S.BotBubble>
      {buttonLabel && buttonPath && (
        <S.QuickReplyRow>
          <S.QuickReplyBtn onClick={() => window.location.href = buttonPath}>
            {buttonLabel}
          </S.QuickReplyBtn>
        </S.QuickReplyRow>
      )}
      {children}
      {time && <S.BotTime>{time}</S.BotTime>}
    </S.BotMessageInner>
  </S.BotMessageWrap>
);

export const UserMessage = ({ text, time }) => (
  <S.UserMessageWrap>
    <S.UserBubble>{text}</S.UserBubble>
    <S.UserTime>{time}</S.UserTime>
  </S.UserMessageWrap>
);