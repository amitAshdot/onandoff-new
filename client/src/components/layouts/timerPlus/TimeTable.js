import React from 'react'
import TimeTableDay from './TimeTableDay'
const TimeTable = (props) => {

    const handleChangeCloseHour = props.handleChangeCloseHour;
    const handleChangeOpemHour = props.handleChangeOpemHour;
    const { timeSchedule } = props.timerPlus;
    const days = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת']
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
                    name={day}
                    key={i}
                    i={i}
                />
            )}
            <div className="day" id="day-button">
                {props.currentTimerPlus._id ? <input type="submit" value="שמור" /> : <input type="submit" value="הוסף" />}
            </div> 
        </div>
    )
}
export default TimeTable