import React, { useState, useContext, useEffect } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';
import { Link } from 'react-router-dom';
import LinkComp from '../layouts/LinkComp';
const WebsiteForm = () => {
    const websiteContext = useContext(WebsiteContext);
    const { addWebsite, updateWebsite, clearCurrent, current, setCurrent } = websiteContext;

    //user effect for edit form , current is the corrent landingPage
    useEffect(() => {
        if (current != null) {
            setWebsite(current);
        }
        //if current is empty, set the inputs (state) back to default
        else {
            setWebsite({
                timeSchedule: {
                    Sunday: { openHour: '', closeHour: '' },
                    Monday: { openHour: '', closeHour: '' },
                    Tuesday: { openHour: '', closeHour: '' },
                    Wednesday: { openHour: '', closeHour: '' },
                    Thursday: { openHour: '', closeHour: '' },
                    Friday: { openHour: '', closeHour: '' },
                    Saturday: { openHour: '', closeHour: '' }
                },
                name: '',
                url: '',
                divId: '',
            })
        }
    }, [websiteContext, current]);

    const [website, setWebsite] = useState({
        timeSchedule: {
            Sunday: { openHour: '', closeHour: '' },
            Monday: { openHour: '', closeHour: '', },
            Tuesday: { openHour: '', closeHour: '' },
            Wednesday: { openHour: '', closeHour: '' },
            Thursday: { openHour: '', closeHour: '' },
            Friday: { openHour: '', closeHour: '' },
            Saturday: { openHour: '', closeHour: '' }
        },
        name: '',
        url: '',
        divId: '',
    });

    const { timeSchedule, name, url, divId } = website

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
        current._id ? updateWebsite(website) : addWebsite(website);
        // function from websiteContext
        setCurrent(website);
    };

    return (
        <form onSubmit={onSubmit}>
            {current._id ? <h2>  ערוך עמוד נחיתה: {name}</h2> : <h2>הוסף עמוד נחיתה</h2>}
            <div className="info">
                <input type="text" className="websit-form-input" placeholder="שם" name='name' value={name} onChange={onChange} />
                <input type="text" className="websit-form-input" placeholder="דומיין העמוד" name='url' value={url} onChange={onChange} />
                <input type="text" className="websit-form-input" placeholder="שם או id של המקטע" name='divId' value={divId} onChange={onChange} />
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
                    {current._id ? <input type="submit" value="שמור" /> : <input type="submit" value="הוסף" />}
                </div>
                <div>
                    <Link to="/" onClick={()=>clearCurrent}><button className="add-website-page-btn">חזור</button></Link>
                </div>
            </div>



            {current.name === '' ? null : <LinkComp id={current._id} current={current} function={'onAndOffFunction'} />}

        </form>
    );
};

export default WebsiteForm
