import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

// import onAndOf from '../action/onAndOff'

const LinkComp = (props) => {
    let parts = window.location.href.split('/');
    let lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    let copyTextHeader = '';
    let copyTextBody = '';
    if (lastSegment === 'addtimerplus') {
        let getUrl = window.location.host;
        debugger
        copyTextHeader = `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type='text/javascript' src='http://${getUrl}/onAndOff.js'> </script>` 
        copyTextBody = `<script type='text/javascript'>timerPluse("${props.current._id}") ;</script>`;    }
    else if (lastSegment === 'addwebsite') {
        let getUrl = window.location.host;
        copyTextHeader = `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type='text/javascript' src='http://${getUrl}/onAndOff.js'></script>`
        copyTextBody = `<script type='text/javascript'>onAndOffFunction("${props.current._id}") ;</script>`;
    } else {
        copyTextHeader = `(function onAndOffFunciton(id) {
            return id;
          })('${props.current._id}');`
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
            <div className="codeContainer">
                <CopyToClipboard text={copyTextHeader} >
                    <span className="tooltiptext" id="myTooltip"><i className="fa fa-copy" /></span>
                </CopyToClipboard>
                <p className="code-info">הוסף את קטעי הקוד הבאים בתוך ה-header</p>
                <div className="code" >
                    <code>{copyTextHeader}</code>
                </div>
            </div>
            <div className="codeContainer">
                <p className="code-info">הוסף את קטעי הקוד הבאים בסוף ה-body</p>
                <CopyToClipboard text={copyTextBody} >
                    <span className="tooltiptext" id="myTooltip"><i className="fa fa-copy" /></span>
                </CopyToClipboard>
                <div className="code" >
                    <code>{copyTextBody}</code>
                </div>
            </div>
        </div>
    )
}
export default LinkComp





// `(function onAndOffFunciton(id) {
//     return id;
//   })('${props.current._id}');`


// <!-- Google Tag Manager -->
// <script > (function(w, d, s, l, i) {
//     w[l] = w[l] || [];
//     w[l].push({
//         'gtm.start': new Date().getTime(),
//         event: 'gtm.js'
//     });
//     var f = d.getElementsByTagName(s)[0],
//         j = d.createElement(s),
//         dl = l != 'dataLayer' ? '&l=' + l : '';
//     j.async = true;
//     j.src =
//         'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
//     f.parentNode.insertBefore(j, f);
// })(window, document, 'script', 'dataLayer', 'GTM-1234'); < /script>
// <!-- End Google Tag Manager --></script>


// <!-- Google Tag Manager (noscript) -->
// <noscript > < iframe src = "https://www.googletagmanager.com/ns.html?id=GTM-1234"
// height = "0"
// width = "0"
// style = "display:none;visibility:hidden" > < /iframe></noscript >
//     <!-- End Google Tag Manager (noscript) --></noscript>




// ${props.function}(
//     ${props.current.divId} ,
//     ${props.current.context} ,
//     ${props.current.timeSchedule.Sunday.openHour} ,${props.current.timeSchedule.Sunday.closeHour},
//     ${props.current.timeSchedule.Monday.openHour} ,${props.current.timeSchedule.Monday.closeHour},
//     ${props.current.timeSchedule.Tuesday.openHour} ,${props.current.timeSchedule.Tuesday.closeHour},
//     ${props.current.timeSchedule.Wednesday.openHour} ,${props.current.timeSchedule.Wednesday.closeHour},
//     ${props.current.timeSchedule.Thursday.openHour} ,${props.current.timeSchedule.Thursday.closeHour},
//     ${props.current.timeSchedule.Friday.openHour} ,${props.current.timeSchedule.Friday.closeHour},
//     ${props.current.timeSchedule.Saturday.openHour} ,${props.current.timeSchedule.Saturday.closeHour},