import React from 'react'
import { ColorPicker } from 'react-input-color';

const ColorSelect = (props) => {
    return (
        <div>
            <p>
                הכנס מספר צבע לטקסט
                <input type="text" className="websit-form-input" name='textColor' value={props.textColor} onChange={props.onChange} />
            </p>
            <div style={{backgroundColor: props.textColor, height:"100px" , width : "100px", margin:"auto", border: '1px solid black'}}></div>
            <p>
            הכנס מספר צבע לרקע
                <input type="text" className="websit-form-input" name='backgroundColor' value={props.backgroundColor} onChange={props.onChange} />
            </p>
            <div style={{backgroundColor: props.backgroundColor, height:"100px" , width : "100px", margin:"auto", border: '1px solid black'}}></div>
        </div>
    )
}
export default ColorSelect;
