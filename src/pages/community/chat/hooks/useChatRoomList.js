import { useState, useEffect, useRef } from "react";
import { getChatRooms } from "../../communityApi/chatApi";

const useChatRoomList = (externalRefreshKey = 0) => {
  const [rooms, setRooms] = useState([]);
  const [page, setPage] = useState(1);
  const [fetchKey, setFetchKey] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef(null);

  const pageRef = useRef(1);
  const prevExternalKeyRef = useRef(externalRefreshKey);

  // page 바뀔 때 ref 동기화
  useEffect(() => {
    pageRef.current = page;
  }, [page]);

  // 외부 refreshKey 변경 감지 → 조건부 트리거
  useEffect(() => {
    if (prevExternalKeyRef.current === externalRefreshKey) return;
    prevExternalKeyRef.current = externalRefreshKey;

    setRooms([]);

    if (pageRef.current !== 1) {
      setPage(1); // page 변경 → fetch effect 트리거
    } else {
      setFetchKey((k) => k + 1); // page 이미 1 → fetchKey 변경으로 트리거
    }
  }, [externalRefreshKey]);

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    getChatRooms(page)
      .then((data) => {
        if (cancelled) return;
        const newRooms = (data.rooms ?? []).map(
          ({ id, chatRoomName, chatRoomDetail, chatRoomUsers, chatRoomProfile }) => ({
            id,
            chatRoomName,
            chatRoomDetail,
            chatRoomUsers: chatRoomUsers ?? 0,
            isLive: true,
            chatRoomProfile: chatRoomProfile ?? null,
          })
        );
        setRooms((prev) => (page === 1 ? newRooms : [...prev, ...newRooms]));
        setHasMore(page < (data.totalPages ?? 1));
      })
      .catch((err) => {
        if (!cancelled) console.error("채팅방 목록 불러오기 실패:", err);
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [page, fetchKey]);

  useEffect(() => {
    if (isLoading || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setPage((p) => p + 1);
      },
      { threshold: 0.5 },
    );

    const el = loaderRef.current;
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [isLoading, hasMore]);

  return { rooms, isLoading, hasMore, loaderRef };
};

export default useChatRoomList;
