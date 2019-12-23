import React, { Fragment, useState, useContext, useEffect } from 'react'
import WebsiteContext from '../../context/singleWebsite/SingleWebsiteContext';

const Onandoff = (props) => {

    const websiteContext = useContext(WebsiteContext);
    const { websites, getWebsites, getSingleWebsite, setCurrent, clearCurrent, current } = websiteContext;


    const [website, setWebsite] = useState({
        timeSchedule: {
            Sunday: { openHour: '10:00', closeHour: '00:00' },
            Monday: { openHour: '00:00', closeHour: '00:00', },
            Tuesday: { openHour: '10:00', closeHour: '00:00' },
            Wednesday: { openHour: '10:00', closeHour: '00:00' },
            Thursday: { openHour: '10:00', closeHour: '00:00' },
            Friday: { openHour: '10:00', closeHour: '00:00' },
            Saturday: { openHour: '10:00', closeHour: '00:00' }
        },
        name: '',
        url: '',
        divId: '',
    });
    useEffect(() => {
        // setCurrent('5de7b21b4407fc0f92fb4264');
        getSingleWebsite(props.websiteid);
        setCurrent(websites)
        // setWebsite(
        //     {
        //     timeSchedule: {
        //         Sunday: { openHour: `${websites[0].timeSchedule.Sunday.openHour}`, closeHour: `${websites[0].timeSchedule.Sunday.closeHour}` },
        //         Monday: { openHour: `${websites[0].timeSchedule.Monday.openHour}`, closeHour:`${websites[0].timeSchedule.Monday.closeHour}` },
        //         Tuesday: { openHour: `${websites[0].timeSchedule.Tuesday.openHour}`, closeHour: `${websites[0].timeSchedule.Tuesday.closeHour}` },
        //         Wednesday: { openHour: `${websites[0].timeSchedule.Wednesday.openHour}`, closeHour: `${websites[0].timeSchedule.Wednesday.closeHour}` },
        //         Thursday: { openHour: `${websites[0].timeSchedule.Thursday.openHour}`, closeHour: `${websites[0].timeSchedule.Thursday.closeHour}`},
        //         Friday: { openHour: `${websites[0].timeSchedule.Friday.openHour}`, closeHour: `${websites[0].timeSchedule.Friday.closeHour}` },
        //         Saturday: { openHour: `${websites[0].timeSchedule.Saturday.openHour}`, closeHour: `${websites[0].timeSchedule.Saturday.closeHour}` }
        //     },
        //     name: `${websites[0].name}`,
        //     url:`${websites[0].url}`,
        //     divId: `${websites[0].divId}`,
        // }
        // )
        //eslint-disable-next-line
    }, []);

    // const onAndOffFunciton = (websites) => {
    //     debugger
    //     var d = new Date();
    //     var day = d.getDay();
    //     var hours = d.getHours();
    //     var mins = d.getMinutes();
    //     var secs = d.getSeconds();
    //     if (hours < 10) { hours = '0' + hours + ':' } else { hours = hours + ':' }
    //     if (mins < 10) { mins = '0' + mins + ':'} else { mins = mins + ':'}
    //     if (secs < 10) { secs = '0' + secs } else { secs = secs }
    //     var time = hours + mins + secs;
    
    //     var Sunday = { start: `${SundayOpen}`, end: `${SundayClose}` };
    //     var Monday = { start: `${MondayOpen}`, end: `${MondayClose}` };
    //     var Tuesday = { start: `${TuesdayOpen}`, end: `${TuesdayClose}` };
    //     var Wednesday = { start: `${WednesdayOpen}`, end: `${WednesdayClose}` };
    //     var Thursday = { start: `${ThursdayOpen}`, end: `${ThursdayClose}` };
    //     var Friday = { start: `${FridayOpen}`, end: `${FridayClose}` };
    //     var Saturday = { start: `${SaturdayOpen}`, end: `${SaturdayClose}` };
    
    //     var flag = false; //not a class
    //     var testElement = document.getElementById(`${divId}`);
    //     if (typeof (testElement) === 'undefined' || testElement === null) {
    //         testElement = document.getElementsByClassName(`${divId}`);
    //         flag = true // a class
    //         debugger;
    //     } else {
    //         var testElement = '#' + testElement;
    //     }
    
    //     switch (day) {
    //         case 0:
    //             // if class
    //             if (Sunday.start < time && Sunday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    //             break;
    //         case 1:
    //             // if class
    //             if (Monday.start < time && Monday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    //             break;
    //         case 2:
    //             // if class
    //             if (Tuesday.start < time && Tuesday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    //             break;
    //         case 3:
    //             // if class
    //             if (Wednesday.start < time && Wednesday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    //             break;
    //         case 4:
    //             // if class
    //             if (Thursday.start < time && Thursday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    
    //             break;
    //         case 5:
    //             // if class
    //             if (Friday.start < time && Friday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    //             break;
    //         case 6:
    //             // if class
    //             if (Saturday.start < time && Saturday.end > time) {
    //                 if (flag) {
    //                     for (var i = 0, len = testElement.length; i < len; i++) {
    //                         testElement[i].style.display = 'none';
    //                     }
    //                 }
    //                 else testElement.style.display = 'none';
    //             }
    //             break;
    //     }
    // }
    return (
        <div>
            {websites == null ? null :JSON.stringify(websites) }
        </div>
    )
}

export default Onandoff
