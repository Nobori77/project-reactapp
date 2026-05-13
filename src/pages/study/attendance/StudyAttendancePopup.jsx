import React from 'react';
import { AttendPopUpWrap } from './style';

// 출석체크 Popup
const StudyAttendancePopup = ({ onClose, onDetail }) => {


    return (
        <AttendPopUpWrap>
            <div className="attendancePopup">
                <button className='closeBtn' onClick={onClose}>✕</button>

                <div className='popupHeader'>
                    <div className='fireIcon'>🔥</div>
                    <h1>7일 연속 출석!</h1>
                    <div className='date'>2026년 01월 01일 목요일</div>
                </div>

                <div className='rewardBoxWrap'>
                    <div className='rewardBox'>
                        <p className='rewardIcon'>⚡</p>
                        <p className='rewardLabel'>획득 EXP</p>
                        <p className='rewardPoint'>+30 EXP</p>
                    </div>

                    <div className='rewardBox'>
                        <div className='rewardIcon'>🏅</div>
                        <div className='rewardLabel'>획득뱃지</div>
                        <div className='rewardPoint'>4개</div>
                    </div>
                </div>
                    
                <p className='attendNotice'>
                    14일 달성까지 <span>7일</span> 남았어요
                </p>

                <div className='attendNoticeBar'>
                    <div className='barFill'/>
                </div>
                
                {/* 출석페이지로 이동 */}
                <button className='detailBtn' onClick={onDetail}>자세히 보기 →</button>
            </div>
        </AttendPopUpWrap>
    );
};

export default StudyAttendancePopup;

