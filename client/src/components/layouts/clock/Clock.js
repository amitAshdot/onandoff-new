
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

function Clock() {
    const [state, setState] = useState({ count: 0 });
    const { count } = state;
    let flag = useInterval(() => {
        if (count === 12) {
            console.log('enter')
            setState({ count: 0 });
        }
        else
            setState({ count: count + 1 });
    }, 500);

    return (
        <div>
            <h1>לדוגמא:</h1>
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
                <div>
                    {(count > 0 && count < 8) ?
                        <button>
                            cdscds
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


