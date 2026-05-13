import React from "react";
import S from "../ChatStyle";

const ONGOING_ROOMS = [
  {
    id: 1,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
  {
    id: 2,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
  {
    id: 3,
    name: "수어 학습 질문방",
    count: "00",
    time: "00:00",
    lastMsg: "마지막 메세ㅇㅇㅇㅇㅇㅇ지..",
  },
];

const SelectOngoingPanel = () => (
  <S.SelectRightPanel>
    <S.PanelHeader>
      <S.PanelLabel>진행중인 채팅방</S.PanelLabel>
      <S.SelectCountBadge>{ONGOING_ROOMS.length}</S.SelectCountBadge>
    </S.PanelHeader>
    <S.Divider />
    <S.OngoingRoomList>
      {ONGOING_ROOMS.map((room) => (
        <S.OngoingRoomItem key={room.id}>
          <S.OngoingProfileBox />
          <S.OngoingRoomInfo>
            <S.OngoingRoomTopRow>
              <S.OngoingRoomNameRow>
                <S.OngoingRoomName>{room.name}</S.OngoingRoomName>
                <S.OngoingRoomCount>{room.count}명</S.OngoingRoomCount>
              </S.OngoingRoomNameRow>
              <S.OngoingLastTime>{room.time}</S.OngoingLastTime>
            </S.OngoingRoomTopRow>
            <S.OngoingLastMsg>{room.lastMsg}</S.OngoingLastMsg>
          </S.OngoingRoomInfo>
        </S.OngoingRoomItem>
      ))}
    </S.OngoingRoomList>
  </S.SelectRightPanel>
);

export default SelectOngoingPanel;
