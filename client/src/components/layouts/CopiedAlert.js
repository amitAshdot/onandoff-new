import React,{useState} from 'react'
import { Transition, animated } from 'react-spring/renderprops'

const CopiedAlert = () => {
    const [state, setstate] = useState(true);
    setTimeout(() => {
        setstate(false)
    }, 1500)
    return (
        <Transition
            items={state}
            from={{ overflow: 'hidden', height: 0 }}
            enter={[{ height: 'auto' }]}
            leave={{ height: 0 }}
        >
            {show =>
                show && (props =>
                     <animated.div style={props} className="copyAlert">✌️הועתק</animated.div>)
            }
        </Transition>
    )
}
export default CopiedAlert
