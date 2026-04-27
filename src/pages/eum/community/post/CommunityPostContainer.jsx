import React from 'react';
import CommunityPostComponent from './CommunityPostComponent';
import { Outlet } from 'react-router-dom';

const CommunityPostContainer = () => {
    return (
        <div>
            게시글 컨테이너
            <CommunityPostComponent />
            <Outlet />
        </div>
    );
};

export default CommunityPostContainer;