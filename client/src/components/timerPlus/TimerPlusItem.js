import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import PropType from 'prop-Type'
import TimerPlusContext from '../../context/timerPlus/TimerPlusContext';
import { useSpring, animated, config , animated as a} from 'react-spring'

import DeleteAlert from '../layouts/DeleteAlert'

const TimerPlusItem = ({ timerPlus }) => {
    const timerPlusContext = useContext(TimerPlusContext);
    const { setCurrentTimerPlus } = timerPlusContext
    const { name, url, } = timerPlus;

    const [deleteFlag, setflag] = useState(false);
    const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: config.stiff, })


    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
      opacity: flipped ? 1 : 0,
      transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
      config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <animated.div className="websiteItem" id="websiteItem" style={fadeIn} config={{ delay: 10000 }}>
            <div className="aw-website-details">
                <p id="website-info"><i className="fa fa-angle-left" /> {name.charAt(0).toUpperCase() + name.slice(1)}</p>
                <p id="formType">טיימר+</p>
                <p><i className="fa fa-globe" />{url}</p>
                <Link to='/addtimerplus' className="editItem"> <button className="websiteBtn" id="editBtn" onClick={() => setCurrentTimerPlus(timerPlus)}>ערוך</button></Link>
            </div>
            {/* <div onClick={() => set(state => !state)}>
                <a.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform }} />
                <a.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }} />
            </div> */}
            <div className="aw-website-btn">
                <button className="websiteBtn" id="deleteBtn" onClick={() => setflag(true)}>מחק</button>
                
                {deleteFlag?<DeleteAlert item={timerPlus} setflag={setflag} deleteFlag={deleteFlag} /> : null}

            </div>
        </animated.div>

    )
}

export default TimerPlusItem
