import React from 'react';

const GoogleTag = (props) => {
    const handleChange = e =>{
        props.withGoogleAnalytics ? 
        props.setTimerPlus({ 
            ...props.timerPlus, 
            wysiwyg:`<a href="#" onclick="gtag('event', ${props.timerPlus.eventInput}, {'event_category' : ${props.timerPlus.evenCategoryInput},'event_label' : ${props.timerPlus.eventLabelInput} });"> ${props.timerPlus.wysiwyg} </a>`,
            withGoogleAnalytics: !props.withGoogleAnalytics,
        })
        :
        props.setTimerPlus({ ...props.timerPlus,  withGoogleAnalytics: !props.withGoogleAnalytics, wysiwyg:`${props.timerPlus.wysiwyg}`});
    }
    return (
        <div >
            <label>
                <input
                    type="checkbox"
                    name="isFriendly"
                    checked={props.withGoogleAnalytics}
                    onChange={handleChange}
                /> להוסיף גוגל אנאליטיקס
             </label>
            <p>כאן תוכלו לממש גוגל אנאליטיקס</p>
            <p>התבנית הינה כזאת:</p>
            <p>{`<a href="#" onclick="gtag('event', 'event_name', {   'event_category' : 'even_category_name',   'event_label' : 'event_label_name' });`}</p>
            <p>
                event_name
            </p>
            <input type="text" className="websit-form-input" name='eventInput' value={props.eventInput} onChange={props.onChange} placeholder="eventInput" />

            <p>
                event_category_name
            </p>
            <input type="text" className="websit-form-input" name='evenCategoryInput' value={props.evenCategoryInput} onChange={props.onChange} placeholder="evenCategoryInput" />

            <p>
                event_label_name
            </p>
            <input type="text" className="websit-form-input" name='eventLabelInput' value={props.eventLabelInput} onChange={props.onChange} placeholder="eventLabelInput" />

        </div>
    )
}
export default GoogleTag;
