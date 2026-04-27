import React from 'react';
import StudySearchComponent from './StudySearchComponent';
import { Outlet } from 'react-router-dom';

const StudySerachContainer = () => {
    return (
        <div>
            <StudySearchComponent />
            <Outlet />
        </div>
    );
};

export default StudySerachContainer;