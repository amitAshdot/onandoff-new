import React, { useState, useContext, useEffect } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';
// import { Link } from 'react-router-dom';
import LinkComp from '../layouts/LinkComp';
import SavedAlert from '../layouts/SavedAlert';

// -- Layout --
import TimeTable from '../layouts/timerPlus/TimeTable'
import Info from '../layouts/timerPlus/Info';
import CopiedAlert from '../layouts/CopiedAlert';
const WebsiteForm = () => {
    const websiteContext = useContext(WebsiteContext);
    const { addWebsite, updateWebsite, current, setCurrent } = websiteContext;

    //user effect for edit form , current is the corrent landingPage
    useEffect(() => {
        if (current != null)
            setWebsite(current);
        //eslint-disable-next-line
    }, []);

    const [website, setWebsite] = useState({
        timeSchedule: {
            Sunday: { openHour: '00:00', closeHour: '00:00' },
            Monday: { openHour: '00:00', closeHour: '00:00', },
            Tuesday: { openHour: '00:00', closeHour: '00:00' },
            Wednesday: { openHour: '00:00', closeHour: '00:00' },
            Thursday: { openHour: '00:00', closeHour: '00:00' },
            Friday: { openHour: '00:00', closeHour: '00:00' },
            Saturday: { openHour: '00:00', closeHour: '00:00' }
        },
        name: '',
        url: '',
        divId: '',
        saveAlert: false
    });

    const {name, url, divId, saveAlert } = website

    //change input state
    const onChange = e => { setWebsite({ ...website, [e.target.name]: e.target.value }); }
    const handleChangeOpemHour = (el) => {
        let inputName = el.target.name;
        let inputValue = el.target.value;
        let statusCopy = Object.assign({}, website);
        statusCopy.timeSchedule[inputName].openHour = inputValue;
        setWebsite(statusCopy);
    }
    const handleChangeCloseHour = (el) => {
        let inputName = el.target.name;
        let inputValue = el.target.value;
        let statusCopy = Object.assign({}, website);
        statusCopy.timeSchedule[inputName].closeHour = inputValue;
        setWebsite(statusCopy);
    }
    const onSubmit = e => {
        e.preventDefault();
        if (website.divId !== "" && website.url !== "" && website.name !== "") {// check if DIVID is defined
            current._id ? updateWebsite(website) : addWebsite(website);
            // function from websiteContext
            setCurrent(website);
            saved();
        }
        else saved();
    };
    const saved = () => {//UI notificiation function
        setWebsite({ ...website, saveAlert: true })
        setTimeout(() => {
            setWebsite({ ...website, saveAlert: false })
        }, 2000)
    }
    const [copy, setCopy] = useState(false);
    const copied = () => {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }
    return (
        <form onSubmit={onSubmit}>
            {current._id ? <h2>  ערוך עמוד נחיתה: {name}</h2> : <h2>הוסף עמוד נחיתה</h2>}
            <Info onChange={onChange} name={name} url={url} divId={divId} />
            <TimeTable
                handleChangeCloseHour={handleChangeCloseHour}
                handleChangeOpemHour={handleChangeOpemHour}
                timerPlus={website}
                currentTimerPlus={current} />

            {copy ? <CopiedAlert /> : null}
            {current.name === '' ? null : <LinkComp id={current._id} current={current} function={'onAndOffFunction'} copied={copied} />}

            {saveAlert && (website.divId !== "" && website.url !== "" && website.name !== "") ?
                <SavedAlert text="ההגדרות נשמרו" /> :
                saveAlert && (!(website.divId !== "" && website.url !== "" && website.name !== "")) ?
                    <SavedAlert text="אנא מלא את שם מזהה הרכיב" /> :
                    null
            }
        </form >
    );
};

export default WebsiteForm