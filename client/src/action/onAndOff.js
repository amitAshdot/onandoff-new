// import React from 'react'

// const onAndOff = (divId,
//     SundayOpen, SundayClose,
//     MondayOpen, MondayClose,
//     TuesdayOpen, TuesdayClose,
//     WednesdayOpen, WednesdayClose,
//     ThursdayOpen, ThursdayClose,
//     FridayOpen, FridayClose,
//     SaturdayOpen, SaturdayClose,
// ) => {

//     const onAndOffFunciton = (divId, timeSchedule) => {
//         debugger;
//         var d = new Date();
//         var day = d.getDay();
//         var hours = d.getHours();
//         var mins = d.getMinutes();
//         var secs = d.getSeconds();
//         if (hours < 10) { hours = '0' + hours + ':'; } else { hours = hours + ':'; };
//         if (mins < 10) { mins = '0' + mins + ':'; } else { mins = mins + ':'; };
//         if (secs < 10) { secs = '0' + secs } else { secs = secs };
//         var time = hours + mins + secs;

//         var Sunday = { start: `${SundayOpen}`, end: `${SundayClose}` };
//         var Monday = { start: `${MondayOpen}`, end: `${MondayClose}` };
//         var Tuesday = { start: `${TuesdayOpen}`, end: `${TuesdayClose}` };
//         var Wednesday = { start: `${WednesdayOpen}`, end: `${WednesdayClose}` };
//         var Thursday = { start: `${ThursdayOpen}`, end: `${ThursdayClose}` };
//         var Friday = { start: `${FridayOpen}`, end: `${FridayClose}` };
//         var Saturday = { start: `${SaturdayOpen}`, end: `${SaturdayClose}` };


//         var testElement = document.getElementById(`${divId}`);
//         if (typeof (testElement) == 'undefined' || testElement == null) {
//             var cssid = '.' + testElement;
//         } else {
//             var cssid = '#' + testElement;
//         }


//         switch (day) {
//             case 0:
//                 if (Sunday.start < time && Sunday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//                 break;
//             case 1:
//                 if (Monday.start < time && Monday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//                 break;
//             case 2:
//                 if (Tuesday.start < time && Tuesday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//                 break;
//             case 3:
//                 if (Wednesday.start < time && Wednesday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//                 break;
//             case 4:
//                 if (Thursday.start < time && Thursday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//                 break;
//             case 5:
//                 if (Friday.start < time && Friday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//                 break;
//             case 6:
//                 if (Saturday.start < time && Saturday.end > time) {
//                     { `${cssid}`.hide() };
//                 }
//         }
//     }

//     return (
//         <div>
//             {onAndOffFunciton(divId,
//     SundayOpen, SundayClose,
//     MondayOpen, MondayClose,
//     TuesdayOpen, TuesdayClose,
//     WednesdayOpen, WednesdayClose,
//     ThursdayOpen, ThursdayClose,
//     FridayOpen, FridayClose,
//     SaturdayOpen, SaturdayClose,)}
//         </div>
//     )
// }

// export default onAndOff


function onAndOff(
    dI,
    sO, sC,
    mO, mC,
    tuO, tuC,
    wO, wC,
    tO, tC,
    fO, fC,
    stO, stC, b){
    let d = new Date();
    let day = d.getDay();
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    h < 10 ? h = '0' + h + ':' : h = h + ':';
    m < 10 ? m = '0' + m + ':' : m = m + ':';
    s < 10 ? s = '0' + s : h = h;
    let t = h + m + s;

    let su = { s: `${sO}`, e: `${sC}` };
    let mo = { s: `${mO}`, e: `${mC}` };
    let tu = { s: `${tuO}`, e: `${tuC}` };
    let we = { s: `${wO}`, e: `${wC}` };
    let th = { s: `${tO}`, e: `${tC}` };
    let fr = { s: `${fO}`, e: `${fC}` };
    let sa = { s: `${stO}`, e: `${stC}` };

    let te = document.getElementById(`${dI}`);
    let cssid;
    typeof (te) == 'undefined' || te == null ? cssid = '.' + te : cssid = '#' + te;

    switch (day) {
        case 0:
            if(su.s < t && su.e > t) `${cssid}`.hide() ;
            break;
        case 1:
            if(mo.s < t && mo.e > t)  `${cssid}`.hide();
            break;
        case 2:
            if(tu.s < t && tu.e > t) `${cssid}`.hide();
            break;
        case 3:
            if(we.s < t && we.e > t)  `${cssid}`.hide() ;
            break;
        case 4:
            if(th.s < t && th.e > t ) `${cssid}`.hide() ;
            break;
        case 5:
            if(fr.s < t && fr.e > t ) `${cssid}`.hide() ;
            break;
        case 6:
            if(sa.s < t && sa.e > t ) `${cssid}`.hide() ;
            break;
    }
}
// (divId,
//     SundayOpen, SundayClose,
//     MondayOpen, MondayClose,
//     TuesdayOpen, TuesdayClose,
//     WednesdayOpen, WednesdayClose,
//     ThursdayOpen, ThursdayClose,
//     FridayOpen, FridayClose,
//     SaturdayOpen, SaturdayClose,
// )