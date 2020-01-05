import React from 'react'
import { useSpring,  animated } from 'react-spring'

 const DelayWraper = ({children,index}) => {
    const delay = useSpring({
        from: { opacity: 0, transform: 'scale(0.98)' },
        to: { opacity: 1, transform: 'scale(1)' },
        // from: { opacity: 0 },
        // to: { opacity: 1 },
        config: { duration: 200 },
        // delay : index === 0 ? 0: index *100 
    })
    return (
        <animated.div style={delay}>
            {children}  
        </animated.div>
    )
}
export default DelayWraper