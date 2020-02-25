import React, { useState, useContext, useEffect } from 'react';
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
// import { Link } from 'react-router-dom';
import LinkComp from '../layouts/LinkComp';
import SavedAlert from '../layouts/alerts/SavedAlert';

// -- Layout --
import TimeTable from '../layouts/timerPlusAndWeb/TimeTable'
import Wysiwyg from '../layouts/timerPlusAndWeb/Wysiwyg'
import CopiedAlert from '../layouts/alerts/CopiedAlert';
import Info from '../layouts/timerPlusAndWeb/Info';
import ColorSelect from '../layouts/timerPlusAndWeb/ColorSelect';
import GoogleTag from '../layouts/timerPlusAndWeb/GoogleTag';

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
        wysiwygEditor: '',
        name: '',
        url: '',
        divId: '',
        backgroundColor: 'white',
        textColor: 'black',
        eventInput: '',
        evenCategoryInput: '',
        eventLabelInput: '',
        saveAlert: false, //for UI notification alert
        loading: true,
        withGoogleAnalytics: false,
    });
    const { wysiwyg, name, url, divId, saveAlert, backgroundColor, textColor, eventInput, evenCategoryInput, eventLabelInput, withGoogleAnalytics, wysiwygEditor } = timerPlus

    //change input state
    // const onChange = e => { setTimerPlus({ ...timerPlus, [e.target.name]: e.target.value }); }
    const onChange = (event) => {
        const { name, value, type, checked } = event.target
        type === "checkbox" ?
            !withGoogleAnalytics ?
                setTimerPlus({
                    ...timerPlus,
                    wysiwyg: `<a href="#" onclick="gtag('event', ${eventInput}, {'event_category' : ${evenCategoryInput},'event_label' : ${eventLabelInput} });"> ${wysiwygEditor} </a>`,
                    [name]: checked
                }) :
                setTimerPlus({
                    ...timerPlus,
                    wysiwyg: wysiwygEditor,
                    [name]: checked
                })
            :
            setTimerPlus({
                ...timerPlus,
                [name]: value
            })
    }
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
    const handleEditorChange = (content) => {
        withGoogleAnalytics ?
            setTimerPlus({
                ...timerPlus, wysiwyg: `<a href="#" onclick="gtag('event', ${eventInput}, {   'event_category' : ${evenCategoryInput},   'event_label' : ${eventLabelInput} });"> ${content} </a>`,
                wysiwygEditor: content
            })
            :
            setTimerPlus({ ...timerPlus, wysiwyg: content, wysiwygEditor: content })
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
    const [section, setsection] = useState(0)
    const sectionSelection = (sectionNumber) => { setsection(sectionNumber); }

    // const renderSwitch = param =>{
    //     switch(param){
    //         case 0:
    //             return <Wysiwyg handleEditorChange={handleEditorChange} wysiwyg={wysiwyg} />
    //         case 1:
    //             return <TimeTable handleChangeCloseHour={handleChangeCloseHour} handleChangeOpemHour={handleChangeOpemHour} timerPlus={timerPlus} currentTimerPlus={currentTimerPlus} /> 
    //         case 2:
    //             return <ColorSelect backgroundColor={backgroundColor} textColor={textColor} onChange={onChange} />
    //         case 3:
    //              return <GoogleTag evenCategoryInput={evenCategoryInput} eventInput={eventInput} eventLabelInput={eventLabelInput} onChange={onChange} />
    //         default :
    //             return <Wysiwyg handleEditorChange={handleEditorChange} wysiwyg={wysiwyg} />
    //     }
    // }

    return (
        <form onSubmit={onSubmit}>
            {currentTimerPlus._id ? <h2>  ערוך טיימר+: {name}</h2> : <h2>הוסף טיימר+</h2>}
            <div className="text-on-page">
                <p>עם טיימר+ תוכלו לעדכן,לשנות ולהסתיר תוכן בקלות וביעילות ללא ידע בקוד. בחרו ועצבו את הטקסט שתרצו שיופיע במקום הרכיב המוסתר ולאחר מכן בחרו את השעות בו תרצו להסתיר את הרכיב והופה – אתם באוויר! (לא לשכוח לשמור)
                </p>
            </div>
            <Info onChange={onChange} name={name} url={url} divId={divId} />
            <div>
                <button onClick={() => sectionSelection(0)} style={{ backgroundColor: section === 0 ? '#55a658' : '#4d744f' }}>wysiwyg editor</button>
                <button onClick={() => sectionSelection(1)} style={{ backgroundColor: section === 1 ? '#55a658' : '#4d744f' }}>טבלת שעות </button>
                <button onClick={() => sectionSelection(2)} style={{ backgroundColor: section === 2 ? '#55a658' : '#4d744f' }}>מתקדם</button>
                <button onClick={() => sectionSelection(3)} style={{ backgroundColor: section === 3 ? '#55a658' : '#4d744f' }}>google analytics</button>
            </div>
            {/* {renderSwitch(section)} */}
            {section === 0 ? <Wysiwyg handleEditorChange={handleEditorChange} wysiwyg={wysiwyg} /> : null}
            {section === 1 ? <TimeTable handleChangeCloseHour={handleChangeCloseHour} handleChangeOpemHour={handleChangeOpemHour} timerPlus={timerPlus} currentTimerPlus={currentTimerPlus} /> : null}
            {section === 2 ? <ColorSelect backgroundColor={backgroundColor} textColor={textColor} onChange={onChange} /> : null}
            {section === 3 ? <GoogleTag evenCategoryInput={evenCategoryInput} eventInput={eventInput} eventLabelInput={eventLabelInput} onChange={onChange} setTimerPlus={setTimerPlus} timerPlus={timerPlus} withGoogleAnalytics={withGoogleAnalytics} /> : null}

            <div className="day" id="day-button">
                <input type="submit" value={currentTimerPlus._id ? "שמור" : "הוסף"} />
            </div>

            {saveAlert && (timerPlus.divId !== "" && timerPlus.url !== "" && timerPlus.name !== "") ?
                <SavedAlert text="ההגדרות נשמרו" /> :
                saveAlert && (!(timerPlus.divId !== "" && timerPlus.url !== "" && timerPlus.name !== "")) ?
                    <SavedAlert text="אנא מלא את השדות" /> :
                    null}

            {copy ? <CopiedAlert /> : null}
            {currentTimerPlus.name === '' ?
                null :
                <div>
                    <p>התוצאה:</p>
                    <p>{`<a href="#" onclick="gtag('event', ${eventInput}, {   'event_category' : ${evenCategoryInput}, 'event_label' : ${eventLabelInput} });`}</p>
                    <LinkComp id={currentTimerPlus._id} current={currentTimerPlus} function={'timerPlus'} copied={copied} />
                </div>
            }

        </form>
    );
};

export default TimerPlusForm
