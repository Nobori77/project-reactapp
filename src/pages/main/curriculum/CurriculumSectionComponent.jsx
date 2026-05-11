import React from 'react';
import { useNavigate } from 'react-router-dom';
import theme from '../../../styles/theme';
import { styles } from '../style';

const STEPS = [
  { step: 1, label: '입문', count: '8강', active: true },
  { step: 2, label: '초급', count: '12강', active: false },
  { step: 3, label: '중급', count: '12강', active: false },
  { step: 4, label: '고급', count: '18강', active: false },
  { step: 5, label: '자격증', count: '도전', active: false },
];

const CurriculumSection = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '110px' }}>
      <span style={{
        fontSize: theme.FONT_SIZE.h5, fontWeight: theme.FONT_WEIGHT.bold,
        alignSelf: 'flex-start', paddingLeft: '370px', marginBottom: '71px',
      }}>💎 커리큘럼</span>

      {/* 스텝 */}
      <div style={{ display: 'flex', alignItems: 'flex-start', width: '670px', marginBottom: '25px' }}>
        {STEPS.map((s, i) => (
          <React.Fragment key={s.step}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: s.active ? theme.PALETTE.primary.main : styles.curriculumGray,
                width: '61px', height: '61px', borderRadius: '50%',
                color: s.active ? theme.PALETTE.white : styles.textGray,
                fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.medium,
              }}>{s.step}</div>
              <span style={{ fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.medium, color: s.active ? theme.PALETTE.primary.main : styles.textGray }}>{s.label}</span>
              <span style={{ fontSize: theme.FONT_SIZE.h9, fontWeight: theme.FONT_WEIGHT.regular, color: styles.textGray }}>{s.count}</span>
            </div>
            {i < STEPS.length - 1 && <div style={styles.curriculumLine} />}
          </React.Fragment>
        ))}
      </div>

      {/* 소개 박스 */}
      <div style={{
        width: '1096px', height: '355px', borderRadius: '50px',
        border: `solid 1px ${theme.PALETTE.primary.main}`,
        marginBottom: '150px', paddingTop: '35px', paddingLeft: '66px', paddingBottom: '40px',
        display: 'flex', flexDirection: 'column',
      }}>
        <span style={{ fontSize: theme.FONT_SIZE.h7, fontWeight: theme.FONT_WEIGHT.medium, marginBottom: '14px' }}>이음 커리큘럼 소개</span>
        <span style={{ marginBottom: '10px', fontSize: theme.FONT_SIZE.h4, fontWeight: theme.FONT_WEIGHT.bold, color: theme.TEXT_COLOR.primary }}>입문부터 자격증까지</span>
        <span style={{ marginBottom: '5px', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.regular }}>총 5단계 · 50강 · 평균 수료 기간 6개월</span>
        <div style={{ display: 'flex', gap: '9px', fontSize: theme.FONT_SIZE.h10, fontWeight: theme.FONT_WEIGHT.medium, color: theme.GRAYSCALE[7] }}>
          {['#무료시작', '#단계별학습', '#라이브참여', '#자격증', '#커뮤니티'].map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '20px', alignSelf: 'center', marginTop: 'auto' }}>
          <div style={{ width: '200px', height: '60px', borderRadius: '40px', backgroundColor: theme.PALETTE.primary.main, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ color: theme.PALETTE.white, fontSize: theme.FONT_SIZE.h8, fontWeight: theme.FONT_WEIGHT.bold, background: 'none', border: 'none', cursor: 'pointer' }}
              onClick={() => navigate('/study/experience')}>무료로 시작하기 →</button>
          </div>
          <div style={{ width: '200px', height: '60px', borderRadius: '40px', border: `solid 1px ${theme.PALETTE.primary.main}`, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <button style={{ color: theme.PALETTE.primary.main, fontSize: theme.FONT_SIZE.h8, fontWeight: theme.FONT_WEIGHT.medium, background: 'none', border: 'none', cursor: 'pointer' }}>커리큘럼 보기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurriculumSection;