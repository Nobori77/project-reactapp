import { useState } from 'react';
import { AttendIS, AttendNotice, AttendReward, AttendTitle, AttendWrap, CalendarWrap, HeadsUp, SideWrap, StyledCalendar, StyledCalendarWrapper, StyledDate, StyledDot } from './style';
import moment from 'moment';
import "react-calendar/dist/Calendar.css";

// 출석체크 화면
const StudyAttendanceComponent = () => {

    // 달력
    const today = new Date();
    const [date, setDate] = useState(today);
    const [activeStartDate, setActiveStartDate] = useState(today);
    const attendDay = ["2026-05-05", "2026-05-06"];
    
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };
    
    const handleTodayClick = () => {
        const today = new Date();
        setActiveStartDate(today);
        setDate(today);
    };

    // 이번주 출석
    const weekList = [

        {id: 1, day:"월", status: "check"},
        {id: 2, day:"화", status: "check"},
        {id: 3, day:"수", status: "today"},
        {id: 4, day:"목", status: "empty"},
        {id: 5, day:"금", status: "empty"},
        {id: 6, day:"토", status: "empty"},
        {id: 7, day:"일", status: "empty"},
    ];


    return(
        <AttendWrap>
            {/* Title */}
            <AttendTitle>
                <div className='checkAttendance' >
                    <p className='checkDesc1'>출석체크</p>
                    <span className='checkDesc2'>매일 출석하고 보상을 받아요</span>
                </div>

                <div className='checkComplete'>
                    <p className='completeDesc1'>✅ 오늘 출석 완료!</p>
                    <span className='completeDesc2'>+30 XP 획득했어요!</span>
                </div>
            </AttendTitle>

            {/* 알림 */}
            <AttendNotice>
                <div className='straight'>
                    <p className='noticeIcon'>🔥</p>
                    <p className='noticeDay'>7일</p>
                    <p className='noticeText'>현재 연속 출석</p>
                </div>

                <div className='month'>
                    <p className='noticeIcon'>📅</p>
                    <p className='noticeDay'>14일</p>
                    <p className='noticeText'>이번달 출석</p>
                </div>

                <div className='exp'>
                    <p className='noticeIcon'>⚡</p>
                    <p className='noticeDay'>1,240</p>
                    <p className='noticeText'>총 획득 EXP</p>
                </div>

                <div className='badge'>
                    <p className='noticeIcon'>🏅</p>
                    <p className='noticeDay'>3개</p>
                    <p className='noticeText'>획득 뱃지</p>
                </div>
            </AttendNotice>

            {/* 달력 */}
            <StyledCalendarWrapper>
                <CalendarWrap>
                    <StyledCalendar
                        value={date} //선택한 날짜
                        onChange={handleDateChange} //날짜 클릭시 실행
                        formatDay={(locale, date) => moment(date).format("D")} //일
                        formatYear={(locale, date) => moment(date).format("YYYY")} //연도
                        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} //상단 월
                        formatShortWeekday={(locale, date) => moment(date).format("ddd")} // 요일
                        // formatShortWeekday={( locale, date ) => {
                        //     const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
                        //     return weekDays[date.getDay()];
                        // }} // 요일
                        calendarType="gregory" // 그레고리력 달력

                        showNeighboringMonth={true} // 이전/다음달 날짜 보기 -> true / 안봄 -> false
                        // 2칸 이동 버튼 숨기기 -> >> <<
                        next2Label={null}
                        prev2Label={null}
                        minDetail="year" // 어디까지 보여줄지
                        activeStartDate={activeStartDate === null ? undefined : activeStartDate} // 현재 보고있는 달
                        
                        // 달력 월 바뀔 때
                        // 사용자가 다음달 버튼 누를 activeStartDate 여기에 저장
                        onActiveStartDateChange={({ activeStartDate }) =>
                        setActiveStartDate(activeStartDate)}
                        
                        // 날짜 칸 안에 추가 내용 넣기
                        //  html 배열 / . 점찍기 등
                        tileContent={({ date, view }) => {
                            let html = [];
                            if (view === "month") { // view가 'month'일 때
                                // 해당 날짜가 특정 날짜인지 확인
                                if (attendDay.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
                                // 점 추가 -> 여기해결하기    
                                html.push(<StyledDot key={moment(date).format("YYYY-MM-DD")} />);
                                console.log(moment(date).format("YYYY-MM-DD"));
                                }
                            }
                            return <>{html}</>;
                        }}
                    />
                    
                    {/*  Today 버튼 */}
                    <StyledDate onClick={handleTodayClick}>Today</StyledDate>
                    <AttendIS>
                        <span className='in'>출석</span>
                        <span className='out'>미출석</span>
                    </AttendIS>
                </CalendarWrap>

                <SideWrap>
                    {/* weeks */}
                    <HeadsUp>
                        <p className='weekTitle'>이번 주</p>
                        <div className='weekList'>
                            {weekList.map((item) => (
                                <div className='weekItem' key={item.id}>
                                    <p className={item.status === "today" ? "day todayText" : "day"}>
                                        {item.day}
                                    </p>

                                    <div className={`circle ${item.status}`}>
                                        {/* 출석완료한날 */}
                                        {item.status === "check" && "✓"}
                                        {/* 오늘 */}
                                        {item.status === "today" && "오늘"}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <p className='weekText'>
                            <span>3일 출석</span> · 4일 남음
                        </p>

                        <div className='progressBar'>
                            <p className='progressFill' />
                        </div>
                    </HeadsUp>

                    {/* 출석보상 */}
                    <AttendReward>
                        <p className='rewardTitle'>출석 보상</p>

                        <div className="rewardList">
                            <div className="rewardItem done">
                                <div className="dayCircle">3일</div>

                                <div className="rewardText">
                                    <p className="rewardName">3일 연속</p>
                                    <p className="rewardDesc">+50 XP</p>
                                </div>

                                <button className="rewardButton complete">완료</button>
                            </div>

                            <div className="rewardItem receive">
                                <div className="dayCircle">7일</div>

                                <div className="rewardText">
                                    <p className="rewardName">7일 연속</p>
                                    <p className="rewardDesc">+100 XP · 🏅 뱃지</p>
                                </div>

                                <button className="rewardButton receiveButton">수령</button>
                            </div>

                            <div className="rewardItem locked">
                                <div className="dayCircle">14일</div>

                                <div className="rewardText">
                                    <p className="rewardName">14일 연속</p>
                                    <p className="rewardDesc">+200 XP · 🏅 뱃지</p>
                                </div>

                                <div className="lockIcon">🔒</div>
                            </div>

                            <div className="rewardItem locked">
                                <div className="dayCircle">30일</div>

                                <div className="rewardText">
                                    <p className="rewardName">30일 연속</p>
                                    <p className="rewardDesc">+500 XP · 🏅 뱃지</p>
                                </div>

                                <div className="lockIcon">🔒</div>
                            </div>
                        </div>                    
                    </AttendReward>
                </SideWrap>
            </StyledCalendarWrapper>
        </AttendWrap>
    );

};

export default StudyAttendanceComponent;