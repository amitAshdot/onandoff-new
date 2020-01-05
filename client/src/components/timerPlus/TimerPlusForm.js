import React, { useState, useContext, useEffect } from 'react';
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
// import { Link } from 'react-router-dom';
import LinkComp from '../layouts/LinkComp';
import SavedAlert from '../layouts/SavedAlert';

import { Editor } from '@tinymce/tinymce-react';

const TimerPlusForm = () => {
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

    return (
        <form onSubmit={onSubmit}>
            {currentTimerPlus._id ? <h2>  ערוך עמוד נחיתה: {name}</h2> : <h2>הוסף עמוד נחיתה</h2>}
            <div className="text-on-page">
                <p>עם טיימר+ תוכלו לעדכן,לשנות ולהסתיר תוכן בקלות וביעילות ללא ידע בקוד. בחרו ועצבו את הטקסט שתרצו שיופיע במקום הרכיב המוסתר ולאחר מכן בחרו את השעות בו תרצו להסתיר את הרכיב והופה – אתם באוויר! (לא לשכוח לשמור)
                </p>
            </div>
            <div className="info">
                <div className="info-block">
                    <p className="info-input">שם</p>
                    <input type="text" className="websit-form-input" name='name' value={name} onChange={onChange} />
                    <div className="input-border"></div>
                </div>
                <div className="info-block">
                    <p className="info-input">כתובת URL</p>
                    <input type="text" className="websit-form-input" name='url' value={url} onChange={onChange} />
                    <div className="input-border"></div>
                </div>

                <div className="info-block">
                    <p className="info-input">מזהה ID או Class של הרכיב המוסתר</p>
                    <input type="text" className="websit-form-input" name='divId' value={divId} onChange={onChange} id="divID" />
                    <div className="input-border"></div>

                </div>
            </div>
            <p>עורך תוכן מתקדם</p>
            <div className="time" id="wysiwyg-editor">
                <Editor apiKey='rr54zoicxkt3ah4i2h3xynyo16biuentcxqycps7ep8l9b0f'
                    initialValue={wysiwyg}
                    init={{
                        height: 500,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | lignleft aligncenter alignright alignjustify | ullist numlist outdent indent | removeformat | help'
                    }}
                    onEditorChange={handleEditorChange}
                />
            </div>

            {saveAlert && (timerPlus.divId !== "" && timerPlus.url !== "" && timerPlus.name !== "") ? <SavedAlert text="ההגדרות נשמרו" /> : saveAlert && (!(timerPlus.divId !== "" && timerPlus.url !== "" && timerPlus.name !== "")) ? <SavedAlert text="אנא מלא את השדות" /> : null}

            <div className="time">
                <div className="day-lable-d">
                    <p>פתיחה</p>
                    <p>סגירה</p>
                </div>
                <div className="day">
                    <p>ראשון</p>
                    <input type="time" placeholder="Open Hour" name='Sunday' value={timeSchedule.Sunday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Sunday' value={timeSchedule.Sunday.closeHour} onChange={handleChangeCloseHour} />
                </div>
                <div className="day">
                    <p>שני</p>
                    <input type="time" placeholder="Open Hour" name='Monday' value={timeSchedule.Monday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Monday' value={timeSchedule.Monday.closeHour} onChange={handleChangeCloseHour} />
                </div>
                <div className="day">
                    <p>שלישי</p>
                    <input type="time" placeholder="Open Hour" name='Tuesday' value={timeSchedule.Tuesday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Tuesday' value={timeSchedule.Tuesday.closeHour} onChange={handleChangeCloseHour} />
                </div>
                <div className="day">
                    <p>רביעי</p>
                    <input type="time" placeholder="Open Hour" name='Wednesday' value={timeSchedule.Wednesday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Wednesday' value={timeSchedule.Wednesday.closeHour} onChange={handleChangeCloseHour} />
                </div>
                <div className="day">
                    <p>חמישי</p>
                    <input type="time" placeholder="Open Hour" name='Thursday' value={timeSchedule.Thursday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Thursday' value={timeSchedule.Thursday.closeHour} onChange={handleChangeCloseHour} />
                </div>
                <div className="day">
                    <p>שישי</p>
                    <input type="time" placeholder="Open Hour" name='Friday' value={timeSchedule.Friday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Friday' value={timeSchedule.Friday.closeHour} onChange={handleChangeCloseHour} />
                </div>
                <div className="day">
                    <p>שבת</p>
                    <input type="time" placeholder="Open Hour" name='Saturday' value={timeSchedule.Saturday.openHour} onChange={handleChangeOpemHour} />
                    <input type="time" placeholder="Close Hour" name='Saturday' value={timeSchedule.Saturday.closeHour} onChange={handleChangeCloseHour} />
                </div>

                <div className="day" id="day-button">
                    {currentTimerPlus._id ? <input type="submit" value="שמור" /> : <input type="submit" value="הוסף" />}
                </div>
                {/* <div>
                    <Link to="/" onClick={() => clearCurrentTimerPlus}><button className="add-website-page-btn">חזור</button></Link>
                </div> */}
            </div>
            {currentTimerPlus.name === '' ? null : <LinkComp id={currentTimerPlus._id} current={currentTimerPlus} function={'timerPlus'} />}

        </form>
    );
};

export default TimerPlusForm
