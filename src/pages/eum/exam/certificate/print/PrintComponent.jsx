import React from 'react';
import { Link } from 'react-router-dom';

const PrintComponent = () => {
  return (
    <div>
      <h1>자격증 출력</h1>
      <Link to="/eum/exam">← 시험으로</Link>
    </div>
  );
};

export default PrintComponent;
