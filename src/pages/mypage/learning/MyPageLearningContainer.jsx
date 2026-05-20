import React from 'react';
import { Outlet } from 'react-router-dom';
import MyPageLearningComponent from './MyPageLearningComponent';

const MyPageChatContainer = () => {
    return (
        <>
            <MyPageLearningComponent />
            <Outlet />
        </>
    );
};

export default MyPageChatContainer;