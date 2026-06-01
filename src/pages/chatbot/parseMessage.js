export const parseMessage = (text) => {
  const buttonRegex = /\[버튼:([^\]:]+):([^\]]+)\]/g;
  const buttons = [];
  let cleanText = text;
  let match;

  while ((match = buttonRegex.exec(text)) !== null) {
    buttons.push({ label: match[1], path: match[2] });
    cleanText = cleanText.replace(match[0], "");
  }

  return { cleanText: cleanText.trim(), buttons };
};