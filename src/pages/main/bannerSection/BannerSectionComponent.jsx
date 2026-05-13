import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../style';
import theme from '../../../styles/theme';

const BannerSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div style={styles.headlineWrapper}>
        <div style={styles.headlineText}>
          손짓 하나로 <br />
          <span style={{ color: theme.TEXT_COLOR.primary }}>마음이 이어지는 곳</span> <br />
          이음
        </div>
      </div>

      <div style={styles.subtitleWrapper}>
        <div style={styles.subtitleText}>
          수어를 배우고 싶은 청인과 함께하고 싶은 농인 <br />
          모두를 위한 따뜻한 대화 공간이에요.
        </div>
      </div>

      <div style={styles.blobGreen}></div>
      <div style={styles.blobBlue}></div>
      <div style={styles.blobOrange}></div>
      <div style={styles.blobYellow}></div>
      <div style={styles.blobPurple}></div>
      <div style={styles.blobPink}></div>

      <div style={styles.btnchapter}>
        <button style={styles.startBtn} onClick={() => navigate('/community')}>
          지금 시작하기 →
        </button>
      </div>
    </>
  );
};

export default BannerSection;