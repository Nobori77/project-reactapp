export const colorsTemp = {
  // 키 컬러 (브랜드)
  primary: "#4359fc",
  primaryDark: "#0014a9",
  primaryLight: "#eef1ff",
  primaryMid: "#7b8fff",
  primaryFooter: "#4157ff",

  // 그래디언트
  gradientMain: "linear-gradient(162.3deg, #0014a9 0%, #4359fc 100%)",
  gradientCard: "linear-gradient(160.58deg, #4359fc 0%, #7b8fff 100%)",
  gradientProfile: "linear-gradient(169.69deg, #4359fc 0%, #6478fd 100%)",
  gradientAccessibility: "linear-gradient(90deg, #eef1ff 34%, #e8f9e9 100%)",

  // 텍스트
  textMain: "#333333",
  textSub: "#9ca3af",
  textWhite: "#ffffff",
  textWhiteSubtle: "rgba(255, 255, 255, 0.85)",

  // 컬러 배경 위 오버레이 (PostContent 헤더 태그 등)
  tagOnPrimary: "rgba(255, 255, 255, 0.2)",
  tagOnPrimaryBorder: "rgba(255, 255, 255, 0.4)",

  // 배경
  bgPage: "#f0f2f5",
  bgCard: "#ffffff",
  bgSection: "#f9fafb",
  bgThumbnail: "#f2f2f2",

  // 보더
  border: "#e5e7eb",
  footerDivider: "#42464c",
  footerSocialBorder: "#33373c",

  // 텍스트 확장
  textDark: "#4b5563",

  // 신고/차단 색상
  orange: "#ff8004",
  orangeBg: "#fff7ed",
  orangeDark: "#92400e",

  // 상태 색상
  live: "#129d1b",
  liveBg: "#e8f9e9",
  danger: "#f14141",
  accessibilitySign: "#4359fc",
  accessibilitySignBg: "#eef1ff",
  accessibilityRead: "#4dc953",
  accessibilityReadBg: "#e8f9e9",

  // 팝업 채팅방 전용
  purple: "#b63fde",
  purpleBg: "#e1beec",
  tagOrangeLightBg: "#fff3e8",
  dangerOverlay: "rgba(255, 80, 80, 0.5)",
  overlayWhite15: "rgba(255, 255, 255, 0.15)",
  bgPopupOverlay: "#8e8d8d",
};

export const fonts = {
  family: "'Pretendard', sans-serif",
  weight: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  size: {
    xs: "10px",
    sm: "12px",
    smMd: "13px",
    md: "14px",
    mdLg: "15px",
    base: "16px",
    lg: "18px",
    xl: "20px",
    xxl: "24px",
    xxxl: "28px",
  },
};

export const radius = {
  pill: "100px",
  card: "20px",
  button: "12px",
  input: "8px",
  sm: "10px",
};

export const shadows = {
  card: "0 8px 24px rgba(67, 89, 252, 0.12)",
  cardHover: "0 8px 24px rgba(67, 89, 252, 0.18)",
  float: "0 8px 24px rgba(67, 89, 252, 0.35)",
  floatHover: "0 12px 32px rgba(67, 89, 252, 0.45)",
};

export const layout = {
  headerHeight: "79px",
  breadcrumbHeight: "40px",
  sidebarWidth: "312px", // 3컬럼 영역
  cardMaxWidth: "984px", // 9컬럼 영역
  contentWidth: "1320px", // 12컬럼 가이드 전체 가로
  gridGap: "24px", // 컬럼 간 균등 간격
};
