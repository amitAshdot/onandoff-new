import React, { useState, useContext, useEffect } from 'react';
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
import { Link } from 'react-router-dom';
import LinkComp from '../layouts/LinkComp';
const TimerPlusForm = () => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { addTimerPlus, updateTimerPlus, clearCurrentTimerPlus, currentTimerPlus, setCurrentTimerPlus } = timerPlusContext;

    //user effect for edit form , currentTimerPlus is the corrent landingPage
    useEffect(() => {
        if (currentTimerPlus != null) {
            setTimerPlus(currentTimerPlus);
        }
        // if currentTimerPlus is empty, set the inputs (state) back to default
        else {
            setTimerPlus({
                timeSchedule: {
                    Sunday: { openHour: '', closeHour: '' },
                    Monday: { openHour: '', closeHour: '', },
                    Tuesday: { openHour: '', closeHour: '' },
                    Wednesday: { openHour: '', closeHour: '' },
                    Thursday: { openHour: '', closeHour: '' },
                    Friday: { openHour: '', closeHour: '' },
                    Saturday: { openHour: '', closeHour: '' }
                },
                wysiwyg: '',
                name: '',
                url: '',
                divId: '',
            })
        }
    }, [timerPlusContext, currentTimerPlus]);

    const [timerPlus, setTimerPlus] = useState({
        timeSchedule: {
            Sunday: { openHour: '', closeHour: '' },
            Monday: { openHour: '', closeHour: '', },
            Tuesday: { openHour: '', closeHour: '' },
            Wednesday: { openHour: '', closeHour: '' },
            Thursday: { openHour: '', closeHour: '' },
            Friday: { openHour: '', closeHour: '' },
            Saturday: { openHour: '', closeHour: '' }
        },
        wysiwyg: '',
        name: '',
        url: '',
        divId: '',
    });

    const { timeSchedule, wysiwyg, name, url, divId } = timerPlus

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
    const onSubmit = e => {
        debugger
        e.preventDefault();
        currentTimerPlus._id ? updateTimerPlus(timerPlus) : addTimerPlus(timerPlus);
        // function from timerPlusContext
        setCurrentTimerPlus(timerPlus);
    };


    return (
        <form onSubmit={onSubmit}>
            {currentTimerPlus._id ? <h2>  ערוך עמוד נחיתה: {name}</h2> : <h2>הוסף עמוד נחיתה</h2>}
            <div className="info">
                <p>עם טיימר+ תוכלו לשנות תוכן, להעלים ובעצם לבצע כל שינוי שתחשקו בקלות וביעילות</p>
                <input type="text" className="websit-form-input" placeholder="שם" name='name' value={name} onChange={onChange} />
                <input type="text" className="websit-form-input" placeholder="דומיין העמוד" name='url' value={url} onChange={onChange} />
                <input type="text" className="websit-form-input" placeholder="שם או id של המקטע" name='divId' value={divId} onChange={onChange} />
            </div>
            <div className="time" id="wysiwyg-editor">
                <textarea
                    id="wysiwyg"
                    name="wysiwyg"
                    onChange={onChange}
                    placeholder="כתבו את הקוד כאן "
                    value={wysiwyg}
                    style={{ width: '100%', height: '150px' }}
                />
            </div>
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

                <div>
                    {currentTimerPlus._id ? <input type="submit" value="שמור" /> : <input type="submit" value="הוסף" />}
                </div>
                <div>
                    <Link to="/" onClick={() => clearCurrentTimerPlus}><button className="add-website-page-btn">חזור</button></Link>
                </div>
            </div>
            <p>wysiwyg editor</p>
            {currentTimerPlus.name === '' ? null : <LinkComp id={currentTimerPlus._id} current={currentTimerPlus} function={'timerPlus'}/>}
        </form>
    );
};

export default TimerPlusForm
