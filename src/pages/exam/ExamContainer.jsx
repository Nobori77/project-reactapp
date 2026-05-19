import { Outlet, useLocation } from 'react-router-dom';
import { styles } from './style';
import ExamSidebar from './ExamSidebar';

const breadcrumbMap = [
  { match: '/exam/info',        label: '시험정보',   category: '자격증' },
  { match: '/exam/receipt',     label: '원서접수',   category: '자격증' },
  { match: '/exam/results',     label: '합격자발표', category: '자격증' },
  { match: '/exam/update',      label: '자격증갱신', category: '자격증' },
  { match: '/exam/certificate', label: '수료증조회', category: '수료증' },
];

const ExamContainer = () => {
  const location = useLocation();
  const current = breadcrumbMap.find(b => location.pathname.startsWith(b.match));

  return (
    <div style={styles.page}>
      <main style={styles.main}>
        <div style={styles.breadcrumb}>
          {['홈', '시험', current?.category].filter(Boolean).map((item, i) => (
            <span key={i} style={styles.breadcrumbItem}>
              <span style={styles.breadcrumbLink}>{item}</span>
              <span style={styles.breadcrumbSep}>›</span>
            </span>
          ))}
          <span style={styles.breadcrumbActive}>{current?.label}</span>
        </div>

        <div style={styles.contentLayout}>
          <ExamSidebar />
          <div style={styles.contentArea}>
            <Outlet />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ExamContainer;
