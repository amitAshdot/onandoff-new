import React, { useState } from 'react'
import { Transition, animated } from 'react-spring/renderprops'

const SavedAlert = (props) => {
    const [state, setstate] = useState(true);
    setTimeout(() => {
        setstate(false)
    }, 1500)
    return (
        <div className="copyAlert">
            <Transition
                items={state}
                from={{ overflow: 'hidden', height: 0 }}
                enter={[{ height: 'auto' }]}
                leave={{ height: 0 }}
            >
                {show =>
                    show && (anime =>
                        <animated.p style={anime} className="copyAlert-text">{props.text}</animated.p>)
                }
            </Transition>
        </div>
    )
}
export default SavedAlert
