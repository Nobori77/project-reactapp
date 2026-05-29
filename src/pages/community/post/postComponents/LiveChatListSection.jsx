import React, { useEffect, useState } from "react";
import LiveChatCardCandidate1 from "../../chat/chatComponents/chatCardCandidate/LiveChatCardCandidate1.jsx";
import LiveChatCardCandidate1Skeleton from "../../chat/skeleton/LiveChatCardCandidate1Skeleton.jsx";
import { getChatRooms } from "../../communityApi/chatApi.js";
import { useChatContext } from "../../context/ChatContext";
import { LiveChatRow } from "../communityPostContainerStyle";
import { useSearchParams } from "react-router-dom";

const LiveChatListSection = () => {
  const { openChatRoom } = useChatContext();
  const [rooms, setRooms] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const keyword = searchParams.get("keyword") ?? "";

  let size = 3;
  if (keyword !== "" && keyword != null) {
    size = 6;
  }

  // 테스트
  console.log("입력 키워드: ", keyword);

  // 페이지 조절
  useEffect(() => {
    setCurrentPage(1);
  }, [keyword]);

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const data = await getChatRooms(currentPage, size, keyword);
        setRooms(data.rooms);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    load();
  }, [size, currentPage, keyword]);

  if (isLoading)
    return (
      <LiveChatRow>
        <LiveChatCardCandidate1Skeleton />
        <LiveChatCardCandidate1Skeleton />
        <LiveChatCardCandidate1Skeleton />
      </LiveChatRow>
    );

  // 검색을 한 경우

  return (
    <LiveChatRow>
      {rooms.map(({ id, ...roomData }) => (
        <LiveChatCardCandidate1
          key={id}
          {...roomData}
          onJoin={() => openChatRoom({ id, ...roomData })}
        />
      ))}
    </LiveChatRow>
  );
};

export default LiveChatListSection;
