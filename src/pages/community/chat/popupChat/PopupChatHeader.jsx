import React from "react";
import S from "../ChatStyle";
import { ThumbnailBox } from "../chatComponents/chatComponentStyle";
import defaultProfileImg from "../../assets/chat/chat_default_profile.svg";
import { useChatContext } from "../../context/ChatContext";

const liveVectorUrl =
  "https://www.figma.com/api/mcp/asset/79378b34-81dd-4aef-bc8a-2e9814e941b7";
const downloadIconUrl =
  "https://www.figma.com/api/mcp/asset/20ea9338-907b-444f-9835-2f74b2aa1a24";
const minimizeVUrl =
  "https://www.figma.com/api/mcp/asset/d026f38b-0832-4a94-b0cc-5bbc2206c401";
const closeVUrl =
  "https://www.figma.com/api/mcp/asset/633d41af-e1e1-462a-acec-b1534e4d49ad";

const PopupChatHeader = ({ profileUrl }) => {
  const { handleLeave, minimizeChat, closeChat } = useChatContext();

  return (
    <S.Header>
      <S.HeaderLeft>
        <S.ProfileArea>
          <ThumbnailBox
            src={profileUrl || defaultProfileImg}
            alt="채팅방 프로필"
            onError={(e) => {
              e.target.src = defaultProfileImg;
            }}
          />
          <S.RoomInfo>
            <S.RoomTitle>학습 일상 대화방</S.RoomTitle>
            <S.RoomSubText>00명 참여 중</S.RoomSubText>
          </S.RoomInfo>
        </S.ProfileArea>
        <S.MessageStatus>
          <S.LiveBadge>
            <S.LiveIcon src={liveVectorUrl} alt="" />
            <S.LiveText>LIVE</S.LiveText>
          </S.LiveBadge>
          <S.TodayMsgRow>
            <img src={downloadIconUrl} alt="" />
            <S.TodayMsgText>오늘 00개 메시지</S.TodayMsgText>
          </S.TodayMsgRow>
        </S.MessageStatus>
      </S.HeaderLeft>
      <S.HeaderRight>
        <S.LeaveBtn onClick={handleLeave}>채팅방 나가기</S.LeaveBtn>
        <S.MinimizeBtn onClick={minimizeChat}>
          <img src={minimizeVUrl} alt="최소화" />
        </S.MinimizeBtn>
        <S.CloseBtn onClick={closeChat}>
          <img src={closeVUrl} alt="닫기" />
        </S.CloseBtn>
      </S.HeaderRight>
    </S.Header>
  );
};

export default PopupChatHeader;
