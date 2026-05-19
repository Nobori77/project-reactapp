import styled from "styled-components";

const PRIMARY = "#4359fc";

export const PageWrap = styled.div`
  min-height: 100vh;
  background: #f5f5f7;
  font-family: 'Pretendard', 'Noto Sans KR', sans-serif;
`;

export const Hero = styled.div`
  background: #fff;
  border-bottom: 1px solid #eee;
  padding: 48px 0 40px;
  text-align: center;
`;

export const HeroTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
  color: #111;
  margin: 0 0 8px;
  letter-spacing: -0.5px;
`;

export const HeroSub = styled.p`
  font-size: 13px;
  color: #888;
  margin: 0;
`;

export const ContentArea = styled.div`
  max-width: 480px;
  margin: 40px auto 80px;
  padding: 0 20px;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #eee;
  border-radius: 16px;
  padding: 36px 32px;
`;

export const ProviderBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  font-weight: 600;
  color: ${PRIMARY};
  background: #eef0ff;
  border: 1px solid #c5caff;
  border-radius: 20px;
  padding: 4px 14px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #111;
  margin-bottom: 20px;
  letter-spacing: -0.3px;
`;

export const SectionBlock = styled.div`
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #f0f0f0;

  &:last-of-type {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

export const BlockTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${PRIMARY};
  margin-bottom: 12px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #555;
  margin-bottom: 4px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 14px;
  border: 1.5px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  color: #111;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${PRIMARY};
  }

  &::placeholder {
    color: #bbb;
  }

  &:disabled {
    background: #f9f9f9;
    color: #aaa;
  }
`;

export const InlineRow = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`;

export const SmallBtn = styled.button`
  padding: 10px 14px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  border: none;
  background: ${({ $green }) => ($green ? "#03C75A" : PRIMARY)};
  color: #fff;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const StatusMsg = styled.div`
  font-size: 12px;
  color: ${({ $success }) => ($success ? "#03C75A" : "#e74c3c")};
  margin-top: 6px;
`;

export const SubmitBtn = styled.button`
  width: 100%;
  padding: 13px;
  background: ${PRIMARY};
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  margin-top: 8px;
  transition: opacity 0.15s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const ErrorMsg = styled.div`
  font-size: 13px;
  color: #e74c3c;
  text-align: center;
  margin-bottom: 12px;
`;
