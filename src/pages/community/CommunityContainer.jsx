import React from "react";
import { Link, Outlet } from "react-router-dom";
import { ContentArea, Page } from "./communityStyle";
import MainRightSide from "./common/MainRightSide";
import PostDetailPage from "./post/detail/PostDetailPage";

const users = [
  { userId: 1, userName: "홍길동" },
  { userId: 2, userName: "장보고" },
];

// 커뮤니티 가장 메인 영역
const CommunityContainer = () => {
  return (
    <>
      <div>
        <Page>
          <Link to={"/community/chat"}>실시간 채팅</Link>
          <Link to={"/community/post"}>게시글</Link>
          <ContentArea>
            {/* 좌측 메인 */}
            {/* 해당 부분이 아울렛으로 되어야 함 */}
            {/* 자식: 메인 영역, 실시간 채팅방 모음 영역 */}
            <Outlet />

            {/* 우측 사이드 바 정의 */}
            {/* 활동중 멤버, 공지사항, 사이드 채팅바 */}
            <MainRightSide />
          </ContentArea>

          {/* 포스트 디테일 임시 */}
          <PostDetailPage />
        </Page>
      </div>
      <div>
        지금 활동 중인 멤버
        {users.map((user) => (
          <div key={user.userId}>
            <Link to={`/community/profile/${user.userId}`}>
              {user.userName}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CommunityContainer;
