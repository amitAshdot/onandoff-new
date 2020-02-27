import React from 'react'
import TimeTableDay from './TimeTableDay'
const TimeTable = (props) => {
    const handleChangeCloseHour = props.handleChangeCloseHour;
    const handleChangeOpemHour = props.handleChangeOpemHour;
    const { timeSchedule } = props.timerPlus;
    const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
    const daysEng = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    return (
        <div className="time">
            <div className="day-lable-d">
                <p>פתיחה</p>
                <p>סגירה</p>
            </div>
            {days.map((day, i) =>
                <TimeTableDay
                    handleChangeCloseHour={handleChangeCloseHour}
                    handleChangeOpemHour={handleChangeOpemHour}
                    timeSchedule={timeSchedule}
                    daysEng={daysEng}
                    name={day}
                    key={i}
                    i={i}
                />
            )}

        </div>
    )
}
export default TimeTable