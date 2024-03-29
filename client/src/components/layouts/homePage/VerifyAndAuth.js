import React, { Fragment, useState, useContext } from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import WebsiteContext from '../../../context/website/WebsiteContext';
import Websites from '../../websites/Websites';
import TimerPlusContext from '../../../context/timerPlus/TimerPlusContext';
import TimerPlus from '../../timerPlus/TimersPlus';

// import Loading from '../layouts/Loading'

export const VerifyAndAuth = () => {
    const websiteContext = useContext(WebsiteContext);
    const { setCurrent } = websiteContext;
    const timerPlusContext = useContext(TimerPlusContext);
    const { setCurrentTimerPlus } = timerPlusContext;
    const [website, setWebsite] = useState({
        timeSchedule: {
            Sunday: { openHour: '00:00', closeHour: '23:00' },
            Monday: { openHour: '00:00', closeHour: '23:00', },
            Tuesday: { openHour: '00:00', closeHour: '23:00' },
            Wednesday: { openHour: '00:00', closeHour: '23:00' },
            Thursday: { openHour: '00:00', closeHour: '23:00' },
            Friday: { openHour: '00:00', closeHour: '23:00' },
            Saturday: { openHour: '00:00', closeHour: '23:00' }
        },
        isShow: true,
        name: '',
        url: '',
        divId: '',
        color: '#55a658',
        selected: 5,
        swatches: [
            "rgb(157, 41, 177)",
            "#673AB7",
            "rgba(182, 73, 98, 1)",
            "#00BCD4",
            "LightSeaGreen",
            "#55a658",
            "rgba(8, 136, 124, .7)",
            "#CDDC39"
        ],
    });
    const [timerPlus, setTimersPlus] = useState({
        isShow: true,
        wysiwyg: '',
        wysiwygEditor: '',
        eventInput: '',
        evenCategoryInput: '',
        eventLabelInput: '',
        timeSchedule: {
            Sunday: { openHour: '00:00', closeHour: '23:00' },
            Monday: { openHour: '00:00', closeHour: '23:00', },
            Tuesday: { openHour: '00:00', closeHour: '23:00' },
            Wednesday: { openHour: '00:00', closeHour: '23:00' },
            Thursday: { openHour: '00:00', closeHour: '23:00' },
            Friday: { openHour: '00:00', closeHour: '23:00' },
            Saturday: { openHour: '00:00', closeHour: '23:00' }
        },
        color: '#55a658',
        swatches: [
            "rgb(157, 41, 177)",
            "#673AB7",
            "rgba(182, 73, 98, 1)",
            "#00BCD4",
            "LightSeaGreen",
            "#55a658",
            "rgba(8, 136, 124, .7)",
            "#CDDC39"
        ],
        selected: 5,
        name: '',
        url: '',
        divId: '',
        withGoogleAnalytics: false,
    });
    const onSubmit = e => {
        e.preventDefault();
        setCurrent();
    }
    const [search, setsearch] = useState({ searchInput: '' });
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
            <input type="text" value={search.searchInput} name="searchInput" placeholder="חפש..." onChange={onChange} />
            <div className="websites" id="personal">
                <Websites searchName={search.searchInput} />
                <TimerPlus searchName={search.searchInput} />
            </div>
        </Fragment>
    )
}
export default VerifyAndAuth
