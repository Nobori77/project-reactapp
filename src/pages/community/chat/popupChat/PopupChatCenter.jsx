import React from "react";
import S from "../ChatStyle";

const emojiIconUrl =
  "https://www.figma.com/api/mcp/asset/7326d7ec-d93d-4233-a0cb-6b4c1a81433e";
const imageIconUrl =
  "https://www.figma.com/api/mcp/asset/0e43611f-4878-4e38-a9b5-3429810282f1";
const linkIconUrl =
  "https://www.figma.com/api/mcp/asset/02cbb637-a056-4524-a973-dd1de4c0bc6d";
const signIconUrl =
  "https://www.figma.com/api/mcp/asset/e4fac756-efc7-444e-8b51-66b882636ee0";

const PopupChatCenter = ({ messages }) => (
  <S.CenterPanel>
    <S.MessagesArea>
      {messages.map((msg) =>
        msg.type === "other" ? (
          <S.OtherMsgWrap key={msg.id}>
            <S.MsgAvatar src={msg.avatar} alt={msg.sender} />
            <S.MsgContentCol>
              <S.SenderName>{msg.sender}</S.SenderName>
              <S.MsgTimeRow>
                <S.OtherBubble>
                  <S.OtherBubbleText>{msg.content}</S.OtherBubbleText>
                </S.OtherBubble>
                <S.MsgTime>{msg.time}</S.MsgTime>
              </S.MsgTimeRow>
            </S.MsgContentCol>
          </S.OtherMsgWrap>
        ) : (
          <S.MyMsgRow key={msg.id}>
            <S.MsgTime>{msg.time}</S.MsgTime>
            <S.MyBubble>
              <S.MyBubbleText>{msg.content}</S.MyBubbleText>
            </S.MyBubble>
          </S.MyMsgRow>
        ),
      )}
    </S.MessagesArea>
    <S.InputArea>
      <S.AttachRow>
        <S.AttachIcons>
          <S.AttachIcon src={emojiIconUrl} alt="이모지" />
          <S.AttachIcon src={imageIconUrl} alt="이미지" />
          <S.AttachIcon src={linkIconUrl} alt="링크" />
        </S.AttachIcons>
        <S.AttachDivider />
        <S.AttachIcon src={signIconUrl} alt="수어" />
      </S.AttachRow>
      <S.InputRow>
        <S.TextInputBox>
          <S.InputPlaceholder>메시지 입력...</S.InputPlaceholder>
        </S.TextInputBox>
        <S.SendBtn>➤</S.SendBtn>
      </S.InputRow>
    </S.InputArea>
  </S.CenterPanel>
);

export default PopupChatCenter;
