import React from 'react'
import { useSpring,  animated } from 'react-spring'

 const DelayWraper = ({children}) => {

    const delay = useSpring({opacity: toggle ? 1 : 0})

    return (
        <animated.div style={delay}>
            {children}  
        </animated.div>
    )
}
export default DelayWraper