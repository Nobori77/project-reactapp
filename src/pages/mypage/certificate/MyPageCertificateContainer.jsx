import React from 'react';
import MyPageCertificateComponent from './MyPageCertificateComponent';
import { Outlet } from 'react-router-dom';

const MyPageCertificateContainer = () => {
    return (
        <div>
            <MyPageCertificateComponent />
            <Outlet />
        </div>
    );
};

export default MyPageCertificateContainer;