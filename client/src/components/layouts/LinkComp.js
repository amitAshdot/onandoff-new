import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopiedAlert from './CopiedAlert';
const LinkComp = (props) => {
    let parts = window.location.href.split('/');
    let lastSegment = parts.pop() || parts.pop();  // handle potential trailing slash
    let copyTextHeader = '';
    let copyTextBody = '';
    if (lastSegment === 'addtimerplus') {
        let getUrl = window.location.host;
        copyTextHeader = `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type='text/javascript' src='https://${getUrl}/onAndOff.js'> </script>`
        copyTextBody = `<script type='text/javascript'>timerPlus("${props.current._id}") ;</script>`;
    }
    else if (lastSegment === 'addwebsite') {
        let getUrl = window.location.host;
        copyTextHeader = `<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
        <script type='text/javascript' src='https://${getUrl}/onAndOff.js'></script>`
        copyTextBody = `<script type='text/javascript'>onAndOffFunction("${props.current._id}") ;</script>`;
    } else {
        copyTextHeader = `(function onAndOffFunciton(id) {
            return id;
          })('${props.current._id}');`
    }

    const [copy, setCopy] = useState(false);

    const copied = () => {
        setCopy(true)
        setTimeout(() => {
            setCopy(false)
        }, 2000)
    }

    return (

        <div className="linkToCopy">
            {copy ? <CopiedAlert /> : null}

            <div className="codeContainer">
                <CopyToClipboard text={copyTextHeader} >
                    <span className="tooltiptext" id="myTooltip" onClick={() => copied()}><i className="fa fa-copy" /></span>
                </CopyToClipboard>
                <p className="code-info">הוסף את קטעי הקוד הבאים בתוך ה-header</p>
                <div className="code" >
                    <code>{copyTextHeader}</code>
                </div>
            </div>
            <div className="codeContainer">
                <p className="code-info">הוסף את קטעי הקוד הבאים בסוף ה-body</p>
                <CopyToClipboard text={copyTextBody}  >
                    <span className="tooltiptext" id="myTooltip" onClick={() => copied()}><i className="fa fa-copy" /></span>
                </CopyToClipboard>
                <div className="code" >
                    <code>{copyTextBody}</code>
                </div>
            </div>
        </div>
    )
}
export default LinkComp