import React, { useState, useContext, useEffect } from 'react';
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
// import { Link } from 'react-router-dom';
import LinkComp from '../layouts/LinkComp';
import SavedAlert from '../layouts/SavedAlert';

// -- Layout --
import TimeTable from '../layouts/timerPlus/TimeTable'
import Wysiwyg from '../layouts/timerPlus/Wysiwyg'
import CopiedAlert from '../layouts/CopiedAlert';
import Info from '../layouts/timerPlus/Info';

const TimerPlusForm = (props) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { addTimerPlus, updateTimerPlus, currentTimerPlus, setCurrentTimerPlus } = timerPlusContext;

    //user effect for edit form , currentTimerPlus is the corrent landingPage
    useEffect(() => {
        if (currentTimerPlus != null)
            setTimerPlus(currentTimerPlus);
        //eslint-disable-next-line
    }, []);

    const [timerPlus, setTimerPlus] = useState({
        timeSchedule: {
            Sunday: { openHour: '00:00', closeHour: '00:00' },
            Monday: { openHour: '00:00', closeHour: '00:00', },
            Tuesday: { openHour: '00:00', closeHour: '00:00' },
            Wednesday: { openHour: '00:00', closeHour: '00:00' },
            Thursday: { openHour: '00:00', closeHour: '00:00' },
            Friday: { openHour: '00:00', closeHour: '00:00' },
            Saturday: { openHour: '00:00', closeHour: '00:00' }
        },
        wysiwyg: '',
        name: '',
        url: '',
        divId: '',
        saveAlert: false, //for UI notification alertת
        loading: true
    });
    const { timeSchedule, wysiwyg, name, url, divId, saveAlert } = timerPlus

    //change input state
    const onChange = e => { setTimerPlus({ ...timerPlus, [e.target.name]: e.target.value }); }
    const handleChangeOpemHour = (el) => {
        let inputName = el.target.name;
        let inputValue = el.target.value;
        let statusCopy = Object.assign({}, timerPlus);
        statusCopy.timeSchedule[inputName].openHour = inputValue;
        setTimerPlus(statusCopy);
    }
    const handleChangeCloseHour = (el) => {
        let inputName = el.target.name;
        let inputValue = el.target.value;
        let statusCopy = Object.assign({}, timerPlus);
        statusCopy.timeSchedule[inputName].closeHour = inputValue;
        setTimerPlus(statusCopy);
    }
    // const handleWYSIWYG = (content) => { setTimerPlus({ ...timerPlus, wysiwyg: content }); }
    const handleEditorChange = (content) => {
        setTimerPlus({ ...timerPlus, wysiwyg: content });
    }
    const onSubmit = e => {
        e.preventDefault();
        if (timerPlus.divId !== '' && timerPlus.url !== '' && timerPlus.name !== '') {// check if DIVID is defined
            currentTimerPlus._id ? updateTimerPlus(timerPlus) : addTimerPlus(timerPlus);// function from timerPlusContext
            setCurrentTimerPlus(timerPlus);
            saved();//UI notificiation function
        }
        else {//else alert and dont save to DB
            saved();
        }
    };
    const saved = () => {//UI notificiation function
        setTimerPlus({ ...timerPlus, saveAlert: true })
        setTimeout(() => {
            setTimerPlus({ ...timerPlus, saveAlert: false })
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
            {currentTimerPlus._id ? <h2>  ערוך טיימר+: {name}</h2> : <h2>הוסף טיימר+</h2>}
            <div className="text-on-page">
                <p>עם טיימר+ תוכלו לעדכן,לשנות ולהסתיר תוכן בקלות וביעילות ללא ידע בקוד. בחרו ועצבו את הטקסט שתרצו שיופיע במקום הרכיב המוסתר ולאחר מכן בחרו את השעות בו תרצו להסתיר את הרכיב והופה – אתם באוויר! (לא לשכוח לשמור)
                </p>
            </div>
            <Info onChange={onChange} name={name} url={url} divId={divId}/>
            <Wysiwyg handleEditorChange={handleEditorChange} wysiwyg={wysiwyg}/>
            <TimeTable handleChangeCloseHour={handleChangeCloseHour} handleChangeOpemHour={handleChangeOpemHour} timerPlus={timerPlus} currentTimerPlus={currentTimerPlus}/>

            {saveAlert && (timerPlus.divId !== "" && timerPlus.url !== "" && timerPlus.name !== "") ?
                <SavedAlert text="ההגדרות נשמרו" /> :
                saveAlert && (!(timerPlus.divId !== "" && timerPlus.url !== "" && timerPlus.name !== "")) ?
                    <SavedAlert text="אנא מלא את השדות" /> :
                    null}
            {copy ? <CopiedAlert /> : null}
            {currentTimerPlus.name === '' ?
                 null :
                  <LinkComp id={currentTimerPlus._id} current={currentTimerPlus} function={'timerPlus'} copied={copied}/>}

        </form>
    );
};

export default TimerPlusForm
