import React from 'react';
import { Link } from 'react-router-dom';

const CommunityComponent = () => {
    return (
        <div>
            <Link to={"/community/chat"}>실시간 채팅</Link>
            <Link to={"/community/post"}>게시글</Link>
        </div>
    );
};

export default CommunityComponent;