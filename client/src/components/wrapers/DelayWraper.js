import React from 'react'
import { useSpring, animated } from 'react-spring'

const DelayWraper = ({ children, index }) => {
    const delay = useSpring({
        from: { opacity: 0, transform: 'scale(0.90)' },
        to: { opacity: 1, transform: 'scale(1)', display: 'inline-flex', width: '32%', margin: '0.4vw', float: 'right' },
        // from: { opacity: 0 },
        // to: { opacity: 1 },
        config: { duration: 200 },
        // delay : index === 0 ? 0: index *100 
    })
    return (
        <animated.div className="homepageWraper" style={delay}>
            {children}
        </animated.div>
    )
}
export default DelayWraper