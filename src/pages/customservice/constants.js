export const BREADCRUMB_MAP = {
  "/customService/notice":  "공지사항",
  "/customService/inquire": "1:1 문의",
  "/customService/result":  "문의 결과",
  "/customService/privacy": "개인정보 처리방침",
};

export const TAB_MENU_ITEMS = [
  { label: "고객지원",         isCategory: true },
  { label: "공지사항",         path: "/customService/notice" },
  { label: "1:1 문의",        path: "/customService/inquire" },
  { label: "문의 결과",        path: "/customService/result" },
  { label: "개인정보 처리방침", path: "/customService/privacy" },
];

export const API = {
  AUTH_CHECK: "http://localhost:10000/api/auth/status",
  AUTH_ME:    "http://localhost:10000/api/auth/me",
};