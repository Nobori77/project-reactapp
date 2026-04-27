import React from 'react';
import MyPageComponent from './MyPageComponent';
import { Outlet } from 'react-router-dom';

const MyPageContainer = () => {
    return (
        <div>
            마이페이지
            <MyPageComponent />
            <Outlet />
        </div>
    );
};

export default MyPageContainer;