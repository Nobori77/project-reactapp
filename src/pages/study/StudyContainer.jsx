import React from 'react';
import StudyComponent from './StudyComponent';
import { Outlet, useLocation } from 'react-router-dom';

const StudyContainer = () => {

    const location = useLocation();
    const isStudyMain = location.pathname === '/study' || location.pathname === '/study/';

    if(isStudyMain){
        return <StudyComponent />;
    }
    return (
        <>
            <Outlet />
        </>
    );
};

export default StudyContainer;