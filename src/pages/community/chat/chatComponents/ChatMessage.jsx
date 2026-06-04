import React from "react";
import * as S from "./chatMessageStyle";

const ChatMessage = ({
  isMine = false,
  message = "메세지 메세지",
  time = "14:02",
  username = "ㅇㅇ",
  profileImage = null,
}) => {
  if (isMine) {
    return (
      <S.MessageRow $isMine={true}>
        <S.BubbleRow>
          <S.TimeText>{time}</S.TimeText>
          <S.Bubble $isMine={true}>
            <S.MessageText $isMine={true}>{message}</S.MessageText>
          </S.Bubble>
        </S.BubbleRow>
      </S.MessageRow>
    );
  }

  return (
    <S.MessageRow $isMine={false}>
      {profileImage ? (
        <S.ProfileImage src={profileImage} alt={username} />
      ) : (
        <S.ProfilePlaceholder />
      )}
      <S.MessageArea>
        <S.Username>{username}</S.Username>
        <S.BubbleRow>
          <S.Bubble $isMine={false}>
            <S.MessageText $isMine={false}>{message}</S.MessageText>
          </S.Bubble>
          <S.TimeText>{time}</S.TimeText>
        </S.BubbleRow>
      </S.MessageArea>
    </S.MessageRow>
  );
};

export default ChatMessage;
