import React from 'react'

const TimeTableDay = (props) => {

    const { timeSchedule, handleChangeOpemHour, handleChangeCloseHour, name, i } = props
    const colorStyle = i % 2 === 0 ? { backgroundColor: "#ebf4eb" } : { backgroundColor: "#ebf4eb" }
    const day = Object.keys(timeSchedule)[i];
    return (
        <div className="day" style={colorStyle} >
            <p>{name}</p>
            <input type="time"
                placeholder="Open Hour"
                name={day}
                value={timeSchedule[day].openHour}
                onChange={handleChangeOpemHour}
                style={colorStyle}
            />
            <input type="time"
                placeholder="Close Hour"
                name={day}
                value={timeSchedule[day].closeHour}
                onChange={handleChangeCloseHour}
                style={colorStyle}
            />
        </div>
    )
}
export default TimeTableDay