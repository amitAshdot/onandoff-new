import React from 'react';
// -- functions --
import { onChange } from '../../../action/TimerWebFunctions'

const GoogleTag = (props) => {
    const {timerPlus , setTimerPlus} = props;
    if (typeof props.withGoogleAnalytics === 'undefined' || !props.withGoogleAnalytics) {
        return null
    }
    return (
        <div className="googleTagSection">
            <p>כאן תוכלו לממש גוגל אנאליטיקס</p>
            <p>התבנית הינה כזאת:</p>
            <p style={{direction:"ltr"}}>{`<div onclick="gtag('event', 'event_name', {   'event_category' : 'even_category_name',   'event_label' : 'event_label_name' });> 'הקוד והטקסט מעורך התוכן' </div>`}</p>
            <div className="gtInputArea">
                <div className="info-block">
                    <p >event_name</p>
                    <input type="text" className="websit-form-input" name='eventInput' value={timerPlus.eventInput} onChange={(e) => onChange(e, setTimerPlus, timerPlus)} placeholder="Ex. click" />
                    <div className="input-border"></div>                      

                </div>
                <div className="info-block">
                    <p>event_category_name</p>
                    <input type="text" className="websit-form-input" name='evenCategoryInput' value={timerPlus.evenCategoryInput} onChange={(e) => onChange(e, setTimerPlus, timerPlus)} placeholder="Ex. clicks on phone" />
                    <div className="input-border"></div>
                </div>
                <div className="info-block">
                    <p>event_label_name </p>
                    <input type="text" className="websit-form-input" name='eventLabelInput' value={timerPlus.eventLabelInput} onChange={(e) => onChange(e, setTimerPlus, timerPlus)} placeholder="Ex. mobile phone" />
                    <div className="input-border"></div>
                </div>
            </div>
        </div>
    )
}
export default GoogleTag;
