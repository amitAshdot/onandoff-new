import React, { Fragment, useState, useContext } from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import WebsiteContext from '../../../context/website/WebsiteContext';
import Websites from '../../websites/Websites';
import TimerPlusContext from '../../../context/timerPlus/TimerPlusContext';
import TimerPlus from '../../timerPlus/TimersPlus';
import Search from '../../layouts/Search';

// import Loading from '../layouts/Loading'

export const VerifyAndAuth = () => {


    const websiteContext = useContext(WebsiteContext);
    const { setCurrent } = websiteContext;

    const timerPlusContext = useContext(TimerPlusContext);
    const { setCurrentTimerPlus } = timerPlusContext;

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
    });
    const [timerPlus, setTimersPlus] = useState({
        wysiwyg: '',
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
    });
    const onSubmit = e => {
        e.preventDefault();
        setCurrent();
    }

    const [search, setsearch] = useState({searchInput : ''});
    const onChange = e => { setsearch({ ...search, [e.target.name]: e.target.value }); }
    return (
        <Fragment>
            <div className="createWeb">
                <form onSubmit={onSubmit}>
                    <p>כאן תוכל להוסיף ולנהל את כל הטיימרים שלך</p>
                    <Link to="/addwebsite"><input type="submit" value="הוסף" onClick={() => setCurrent(website)} /></Link>
                    <Link to="/addtimerplus"><input type="submit" id="addTimerPlus" value="הוסף טיימר+" onClick={() => setCurrentTimerPlus(timerPlus)} /></Link>
                </form>
            </div>
            <input type="text" value={search.searchInput} name="searchInput" placeholder="חפש..." onChange={onChange}  />
            <div className="websites" id="personal">
                <Websites  searchName={search.searchInput}/>
                <TimerPlus searchName={search.searchInput}/>
            </div>
        </Fragment>
    )
}
export default VerifyAndAuth
