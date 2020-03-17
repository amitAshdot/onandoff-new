import React from 'react'

const ColorPick = (props) => {

    const { color } = props;

    const line = { backgroundColor: color ? color : 'var(--main-color)' }
    return (
        <div className="itemColor" style={line}>

        </div>
    )
}
export default ColorPick
