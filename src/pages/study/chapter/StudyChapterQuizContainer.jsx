import React, { useContext } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import StudyQuizProvider from '../../../context/StudyQuizContext';


// 퀴즈 상세
const StudyChapterQuizContainer = () => {
    const {quiz} = useParams()

    return (
        <div>
            <StudyQuizProvider>
                {quiz} 스터디 quiz 컨테이너
                <Outlet />
            </StudyQuizProvider>
        </div>
    );
};

export default StudyChapterQuizContainer;