import React from "react";
import S from "../ChatStyle";
import { PopupThumbnailBox } from "../chatComponents/chatComponentStyle";
import defaultProfile from "../../assets/chat/chat_default_profile.svg";

const onlineDotUrl =
  "https://www.figma.com/api/mcp/asset/b33f6cd4-cc19-4c37-9250-813cb5dca21d";

const PopupParticipantList = ({ users, selectedUserId, onUserClick }) => (
  <S.LeftPanel>
    <S.ParticipantHeader>
      <S.ParticipantLabel>참여자</S.ParticipantLabel>
      <S.CountBadge>247</S.CountBadge>
    </S.ParticipantHeader>
    <S.Divider />
    <S.UserList>
      {users.map((user) => (
        <S.UserItem
          key={user.id}
          $selected={selectedUserId === user.id}
          onClick={() => onUserClick(user)}
        >
          <S.UserProfileRow>
            <S.AvatarWrap>
              <PopupThumbnailBox
                src={user.avatar || defaultProfile}
                alt={user.name}
                onError={(e) => {
                  e.target.src = defaultProfile;
                }}
              />
              {user.online && <S.OnlineDot src={onlineDotUrl} alt="" />}
            </S.AvatarWrap>
            <S.UserMeta>
              <S.UserNameText>{user.name}</S.UserNameText>
              <S.UserRoleText>{user.role}</S.UserRoleText>
            </S.UserMeta>
          </S.UserProfileRow>
          <S.LevelBadge>Lv.{user.level}</S.LevelBadge>
        </S.UserItem>
      ))}
    </S.UserList>
  </S.LeftPanel>
);

export default PopupParticipantList;
