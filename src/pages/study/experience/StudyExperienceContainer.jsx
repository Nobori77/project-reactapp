import React from 'react';
import StudyExperienceQuizComponent from './StudyExperienceQuizComponent';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { NonUser } from './style';

// 비회원 체험학습 화면

const StudyExperienceContainer = () => {

    //  이동
    const location = useLocation();

    const isExperienceMain = location.pathname === "/study/experience" || location.pathname === "/study/experience/";

    
    const learnTrialList = [
        {
            id: 1,
            level: 3,
            title: "이 수어는 무슨 뜻일까요?",
            desc: "손 모양으로 단어를 맞혀 보세요",
            img: "",
            link: "/study/experience/mors/1"

        },
        {
            id: 2,
            level: 3,
            title: "두 손으로 표현하는 감정",
            desc: "일상 생활 수어 표현을 배워보세요",
            img: "",
            link: "/study/experience/mors/2"

        },
        {
            id: 3,
            level: 4,
            title: "복합 수어 표현에 도전!",
            desc: "여러 단어를 연결해 문장을 만들어요",
            img: "",
            link: "/study/experience/sos/1"

        },
        {
            id: 4,
            level: 1,
            title: "숫자 수어를 알아보세요",
            desc: "1부터 10까지 숫자를 세어 보세요",
            img: "",
            link: "/study/experience/sos/2"

        },
        {
            id: 5,
            level: 2,
            title: "가족을 표현하는 수어",
            desc: "아버지, 어머니, 형제, 자매 표현 모두",
            img: "",
            link: "/study/experience/culture/1"

        },
        {
            id: 6,
            level: 3,
            title: "날씨 수어 마스터하기",
            desc: "맑음, 비, 눈, 바람 수어로 표현해요",
            img: "",
            link: "/study/experience/culture/2"

        }
    ];

    if(!isExperienceMain){
        return <Outlet />
    };

    return (
        <NonUser>
            <div className="chapterInner">
                <div className="chapterHeader">
                    <p className="subTitle">미리보기 학습</p>
                    <p className="desc">
                        재미있는 퀴즈로 다양한 언어표현을 배워보세요
                    </p>
                </div>

                <div className="learnTrialList">
                    {learnTrialList.map((quiz) => (
                        <Link className='quizCard' to={quiz.link} key={quiz.id}>

                            <div className="cardText">
                                <p className="quizTitle">{quiz.title}</p>
                                <p className="quizDesc">{quiz.desc}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>    
            {/* <button className='quizStartButton'>퀴즈 풀기</button> */}
        </NonUser>
    );
};

export default StudyExperienceContainer;