import React from "react";
import S from "./ChatStyle";
import SelectRoomListPanel from "./popupChat/SelectRoomListPanel";
import SelectOngoingPanel from "./popupChat/SelectOngoingPanel";
import { useChatContext } from "../context/ChatContext";

const minimizeVUrl =
  "https://www.figma.com/api/mcp/asset/44666575-71f6-416e-a884-3df8697b8a6e";
const closeVUrl =
  "https://www.figma.com/api/mcp/asset/4b5d23e6-44b7-4a45-8a8f-9ed805ef3301";

const PopupChatRoomSelect = () => {
  const { handleSelectMinimize, handleSelectClose } = useChatContext();

  return (
    <S.SelectPageBg>
      <S.SelectPopup>
        <S.SelectHeader>
          <S.HeaderTitle>채팅방 선택</S.HeaderTitle>
          <S.HeaderBtns>
            <S.MinimizeBtn onClick={handleSelectMinimize}>
              <img src={minimizeVUrl} alt="최소화" />
            </S.MinimizeBtn>
            <S.SelectCloseBtn onClick={handleSelectClose}>
              <img src={closeVUrl} alt="닫기" />
            </S.SelectCloseBtn>
          </S.HeaderBtns>
        </S.SelectHeader>

        <S.SelectBody>
          <SelectRoomListPanel />
          <SelectOngoingPanel />
        </S.SelectBody>
      </S.SelectPopup>
    </S.SelectPageBg>
  );
};

export default PopupChatRoomSelect;
