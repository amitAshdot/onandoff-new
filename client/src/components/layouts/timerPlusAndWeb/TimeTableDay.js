import React from 'react'
// -- functions --
import { handleChangeCloseHour, handleChangeOpemHour } from '../../../action/TimerWebFunctions'
const TimeTableDay = (props) => {
    const { item, setItem , timeSchedule, name, i } = props
    const colorStyle = i % 2 === 0 ? { backgroundColor: "#ebf4eb" } : { backgroundColor: "#ebf4eb" }
    const day = Object.keys(timeSchedule)[i];
    return (
        <div className="day" style={colorStyle} >
            <p>{name}</p>
            <input type="time"
                placeholder="Open Hour"
                name={day}
                value={timeSchedule[day].openHour}
                onChange={(e) => handleChangeOpemHour(e, setItem, item)}
                style={colorStyle}
            />
            <input type="time"
                placeholder="Close Hour"
                name={day}
                value={timeSchedule[day].closeHour}
                onChange={(e) => handleChangeCloseHour(e, setItem, item)}
                style={colorStyle}
            />
        </div>
    )
}
export default TimeTableDay