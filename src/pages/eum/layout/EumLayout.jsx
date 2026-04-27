import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      <header>
        <nav style={{ display: 'flex', gap: '16px' }}>
          <Link to="/">홈</Link>
          <Link to="/exam/info/notice">시험</Link>
          <Link to="/study">학습</Link>
          <Link to="/community">커뮤니티</Link>
          <Link to="/mypage">마이페이지</Link>
          <Link to="/join">회원가입</Link>
          <Link to="/login">로그인</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>푸터</footer>
    </div>
  );
};

export default Layout;
