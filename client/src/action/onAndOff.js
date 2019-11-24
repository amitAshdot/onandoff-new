import React from 'react'

const onAndOff = (divId,
    SundayOpen, SundayClose,
    MondayOpen, MondayClose,
    TuesdayOpen, TuesdayClose,
    WednesdayOpen, WednesdayClose,
    ThursdayOpen, ThursdayClose,
    FridayOpen, FridayClose,
    SaturdayOpen, SaturdayClose,
) => {

    const onAndOffFunciton = (divId, timeSchedule) => {
        debugger;
        var d = new Date();
        var day = d.getDay();
        var hours = d.getHours();
        var mins = d.getMinutes();
        var secs = d.getSeconds();
        if (hours < 10) { hours = '0' + hours + ':'; } else { hours = hours + ':'; };
        if (mins < 10) { mins = '0' + mins + ':'; } else { mins = mins + ':'; };
        if (secs < 10) { secs = '0' + secs } else { secs = secs };
        var time = hours + mins + secs;

        var Sunday = { start: `${SundayOpen}`, end: `${SundayClose}` };
        var Monday = { start: `${MondayOpen}`, end: `${MondayClose}` };
        var Tuesday = { start: `${TuesdayOpen}`, end: `${TuesdayClose}` };
        var Wednesday = { start: `${WednesdayOpen}`, end: `${WednesdayClose}` };
        var Thursday = { start: `${ThursdayOpen}`, end: `${ThursdayClose}` };
        var Friday = { start: `${FridayOpen}`, end: `${FridayClose}` };
        var Saturday = { start: `${SaturdayOpen}`, end: `${SaturdayClose}` };


        var testElement = document.getElementById(`${divId}`);
        if (typeof (testElement) == 'undefined' || testElement == null) {
            var cssid = '.' + testElement;
        } else {
            var cssid = '#' + testElement;
        }


        switch (day) {
            case 0:
                if (Sunday.start < time && Sunday.end > time) {
                    { `${cssid}`.hide() };
                }
                break;
            case 1:
                if (Monday.start < time && Monday.end > time) {
                    { `${cssid}`.hide() };
                }
                break;
            case 2:
                if (Tuesday.start < time && Tuesday.end > time) {
                    { `${cssid}`.hide() };
                }
                break;
            case 3:
                if (Wednesday.start < time && Wednesday.end > time) {
                    { `${cssid}`.hide() };
                }
                break;
            case 4:
                if (Thursday.start < time && Thursday.end > time) {
                    { `${cssid}`.hide() };
                }
                break;
            case 5:
                if (Friday.start < time && Friday.end > time) {
                    { `${cssid}`.hide() };
                }
                break;
            case 6:
                if (Saturday.start < time && Saturday.end > time) {
                    { `${cssid}`.hide() };
                }
        }
    }

    return (
        <div>
            {onAndOffFunciton(divId,
    SundayOpen, SundayClose,
    MondayOpen, MondayClose,
    TuesdayOpen, TuesdayClose,
    WednesdayOpen, WednesdayClose,
    ThursdayOpen, ThursdayClose,
    FridayOpen, FridayClose,
    SaturdayOpen, SaturdayClose,)}
        </div>
    )
}

export default onAndOff