import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import theme from '../../styles/theme';
import { styles } from './style';

const Layout = () => {
  return (
    <div>
      <div>
        <header style={styles.header}>
          <nav style={styles.logoNav}>
            {/* 로고 */}
            <button>
              <Link to="/">
                <img src= '/assets/image/layout/logo.svg' alt='logo' style={{height:'28px'}}>
                </img>  
              </Link>
            </button>
            <nav style={{ display: 'flex', gap: '37px' }}>
              
              {/* 학습 페이지 이동 */}
              <button>
                <Link to="/study" style={styles.contentNav}>
                  학습
                </Link>
              </button>

              {/* 시험 페이지 이동 */}
              <button>
                <Link to="/exam/info/notice" style={styles.contentNav}>
                    시험
                </Link>
              </button>

              {/* 커뮤니티 페이지 이동 */}
              <button >
                <Link to="/community" style={styles.contentNav}>
                  커뮤니티
                </Link>
              </button>

              {/* 고객지원 페이지 이동 */}
              <button>
                <Link to="/customservice/notice" style={styles.contentNav}>
                  고객지원
                </Link>
              </button>
            </nav>
          </nav>

        
          <nav style={{
            marginLeft: 'auto', 
            display: 'flex', 
            gap: '12px',
            alignItems:'center'
          }}>
            <div style={{ display: 'flex', gap: '24px', alignItems: 'center'}}>
              {/* 로그인 페이지 이동 */}
              <div style={styles.rightNav}>
                <Link to="/login" style={styles.rigthBorderNav}>
                  로그인
                </Link>
              </div>

              {/* 회원가입 페이지 이동 */}
              <button style={styles.rigthBackGroundNav}>
                <Link to="/join" style={styles.join}>
                  회원가입
                </Link>
              </button>
            </div>
          </nav>
        </header>
      </div>

      <main style={{ marginTop: '80px' }}>
        <Outlet />
      </main>
      <footer>
        <div style={{
          height: '290px',
          backgroundColor: theme.PALETTE.primary.main,
          display: 'flex',
          justifyContent: 'center',
        }}>
          <div style={{
            width: '105vh',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '70px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{
                fontSize: theme.FONT_SIZE.h9,
                fontWeight: theme.FONT_WEIGHT.medium,
                color: theme.PALETTE.white,
                marginTop:'13px'
              }}>
                개인정보처리방침 | 서비스 이용약관
              </span>
              <div style={{display: 'flex', alignItems: 'center', gap: '7px'}}>
                <img src='/assets/image/layout/youtube.svg' style={{width:'44px'}}/>
                <img src='/assets/image/layout/naver.svg' style={{width:'44px'}}/>
                <img src='/assets/image/layout/instagram.svg' style={{width:'44px'}}/>
              </div>
            </div>

            <span style={{
              fontSize: theme.FONT_SIZE.h9,
              fontWeight: theme.FONT_WEIGHT.bold,
              color: theme.PALETTE.white,
              marginTop: '57px'
              }}>
                INFO.
            </span>

            <div style={{
              display: 'flex',
              gap: '40px',
              marginTop: '8px',
              fontSize: theme.FONT_SIZE.h9,
              fontWeight: theme.FONT_WEIGHT.regular,
              color: theme.PALETTE.white,
              }}>
              <span>주식회사 이음</span>
              <span>대표 : 노규호 외 4명</span>
              <span>사업자등록번호 : 123-45-67890</span>
            </div>
            <div style={{
              display: 'flex',
              gap: '40px',
              marginTop: '4px',
              fontSize: theme.FONT_SIZE.h9,
              fontWeight: theme.FONT_WEIGHT.regular,
              color: theme.PALETTE.white,
              }}>
              <span>주소 : 서울특별시 마포구 백범로 130</span>
              <span>광고·제휴문의 : code-kine@gmail.com</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
