import React from 'react';
import StudyAttendanceComponent from './StudyAttendanceComponent';
import { Outlet } from 'react-router-dom';

const StudyAttendanceContainer = () => {
    return (
        <div>
            <StudyAttendanceComponent />
            <Outlet />
        </div>
    );
};

export default StudyAttendanceContainer;