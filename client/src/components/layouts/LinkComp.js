import React from 'react'
// import onAndOf from '../action/onAndOff'

const LinkComp = (props) => {

    // const temp = onAndOf.onAndOffFunction(`${props.current.divId} , ${props.current.timeSchedule}}`);

    var getUrl = window.location.host;
    var baseUrl = getUrl.protocol + "//" + getUrl.host;

    return (
        <div className="linkToCopy">
            <p className="code-info">הוסף את קטעי הקוד הבאים בתוך ה-header</p><br />
            <div className="code">
                {`<script type="text/javascript" src="http://timer.${getUrl}/onandoff.js"> </script>`}<br />
                {`<script type="text/javascript">
                onAndOffFunction(
                ${props.current.divId} ,
                ${props.current.timeSchedule.Sunday.openHour} ,${props.current.timeSchedule.Sunday.closeHour},
                ${props.current.timeSchedule.Monday.openHour} ,${props.current.timeSchedule.Monday.closeHour},
                ${props.current.timeSchedule.Tuesday.openHour} ,${props.current.timeSchedule.Tuesday.closeHour},
                ${props.current.timeSchedule.Wednesday.openHour} ,${props.current.timeSchedule.Wednesday.closeHour},
                ${props.current.timeSchedule.Thursday.openHour} ,${props.current.timeSchedule.Thursday.closeHour},
                ${props.current.timeSchedule.Friday.openHour} ,${props.current.timeSchedule.Friday.closeHour},
                ${props.current.timeSchedule.Saturday.openHour} ,${props.current.timeSchedule.Saturday.closeHour},
                ) ;
                </script>`}
            </div>

        </div>
    )
}
export default LinkComp
