import React from 'react';
import { Link } from 'react-router-dom';

const CertificateComponent = () => {
  return (
    <div>
      <h1>자격증페이지</h1>
      <div><Link to="/eum/exam/certificate/check">자격증 조회</Link></div>
      <div><Link to="/eum/exam/certificate/print">자격증 출력</Link></div>
      <div><Link to="/eum/exam/certificate/reissue">자격증 재발급</Link></div>
      <div><Link to="/eum/exam">시험으로</Link></div>
    </div>
  );
};

export default CertificateComponent;
