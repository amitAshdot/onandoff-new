
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Clock() {
    const [state, setState] = useState({ count: 1 });
    const { count } = state;
    let flag = useInterval(() => {
        if (count === 12)
            setState({ count: 1 });

        else
            setState({ count: count + 1 });
    }, 500);

    return (
        <div className="exampleClock">
            <h1>לדוגמא:</h1>
            <h3>הכפתור יופיע בין השעות 1-8 </h3>
            <article className="clock">
                <div className="hours-container">
                    <div className="hours"></div>
                </div>
                <div className="minutes-container">
                    <div className="minutes"></div>
                </div>
                <br />
            </article>
            <section>
                <div className="clockTimerClass">
                    {(count > 1 && count <= 8) ?
                        <button style={{width : "100%"}}>
                            לשיחה חייגו <br/> 012-3456789
                    </button>
                        : "המוקד סגור כעת"}
                </div>

            </section>
        </div>
    )
}
export default Clock;


const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}


