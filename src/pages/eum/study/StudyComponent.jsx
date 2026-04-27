import React from 'react';
import { Link } from 'react-router-dom';
import { HeroBox } from './style';

const StudyComponent = () => {
    return (
        
        <HeroBox>
            <div id='banner'>
                <p>지금 바로 배워보세요!</p>
                <p>회원가입 없이 다양한 언어표현을
                    재미있게 체험할 수 있어요</p>
                <button onClick={onclick}>지금 체험하기 → </button>
            </div>

            <div id='category'>
                <div className='1번줄'>
                    <div className='출석체크'>
                        <p>(출석체크)</p>
                        <span><Link to={"/study/attendance"}>출석체크 </Link></span>
                        <span>이미지</span>
                        <p>매일매일 출석해요! </p>
                        <button>바로가기 →</button>
                    </div>

                    <div className='오! 퀴즈'>
                        <p>(오! 퀴즈)</p>
                        <span><Link to={"/study/chapter"}>퀴즈</Link></span>
                        <span>이미지</span>
                        <p>알아두면 좋을 퀴즈 </p>
                        <button>바로가기 →</button>
                    </div>
                </div>

                <div className='2번줄'>
                    <div className='수어 학습'>
                        <p>(수어 학습)</p>
                        <span><Link to={"/study/learn"}>수어 학습 </Link></span>
                        <span>이미지</span>
                        <p>눈으로 듣는 새로운 대화법 </p>
                        <button>바로가기 →</button>
                    </div>

                    <div className='응급수신호'>
                        <p>(응급수신호)</p>
                        <span><Link to={"/study/learn"}>응급수신호 </Link></span>
                        <span>이미지</span>
                        <p>위험을 알리는 방법 </p>
                        <button>바로가기 →</button>
                    </div>

                    <div className='모스부호'>
                        <p>(모스부호)</p>
                        <span><Link to={"/study/learn"}>모스부호</Link></span>
                        <span>이미지</span>
                        <p>빛과 점으로 전하는 신호 </p>
                        <button>바로가기 →</button>
                    </div>
                </div>
            </div>

            <div id='search'>
                <p>찾고 싶은 단어를 검색하세요</p>
                <input type='text' placeholder='단어를 입력하세요'/>
                <Link to={"/study/search"}>검색</Link>
                <p>전체 일상 가족 음식 날씨 감정 숫자 색깔 동물 </p>
                <p>임티 임티 임티 임티 임티 임티</p>
                <p>임티 임티 임티 임티 임티 임티</p>
                <button>더 많은 단어 보기 →</button>
            </div>

            <div id='video'>
                <p>바로 배우는 오늘의 단어 영상</p>
                <p>매일 업데이트되는 짧은 학습 영상을 만나보세요.</p>
                <span>수어</span>
                <span>수신호</span>
                <span>모스부호</span>
                <p>영상이미지</p>
                <button>더 많은 영상 보기 →</button>
            </div>
        </HeroBox>
    );
};

export default StudyComponent;