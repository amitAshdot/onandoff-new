import React from 'react'

const TimeTableDay = (props) => {

    const { timeSchedule, handleChangeOpemHour, handleChangeCloseHour, name, i } = props
    const colorStyle = i % 2 === 0 ? { backgroundColor: "white" } : { backgroundColor: "white" }
    return (
        <div className="day" style={colorStyle}>
            <p>{name}</p>
            <input type="time"
                placeholder="Open Hour"
                name='Sunday'
                value={timeSchedule.Sunday.openHour}
                onChange={handleChangeOpemHour}
                style={colorStyle}
            />
            <input type="time"
                placeholder="Close Hour"
                name='Sunday'
                value={timeSchedule.Sunday.closeHour}
                onChange={handleChangeCloseHour}
                style={colorStyle}
            />
        </div>
    )
}
export default TimeTableDay