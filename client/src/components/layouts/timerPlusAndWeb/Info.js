import React from 'react'
// -- functions --
import { onChange } from '../../../action/TimerWebFunctions'

const Info = (props) => {

    const { name, url, divId, website, setWebsite, timerPlus, setTimerPlus } = props;

    const choseWhichItem = website ? website : timerPlus;
    const choseWhichSet = setWebsite ? setWebsite : setTimerPlus;
    const line = { bordeBottom: 'solid 2px var(--main-color)' }
    return (
        <div className="info">
            <div className="info-block">
                <p className="info-input">שם</p>
                <input type="text" className="websit-form-input" name='name' value={name} onChange={(e) => onChange(e, choseWhichSet, choseWhichItem)} />
                <div className="input-border"></div>
            </div>
            <div className="info-block">
                <p className="info-input">כתובת URL</p>
                <input type="text" className="websit-form-input" name='url' value={url} onChange={(e) => onChange(e, choseWhichSet, choseWhichItem)} />
                <div className="input-border"></div>
            </div>

            <div className="info-block">
                <p className="info-input">מזהה ID או Class של הרכיב המוסתר</p>
                <input type="text" className="websit-form-input" name='divId' value={divId} onChange={(e) => onChange(e, choseWhichSet, choseWhichItem)} id="divID" />
                <div className="input-border" ></div>

            </div>
        </div>
    )
}
export default Info
