import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faComments,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import theme from "../../../../styles/theme";
import { useChatContext } from "../../context/ChatContext";
import { PageBg } from "../ChatStyle";
import { getChatRoomInfo, insertChatRoom } from "../../communityApi/chatApi";

// ─── Popup ───────────────────────────────────────────────────────────────────

const ChatRoomCreatePopup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 800px;
`;

// ─── Top Bar ──────────────────────────────────────────────────────────────────

const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TitlePill = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: ${theme.PALETTE.primary.main};
  border-radius: 100px; /* radius.pill - TODO: add to theme */
  padding: 12px 20px;
`;

const TitleIconWrap = styled.div`
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.PALETTE.white};
  font-size: 26px;
`;

const TitleTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const TitleMain = styled.p`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h8};
  color: ${theme.PALETTE.white};
  margin: 0;
  letter-spacing: -0.4px;
`;

const TitleSub = styled.p`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.white};
  margin: 0;
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.GRAYSCALE[8]};
  border: none;
  border-radius: 6px; /* TODO: add sm radius to theme */
  padding: 11px 12px;
  cursor: pointer;
  color: ${theme.TEXT_COLOR.basic};
  font-size: 16px;
`;

// ─── Form Card ────────────────────────────────────────────────────────────────

const FormCard = styled.div`
  background: ${theme.PALETTE.white};
  border-radius: 20px; /* radius.card - TODO: add to theme */
  padding: 20px 60px 60px;
  display: flex;
  flex-direction: column;
`;

const SectionLabel = styled.p`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h12};
  color: ${theme.PALETTE.primary.main};
  margin: 0 0 8px;
  letter-spacing: -0.2px;
`;

const FormInputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const FormBottomArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

// ─── Field Group ──────────────────────────────────────────────────────────────

const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const FieldTitleRow = styled.div`
  display: flex;
  align-items: center;
`;

const FieldLabel = styled.span`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 20px;
  letter-spacing: -0.24px;
`;

const RequiredMark = styled.span`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.PALETTE.primary.main};
`;

const OptionalLabel = styled.span`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h12};
  color: ${theme.GRAYSCALE[9]};
  letter-spacing: -0.2px;
  margin-left: 4px;
`;

// ─── Input / Textarea ─────────────────────────────────────────────────────────

const InputField = styled.input`
  width: 100%;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px; /* radius.input - TODO: add to theme */
  padding: 12px 24px;
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

const TextareaField = styled.textarea`
  width: 100%;
  height: 100px;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px; /* radius.input - TODO: add to theme */
  padding: 12px 24px;
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

// ─── Tag Input ────────────────────────────────────────────────────────────────

const TagInputWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
  width: 100%;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px; /* radius.input - TODO: add to theme */
  padding: 10px 24px;
  box-sizing: border-box;
  min-height: 46px;
  cursor: text;

  &:focus-within {
    border-color: ${theme.PALETTE.primary.main};
  }
`;

const TagBadge = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  background: ${theme.PALETTE.primary.extraLight};
  color: ${theme.PALETTE.primary.main};
  border-radius: 100px; /* radius.pill - TODO: add to theme */
  padding: 2px 10px;
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.medium};
  font-size: ${theme.FONT_SIZE.h11};
`;

const TagRemoveBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  color: ${theme.PALETTE.primary.main};
  font-size: 10px;
  display: flex;
  align-items: center;
  line-height: 1;
`;

const InlineTagInput = styled.input`
  border: none;
  outline: none;
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  flex: 1;
  min-width: 120px;
  background: transparent;
  line-height: 22px;
  padding: 0;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }
`;

// ─── Divider ─────────────────────────────────────────────────────────────────

const Divider = styled.hr`
  border: none;
  border-top: 1px solid ${theme.GRAYSCALE[8]};
  margin: 20px 0 4px;
  width: 100%;
`;

// ─── Max Users ────────────────────────────────────────────────────────────────

const MaxUsersRow = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

const MaxUsersInput = styled.input`
  width: 172px;
  flex-shrink: 0;
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 8px; /* radius.input - TODO: add to theme */
  padding: 12px 24px;
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.TEXT_COLOR.basic};
  line-height: 22px;
  letter-spacing: -0.28px;
  box-sizing: border-box;
  outline: none;

  &::placeholder {
    color: ${theme.GRAYSCALE[9]};
  }

  &:focus {
    border-color: ${theme.PALETTE.primary.main};
  }

  &:disabled {
    background: ${theme.GRAYSCALE[10]};
    cursor: not-allowed;
  }
`;

const UnlimitRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const UnlimitText = styled.p`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  line-height: 22px;
  letter-spacing: -0.28px;
  white-space: nowrap;
`;

// ─── Toggle ───────────────────────────────────────────────────────────────────

const ToggleTrack = styled.div`
  position: relative;
  width: 40px;
  height: 22px;
  border-radius: 100px;
  background: ${({ $on }) =>
    $on ? theme.PALETTE.primary.main : theme.GRAYSCALE[8]};
  cursor: pointer;
  transition: background 0.2s;
  flex-shrink: 0;
`;

const ToggleThumb = styled.div`
  position: absolute;
  top: 3px;
  left: ${({ $on }) => ($on ? "21px" : "3px")};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: ${theme.PALETTE.white};
  transition: left 0.2s;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
`;

// ─── Upload Area ──────────────────────────────────────────────────────────────

const UploadArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 165px;
  width: 100%;
  background: ${theme.GRAYSCALE[10]};
  border: 2px dashed ${theme.GRAYSCALE[8]};
  border-radius: 8px; /* radius.input - TODO: add to theme */
  padding: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

const UploadIconWrap = styled.div`
  font-size: 28px;
  color: ${theme.GRAYSCALE[9]};
`;

const UploadMainText = styled.p`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h10};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  text-align: center;
`;

const UploadSubText = styled.p`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[9]};
  margin: 0;
  text-align: center;
`;

const UploadBtnWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const UploadBtn = styled.button`
  background: ${theme.PALETTE.white};
  border: 1px solid ${theme.GRAYSCALE[8]};
  border-radius: 10px; /* radius.sm - TODO: add to theme */
  padding: 8px 30px;
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h11};
  color: ${theme.GRAYSCALE[9]};
  cursor: pointer;
  white-space: nowrap;
`;

const HiddenFileInput = styled.input`
  display: none;
`;

const ThumbnailPreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 8px; /* radius.input - TODO: add to theme */
  object-fit: cover;
  border: 1px solid ${theme.GRAYSCALE[8]};
`;

// ─── Error Text ───────────────────────────────────────────────────────────────

const ErrorText = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: ${theme.FONT_WEIGHT.regular};
  font-size: ${theme.FONT_SIZE.h12};
  color: #e53e3e;
  margin: 2px 0 0;
  letter-spacing: -0.2px;
`;

// ─── Submit ───────────────────────────────────────────────────────────────────

const SubmitArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 32px;
`;

const SubmitBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  background: ${theme.PALETTE.primary.main};
  border: none;
  border-radius: 8px; /* radius.input - TODO: add to theme */
  padding: 10px 80px;
  width: 288px;
  cursor: pointer;
`;

const SubmitBtnIcon = styled.div`
  font-size: 18px;
  color: ${theme.PALETTE.white};
`;

const SubmitBtnText = styled.span`
  font-family: "Pretendard", sans-serif; /* TODO: add font family to theme */
  font-weight: ${theme.FONT_WEIGHT.bold};
  font-size: ${theme.FONT_SIZE.h9};
  color: ${theme.PALETTE.white};
  white-space: nowrap;
`;

// ─── Component ────────────────────────────────────────────────────────────────

const CreateChatRoomModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      chatRoomName: "",
      chatRoomDetail: "",
      chatRoomLimit: "",
    },
  });

  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [isUnlimited, setIsUnlimited] = useState(true);
  const [thumbnailFile, setThumbnailFile] = useState(null);
  const [thumbnailPreview, setThumbnailPreview] = useState(null);
  const fileInputRef = useRef(null);

  // 프로바이더
  const { closeCreateRoomPopup, createChatRoom } = useChatContext();

  const handleTagKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim() && tags.length < 5) {
      e.preventDefault();
      setTags((prev) => [...prev, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setThumbnailFile(file);
    setThumbnailPreview(URL.createObjectURL(file));
  };

  const handleUploadAreaClick = () => {
    fileInputRef.current?.click();
  };

  const handleCreateRoom = async (formData) => {
    const chatRoomRequestDTO = {
      chatRoomName: formData.chatRoomName,
      chatRoomType: "그룹",
      chatRoomProfile: thumbnailFile ? thumbnailFile.name : "default.jpg",
      chatRoomDetail: formData.chatRoomDetail,
      chatRoomLimit: isUnlimited ? 100 : Number(formData.chatRoomLimit),
    };

    // 채팅방 생성
    const chatRoomId = await insertChatRoom(chatRoomRequestDTO);

    // 채팅방 정보 불러오기
    const chatRoomDTO = await getChatRoomInfo(chatRoomId);

    // 프로바이더에 정보 전달
    createChatRoom(chatRoomDTO);
  };

  const S = {
    PageBg,
  };

  return (
    <S.PageBg>
      <ChatRoomCreatePopup>
        <TopBar>
          <TitlePill>
            <TitleIconWrap>
              <FontAwesomeIcon icon={faComments} />
            </TitleIconWrap>
            <TitleTextGroup>
              <TitleMain>새로운 채팅방 만들기</TitleMain>
              <TitleSub>수어 학습 커뮤니티에 새 공간을 만들어보세요</TitleSub>
            </TitleTextGroup>
          </TitlePill>
          <CloseBtn onClick={closeCreateRoomPopup} aria-label="닫기">
            <FontAwesomeIcon icon={faXmark} />
          </CloseBtn>
        </TopBar>

        <FormCard>
          <SectionLabel>기본 정보</SectionLabel>

          <FormInputsArea>
            <FieldGroup>
              <FieldTitleRow>
                <FieldLabel>방 이름</FieldLabel>
                <RequiredMark>*</RequiredMark>
              </FieldTitleRow>
              <InputField
                type="text"
                placeholder="이름을 입력해주세요"
                {...register("chatRoomName", {
                  required: "방 이름을 입력해주세요",
                })}
              />
              {errors.chatRoomName && (
                <ErrorText>{errors.chatRoomName.message}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldTitleRow>
                <FieldLabel>방 소개</FieldLabel>
                <RequiredMark>*</RequiredMark>
              </FieldTitleRow>
              <TextareaField
                placeholder="방 소개를 입력해주세요"
                {...register("chatRoomDetail", {
                  required: "방 소개를 입력해주세요",
                })}
              />
              {errors.chatRoomDetail && (
                <ErrorText>{errors.chatRoomDetail.message}</ErrorText>
              )}
            </FieldGroup>

            <FieldGroup>
              <FieldTitleRow>
                <FieldLabel>태그</FieldLabel>
              </FieldTitleRow>
              <TagInputWrap>
                {tags.map((tag, i) => (
                  <TagBadge key={i}>
                    #{tag}
                    <TagRemoveBtn
                      onClick={() => handleRemoveTag(i)}
                      aria-label="태그 삭제"
                    >
                      <FontAwesomeIcon icon={faXmark} />
                    </TagRemoveBtn>
                  </TagBadge>
                ))}
                {tags.length < 5 && (
                  <InlineTagInput
                    placeholder={
                      tags.length === 0 ? "태그 입력 후 Enter, 최대 5개" : ""
                    }
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleTagKeyDown}
                  />
                )}
              </TagInputWrap>
            </FieldGroup>
          </FormInputsArea>

          <Divider />

          <SectionLabel>채팅방 설정</SectionLabel>

          <FormBottomArea>
            <FieldGroup>
              <FieldTitleRow>
                <FieldLabel>최대 참여 인원</FieldLabel>
                <RequiredMark>*</RequiredMark>
              </FieldTitleRow>
              <MaxUsersRow>
                <MaxUsersInput
                  type="number"
                  placeholder="인원수 입력"
                  {...register("chatRoomLimit", {
                    validate: (value) =>
                      isUnlimited || value !== "" || "인원수를 입력해주세요",
                  })}
                  disabled={isUnlimited}
                />
                {errors.chatRoomLimit && (
                  <ErrorText>{errors.chatRoomLimit.message}</ErrorText>
                )}
                <UnlimitRow>
                  <ToggleTrack
                    $on={isUnlimited}
                    onClick={() => setIsUnlimited((prev) => !prev)}
                    role="switch"
                    aria-checked={isUnlimited}
                  >
                    <ToggleThumb $on={isUnlimited} />
                  </ToggleTrack>
                  <UnlimitText>제한 없음 (최대 100명)</UnlimitText>
                </UnlimitRow>
              </MaxUsersRow>
            </FieldGroup>

            <FieldGroup>
              <FieldTitleRow>
                <FieldLabel>대표 썸네일</FieldLabel>
                <OptionalLabel>(선택)</OptionalLabel>
              </FieldTitleRow>
              <UploadArea onClick={handleUploadAreaClick}>
                <HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png"
                  onChange={handleFileChange}
                />
                {thumbnailPreview ? (
                  <ThumbnailPreview
                    src={thumbnailPreview}
                    alt="썸네일 미리보기"
                  />
                ) : (
                  <>
                    <UploadIconWrap>
                      <FontAwesomeIcon icon={faArrowUpFromBracket} />
                    </UploadIconWrap>
                    <UploadMainText>
                      파일을 드래그하거나 클릭해서 첨부하세요
                    </UploadMainText>
                    <UploadSubText>
                      JPG, PNG 지원 · 파일당 최대 10MB
                    </UploadSubText>
                    <UploadBtnWrap>
                      <UploadBtn type="button">이미지 첨부</UploadBtn>
                    </UploadBtnWrap>
                  </>
                )}
              </UploadArea>
            </FieldGroup>
          </FormBottomArea>

          <SubmitArea>
            {/* 채팅방 생성 버튼 */}
            <SubmitBtn type="button" onClick={handleSubmit(handleCreateRoom)}>
              <SubmitBtnIcon>
                <FontAwesomeIcon icon={faComments} />
              </SubmitBtnIcon>
              <SubmitBtnText>채팅방 만들기</SubmitBtnText>
            </SubmitBtn>
          </SubmitArea>
        </FormCard>
      </ChatRoomCreatePopup>
    </S.PageBg>
  );
};

export default CreateChatRoomModal;
