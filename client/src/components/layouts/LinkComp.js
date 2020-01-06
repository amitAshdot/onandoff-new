import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
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
    const copied = props.copied

    return (
        <div className="linkToCopy">
            {/* {copy ? <CopiedAlert /> : null} */}
            <CopyToClipboard text={copyTextHeader} >
            <div className="codeContainer" onClick={copied}>
                    {/* <span className="tooltiptext" id="myTooltip" ><i className="fa fa-copy" /></span> */}
                <p className="code-info">הוסף את קטעי הקוד הבאים בתוך ה-header</p>
                <div className="code" >
                    <code>{copyTextHeader}</code>
                </div>
            </div>
            </CopyToClipboard>
            <CopyToClipboard text={copyTextBody}  >
            <div className="codeContainer" onClick={copied}>
                <p className="code-info">הוסף את קטעי הקוד הבאים בסוף ה-body</p> 
                <div className="code" >
                    <code>{copyTextBody}</code>
                    {/* <span className="tooltiptext" id="myTooltip" onClick={() => copied()}><i className="fa fa-copy" /></span> */}
                </div>
            </div>
            </CopyToClipboard>
        </div>
    )
}
export default LinkComp