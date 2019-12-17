import React, { useState, useContext, useEffect } from 'react';
import WebsiteContext from '../../context/website/WebsiteContext';
import * as fs from 'fs';
import LinkComp from '../layouts/LinkComp';

const EditWeb = () => {

    const websiteContext = useContext(WebsiteContext);
    const { addWebsite, updateWebsite, clearCurrent, current } = websiteContext;

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
    //eslint-disable-next-line
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
    const onChange = e => { setWebsite({ ...website, [e.target.name]: e.target.value });}
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
        updateWebsite(website);// function from websiteContext
        setWebsite({//after adding set back to default
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
    };

    return (
        <form onSubmit={onSubmit}>
            <h2>ערוך עמוד נחיתה</h2>
            <input type="text" placeholder="שם" name='name' value={name} onChange={onChange} />
            <input type="text" placeholder="דומיין העמוד" name='url' value={url} onChange={onChange} />
            <input type="text" placeholder="שם או id של המקטע" name='divId' value={divId} onChange={onChange} />
            <div className="day">
                <span>פתיחה</span>
                <span>סגירה</span>

            </div>
            <div className="day">
                <span>ראשון</span>
                <input type="time" placeholder="Open Hour" name='Sunday' value={timeSchedule.Sunday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Sunday' value={timeSchedule.Sunday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div className="day">
                <span>שני</span>
                <input type="time" placeholder="Open Hour" name='Monday' value={timeSchedule.Monday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Monday' value={timeSchedule.Monday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div className="day">
                <span>שלישי</span>
                <input type="time" placeholder="Open Hour" name='Tuesday' value={timeSchedule.Tuesday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Tuesday' value={timeSchedule.Tuesday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div className="day">
                <span>רביעי</span>
                <input type="time" placeholder="Open Hour" name='Wednesday' value={timeSchedule.Wednesday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Wednesday' value={timeSchedule.Wednesday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div className="day">
                <span>חמישי</span>
                <input type="time" placeholder="Open Hour" name='Thursday' value={timeSchedule.Thursday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Thursday' value={timeSchedule.Thursday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div className="day">
                <span>שישי</span>
                <input type="time" placeholder="Open Hour" name='Friday' value={timeSchedule.Friday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Friday' value={timeSchedule.Friday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div className="day">
                <span>שבת</span>
                <input type="time" placeholder="Open Hour" name='Saturday' value={timeSchedule.Saturday.openHour} onChange={handleChangeOpemHour} />
                <input type="time" placeholder="Close Hour" name='Saturday' value={timeSchedule.Saturday.closeHour} onChange={handleChangeCloseHour} />
            </div>
            <div>
                <input type="submit" value="עדכן" />
            </div>

                
                {current ? <LinkComp  id={current._id}/> : null}

        </form>
    );
};

export default EditWeb
