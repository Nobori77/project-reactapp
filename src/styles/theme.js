// UI / UX 가이드에 따른 디자인 토큰 정의
const theme = {};

// ─────────────────────────────────────────
// COLOR
// ─────────────────────────────────────────

// Brand Colors
theme.PALETTE = {
  primary: {
    light:      "#A7B5FF",  // Primary Light
    main:       "#4359FC",  // Primary
    dark:       "#0014A9",  // Primary Dark
    extraLight: "#EEF1FF",  // Extra Light Blue
  },
  secondary: {
    main:  "#129D1B",       // Secondary (green)
    light: "#AAE5AE",       // Secondary Light
  },
  third: {
    main:  "#B63FDE",       // Third (purple)
    light: "#E1BEEC",       // Third Light
  },
  warning: {
    main:  "#FF8004",       // Warning (orange)
    light: "#FFCE9F",       // Warning Light
  },
  fourth: {
    main:  "#FFCB38",       // Fourth (yellow)
    light: "#FFE086",       // Fourth Light
  },
  red:   "#F14141",         // Primary Red
  white: "#FFFFFF",
  black: "#222222",
};

// Gradient Colors
theme.GRADIENT = {
  lightBlue: "linear-gradient(135deg, #A7B5FF 0%, #4359FC 100%)",
  deepBlue:  "linear-gradient(135deg, #4359FC 0%, #0014A9 100%)",
  blue:      "linear-gradient(135deg, #5B6EFD 0%, #0014A9 100%)",
};

// Greyscale (0: 밝음 → 9: 어두움 / 10: 배경용 밝은 계열)
theme.GRAYSCALE = {
  0:  "#F2F2F2",
  1:  "#E6E6E6",
  2:  "#D9D9D9",
  3:  "#CCCCCC",
  4:  "#C0C0C0",
  5:  "#B3B3B3",
  6:  "#A6A6A6",
  7:  "#999999",
  8:  "#E5E7EB",
  9:  "#9CA3AF",
  10: "#F9FAFB",
};

// Text Colors
theme.TEXT_COLOR = {
  basic:     "#333333",
  primary:   "#4359FC",
  secondary: "#129D1B",
  warning:   "#FF8004",
};

// ─────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────

// h1~h13: 사이즈 기준 / FONT_WEIGHT와 조합하여 사용
// 예) fontSize: theme.FONT_SIZE.h9, fontWeight: theme.FONT_WEIGHT.bold
theme.FONT_SIZE = {
  h1:  "72px",   // Heading1
  h2:  "48px",   // Heading2
  h3:  "40px",   // Heading3
  h4:  "36px",   // Heading4
  h5:  "28px",   // Heading5
  h6:  "28px",   // Heading6
  h7:  "24px",   // Heading7  (bold / medium / regular)
  h8:  "20px",   // Heading8  (bold / medium)
  h9:  "16px",   // Heading9  (bold / medium / regular / light)
  h10: "14px",   // Heading10 (bold / medium / regular)
  h11: "12px",   // Heading11 (bold / medium / regular)
  h12: "10px",   // Heading12 (bold / regular)
  h13: "8px",    // Heading13 (bold)
};

theme.FONT_WEIGHT = {
  light:   "300",
  regular: "400",
  medium:  "500",
  bold:    "700",
};

// 행간
theme.FONT_LINE = {
  h1:  "80px",
  h2:  "56px",
  h3:  "51px",
  h4:  "51px",
  h5:  "40px",
  h6:  "40px",
  h7:  "32px",
  h8:  "28px",
  h9:  "24px",
  h10: "22px",
  h11: "20px",
  h12: "14px",
  h13: "11px",
};

export default theme;
