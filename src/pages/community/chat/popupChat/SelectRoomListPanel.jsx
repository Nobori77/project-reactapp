import React, { useState } from "react";
import S from "../ChatStyle";
import { useChatContext } from "../../context/ChatContext";

const chatIconUrl =
  "https://www.figma.com/api/mcp/asset/b4896850-6051-457c-b680-087b71fd7760";

const FILTER_TABS = ["라이브 채팅방", "팔로우 한 유저", "요청"];

const LIVE_ROOMS = [
  { id: 1, name: "수어 학습 질문방", count: 84 },
  { id: 2, name: "수어 학습 질문방", count: 0 },
  { id: 3, name: "수어 학습 질문방", count: 0 },
  { id: 4, name: "수어 학습 질문방", count: 0 },
  { id: 5, name: "수어 학습 질문방", count: 0 },
];

const FOLLOW_USERS = [
  { id: 1, name: "ㅇㅇㅇ님" },
  { id: 2, name: "ㅇㅇㅇ님" },
  { id: 3, name: "ㅇㅇㅇ님" },
  { id: 4, name: "ㅇㅇㅇ님" },
];

const REQUEST_USERS = [
  { id: 1, name: "ㅇㅇㅇ님" },
  { id: 2, name: "ㅇㅇㅇ님" },
  { id: 3, name: "ㅇㅇㅇ님" },
];

const SelectRoomListPanel = () => {
  const { popupSelectCurrentFilter, updateSelectFilter, handleSelectRoom } =
    useChatContext();
  const [activeRoom, setActiveRoom] = useState(LIVE_ROOMS[0]?.id ?? null);
  const [activeFilter, setActiveFilter] = useState(popupSelectCurrentFilter);

  const handleFilterChange = (tab) => {
    setActiveFilter(tab);
    updateSelectFilter(tab);
  };

  const currentUsers =
    activeFilter === "팔로우 한 유저" ? FOLLOW_USERS : REQUEST_USERS;

  return (
    <S.SelectLeftPanel>
      <S.PanelTop>
        <S.PanelHeader>
          <S.PanelLabel>라이브 채팅방</S.PanelLabel>
          <S.SelectCountBadge>247</S.SelectCountBadge>
        </S.PanelHeader>
        <S.Divider />
        {activeFilter === "라이브 채팅방" ? (
          <S.RoomList>
            {LIVE_ROOMS.map((room) => (
              <S.RoomItem
                key={room.id}
                $active={activeRoom === room.id}
                onClick={() => {
                  setActiveRoom(room.id);
                  handleSelectRoom(room);
                }}
              >
                <S.RoomItemLeft>
                  <S.RoomIconBox>
                    <img src={chatIconUrl} alt="" />
                  </S.RoomIconBox>
                  <S.RoomMetaCol>
                    <S.RoomNameText>{room.name}</S.RoomNameText>
                    <S.LiveRow>
                      <S.SelectLiveDot />
                      <S.SelectLiveLabel>라이브</S.SelectLiveLabel>
                    </S.LiveRow>
                  </S.RoomMetaCol>
                </S.RoomItemLeft>
                <S.RoomCountText>{room.count}명</S.RoomCountText>
              </S.RoomItem>
            ))}
          </S.RoomList>
        ) : (
          <S.SelectUserList>
            {currentUsers.map((user) => (
              <S.SelectUserItem key={user.id}>
                <S.UserAvatarBox />
                <S.SelectUserNameText>{user.name}</S.SelectUserNameText>
              </S.SelectUserItem>
            ))}
          </S.SelectUserList>
        )}
      </S.PanelTop>

      <S.FilterTabsRow>
        {FILTER_TABS.map((tab) => (
          <S.FilterTab
            key={tab}
            $active={activeFilter === tab}
            onClick={() => handleFilterChange(tab)}
          >
            {tab}
          </S.FilterTab>
        ))}
      </S.FilterTabsRow>
    </S.SelectLeftPanel>
  );
};

export default SelectRoomListPanel;
