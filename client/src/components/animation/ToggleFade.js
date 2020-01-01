import React,{useContext} from 'react'
import {useSpring, animated} from 'react-spring'
import WebsiteContext from '../../context/website/WebsiteContext'

export const ToggleFade = () => {
    const websiteContext = useContext(WebsiteContext);
    const { isShow} = websiteContext
    const fade =useSpring({
        opacity:isShow?1:0
    })

    return (
        <animated.div>
            
        </animated.div>
    )
}
