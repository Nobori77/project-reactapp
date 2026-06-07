import ReactDOM from "react-dom";
import styled from "styled-components";
import { useChatContext, VIEW, SCREEN } from "../context/ChatContext";
import FloatingChatButton from "./FloatingChatButton";
import SideChat from "../chat/sideChat/SideChat";
import PopupChatScreen from "../chat/popupChat/PopupChatScreen";
import PopupChatRoomSelect from "../chat/popupChat/PopupChatRoomSelect";
import CreateChatRoomModal from "../chat/createChatRoom/CreateChatRoomModal";

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  overflow-y: auto;
`;

const SideChatWrapper = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 100;
`;

const GlobalChatFloat = () => {
  const { chatRoomDTO, view, screen, isLoading } = useChatContext();

  return ReactDOM.createPortal(
    <>
      {!isLoading && view === null && chatRoomDTO !== null && (
        <FloatingChatButton />
      )}

      {view === VIEW.SIDE && (
        <SideChatWrapper>
          <SideChat />
        </SideChatWrapper>
      )}

      {view === VIEW.POPUP && screen === SCREEN.CREATE && (
        <PopupOverlay>
          <CreateChatRoomModal />
        </PopupOverlay>
      )}

      {view === VIEW.POPUP && screen === SCREEN.UPDATE && (
        <PopupOverlay>
          <CreateChatRoomModal mode="update" />
        </PopupOverlay>
      )}

      {view === VIEW.POPUP && screen === SCREEN.ROOM && (
        <PopupOverlay>
          <PopupChatScreen />
        </PopupOverlay>
      )}

      {view === VIEW.POPUP && screen === SCREEN.LIST && (
        <PopupOverlay>
          <PopupChatRoomSelect />
        </PopupOverlay>
      )}
    </>,
    document.body,
  );
};

export default GlobalChatFloat;
