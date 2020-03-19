import React from 'react'
// import { Transition, animated } from 'react-spring/renderprops'
// import { useTransition, animated } from 'react-spring'
import { useSpring, animated } from 'react-spring'

const SavedAlert = (props) => { 
    const style = useSpring({
        opacity: 1,
        backgroundColor: props.type ==='sec' ? '#55a658': '#ff000099',
        from: { opacity: 0 },
        
    })
    const styleMain = props.type ==='sec' ? '#55a658': '#F44336';
    return <animated.div className="copyAlert-text" style={style}><div className="saveAlertText" style={{styleMain}}>{props.text}</div></animated.div>
}
export default SavedAlert

