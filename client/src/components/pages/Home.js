import React, { Fragment, useState, useContext, useEffect } from 'react'
// import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext'
import WebsiteContext from '../../context/website/WebsiteContext'
import WebsiteItem from '../websites/WebsiteItem'
import Loading from '../layouts/Loading'

const Home = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, user } = authContext;

    const websiteContext = useContext(WebsiteContext);
    const { websites, getWebsites, loading, setCurrent, clearCurrent, current } = websiteContext;
    //user effect for edit form , current is the corrent landingPage
    useEffect(() => {
        if (current != null) {
            clearCurrent();
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
    useEffect(() => {
        authContext.loadUser();
        //eslint-disable-next-line
    }, []);
    useEffect(() => {
        getWebsites();
        //eslint-disable-next-line
    }, []);

    let websiteList = (websites.map(website => {
        if (website.isShow === 'true') return <WebsiteItem key={website._id} website={website} />
    })
    );
    // ReactDOM.render(websiteList, document.getElementById('root'));

    const onSubmit = e => {
        e.preventDefault();
        setCurrent();
    }
    const onChange = e => { setWebsite({ ...website, [e.target.name]: e.target.value }); }

    const notLogin = (
        <Fragment>
            <div className="hp-main">
                <div className="hp-info">
                    <h2>מציגים למשתמש רק את מה שרלוונטי!</h2>
                    
                    <p>
                        עם on and off תוכלו לנהל בפשטות ובקלות את השעות שבהם מוצגים כפתורים, מספרי טלפון וכל רכיב אחר שתבחרו
                    </p>
                    <Link to='/login'><button className="hp-button">התחבר</button></Link>
                    <p className="full-width">עוד אין לך חדשבון?!</p>
                    <Link to='/register'><button className="hp-button register" >הירשם</button></Link> 
                </div>
            </div>
        </Fragment>
    )

    return (
        <div>
            {isAuthenticated ? <h1>שלום {user && user.name}</h1> : null}
            {loading ? <Loading /> : null}

            {isAuthenticated ?
                <div className="createWeb">
                    <form onSubmit={onSubmit}>
                        {/* <input type="text" placeholder="שם" name='name' value={name} onChange={onChange} />
                        <input type="text" placeholder="דומיין העמוד" name='url' value={url} onChange={onChange} />
                        <input type="text" placeholder="שם או id של המקטע" name='divId' value={divId} onChange={onChange} /> */}
                        <p>כאן תוכל להוסיף ולנהל את כל הטיימרים שלך</p>
                        <Link to="/addwebsite"><input type="submit" value="הוסף" onClick={() => setCurrent(website)} /></Link>
                    </form>
                </div>
                : notLogin
            }
            <div className="websites" id="personal">
                {isAuthenticated ? websiteList : null}
            </div>
        </div >
    )

}

export default Home
