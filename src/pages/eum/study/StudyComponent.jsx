import React from 'react';
import { Link } from 'react-router-dom';

const StudyComponent = () => {
    return (
        <>
            <Link to={"/study/attendance"}>출석체크</Link>
            <Link to={"/study/chapter"}>챕터 학습</Link>
            <Link to={"/study/learn"}>학습카드 퀴즈</Link>
            <Link to={"/study/search"}>검색</Link>
        </>
    );
};

export default StudyComponent;