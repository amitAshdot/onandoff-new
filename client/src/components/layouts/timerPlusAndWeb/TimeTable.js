import React from 'react';
import TimeTableDay from './TimeTableDay';

const TimeTable = (props) => {
    const { timeSchedule } = props.timerPlus;
    const { timerPlus, setWebsite } = props;
    const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
    const daysEng = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
        <div className={`timeTable ${props.type}`} >
            <div className="time" id={props.id || ''}>
                <div className="day-lable-d">
                    <p>פתיחה</p>
                    <p>סגירה</p>
                </div>
                {days.map((day, i) =>
                    <TimeTableDay
                        item={timerPlus}
                        setItem={setWebsite}
                        timeSchedule={timeSchedule}
                        daysEng={daysEng}
                        name={day}
                        key={i}
                        i={i}
                    />
                )}

            </div>
        </div>
    )
}
export default TimeTable