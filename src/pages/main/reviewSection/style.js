import styled from "styled-components";

export const ReviewCard = styled.div`
  width: 380px;
  height: 220px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  text-align: left;
  flex-shrink: 0;
  overflow: hidden;
`;

export const StarRow = styled.div`
  display: flex;
  gap: 2px;

  img {
    width: 16px;
    height: 16px;
  }
`;

export const ReviewText = styled.p`
  font-size: 15px;
  color: #222;
  line-height: 1.65;
  margin: 0;
  flex: 1;
  white-space: pre-line;
  text-align: left;
`;

export const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  background: #ede9f5;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const ProfileName = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: #222;
`;

export const ProfileSub = styled.span`
  font-size: 12px;
  color: #888;
`;

export const SectionWrap = styled.div`
  width: 100%;
  background-color: #f0eff5;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 40px;
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 800;
  color: #111;
  margin: 0;
`;

export const SubTitle = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0;
`;

export const SliderWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const CardViewport = styled.div`
  width: calc(380px * 3 + 24px * 2);
  overflow: hidden;
`;

export const CardTrack = styled.div`
  display: flex;
  gap: 24px;
  transform: translateX(-${({ $offset }) => $offset}px);
  transition: ${({ $animated }) =>
    $animated ? "transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)" : "none"};
`;

export const ArrowBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid #ccc;
  background: #fff;
  cursor: pointer;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: opacity 0.2s;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }

  &:hover:not(:disabled) {
    background: #f5f5f5;
  }
`;

export const MoreButton = styled.button`
  display: block;
  margin: 32px auto 0;
  padding: 14px 36px;
  background: #fff;
  border: 2px solid #7c6fcd;
  border-radius: 999px;
  color: #7c6fcd;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: #7c6fcd;
    color: #fff;
  }
`;

export const PageWrap = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 24px;
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #555;

  &:hover {
    color: #000;
  }
`;

export const PageTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin: 0;
`;

export const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;