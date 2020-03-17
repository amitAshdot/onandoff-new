import React, { useState } from 'react'
import ColorPicker from 'coloreact';

const Subject = (props) => {
    const { color, swatches, selected, setTimerPlus, timerPlus , id , setWebsite, website} = props;

    const selectSwatch = (selected) => {
        timerPlus?
        setTimerPlus({ ...timerPlus, color: swatches[selected], selected: selected })
        :
        setWebsite({...website, color: swatches[selected], selected: selected })
    }
    //       const handleChange =(color) =>{
    //     const swatchestemp = [...swatches]
    //     swatchestemp[selected] = color.rgbString
    //     setTimerPlus({...timerPlus, swatches:swatchestemp})
    //   }
    const actualColor = swatches[selected]
    return (
        <div className="colorForm" id={id || ''}>
            <h3>בחירת צבע</h3>
            <ul className="swatches">
                {swatches.map((col, i) => (
                    <li
                        style={{ backgroundColor: col }}
                        key={i}
                        className={selected === i ? 'selected' : ''}
                        onClick={() => selectSwatch(i)}
                    />
                ))}
            </ul>
            <code className="swatch-value" style={{ color: actualColor }}>

                {actualColor}
            </code>
            {/* <ColorPicker
          style={{
            position: 'relative',
            height: '300px',
            width: '40%',
            margin: 'auto',
            paddingLeft: '1.3em',
          }}
          color={swatches[selected]}
          onChange={handleChange}
          opacity
        /> */}
        </div>
    )
}
export default Subject;