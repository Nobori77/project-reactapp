import React from 'react';
import CommunityComponent from './CommunityComponent';
import { Outlet } from 'react-router-dom';
import CommunityUserProfileComponent from './profile/CommunityUserProfileComponent';

const CommunityContainer = () => {
    return (
        <>
            <div>
                커뮤니티페이지
                <CommunityComponent />
                <Outlet />
            </div>
            <div>
                지금 활동 중인 멤버
                <CommunityUserProfileComponent />
            </div>
        </>
    );
};

export default CommunityContainer;