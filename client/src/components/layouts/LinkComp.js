import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// import onAndOf from '../action/onAndOff'

const LinkComp = (props) => {
debugger
    // const temp = onAndOf.onAndOffFunction(`${props.current.divId} , ${props.current.timeSchedule}}`);
    let parts = window.location.href.split('/');
    let lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    let copyText =''
    debugger
    if(lastSegment ==='addtimerplus'){
        let getUrl = window.location.host;
         copyText = `<script type='text/javascript' src='http://timer.${getUrl}/onandoff.js'> </script>   
        <script type='text/javascript'>
        onAndOffFunction(
        ${props.current.divId} ,
        ${props.current.context} 
        ) ;</script>`;
    }
    else if(lastSegment ==='addwebsite'){
        let getUrl = window.location.host;
         copyText = `<script type='text/javascript' src='http://timer.${getUrl}/onandoff.js'> </script>   
        <script type='text/javascript'>
        onAndOffFunction(
        ${props.current.divId} ,
        ${props.current.timeSchedule.Sunday.openHour} ,${props.current.timeSchedule.Sunday.closeHour},
        ${props.current.timeSchedule.Monday.openHour} ,${props.current.timeSchedule.Monday.closeHour},
        ${props.current.timeSchedule.Tuesday.openHour} ,${props.current.timeSchedule.Tuesday.closeHour},
        ${props.current.timeSchedule.Wednesday.openHour} ,${props.current.timeSchedule.Wednesday.closeHour},
        ${props.current.timeSchedule.Thursday.openHour} ,${props.current.timeSchedule.Thursday.closeHour},
        ${props.current.timeSchedule.Friday.openHour} ,${props.current.timeSchedule.Friday.closeHour},
        ${props.current.timeSchedule.Saturday.openHour} ,${props.current.timeSchedule.Saturday.closeHour},
        ) ;</script>`;
    }else{

    }


    // const myFunction = () => {
    //     var copyText = document.getElementById("myInput");
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999);
    //     document.execCommand("copy");

    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copied: " + copyText.value;
    // }

    // const outFunc = () => {
    //     var tooltip = document.getElementById("myTooltip");
    //     tooltip.innerHTML = "Copy to clipboard";
    // }
    
    return (
        <div className="linkToCopy">
            <CopyToClipboard text={copyText} >
                <span className="tooltiptext" id="myTooltip"><i className="fa fa-copy" /></span>
            </CopyToClipboard>
            <p className="code-info">הוסף את קטעי הקוד הבאים בתוך ה-header</p>
            <div className="code" >

                <code>{copyText}</code>

            </div>
        </div>
    )
}
export default LinkComp
