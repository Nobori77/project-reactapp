import { LIST_FILTER } from "../../context/ChatContext";

// 사이드 채팅 하단 탭 — 세 컴포넌트(List/Ongoing/Request) 가 공통 사용
export const SIDE_TABS = [
  { key: LIST_FILTER.LIVE, label: "모든 채팅방" },
  { key: LIST_FILTER.ONGOING, label: "채팅중인 방" },
  { key: LIST_FILTER.REQUEST, label: "요청" },
];
