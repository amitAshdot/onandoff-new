import React from 'react'

 const Info = (props) => {

    const {onChange , name, url , divId} = props;
    return (
        <div className="info">
                <div className="info-block">
                    <p className="info-input">שם</p>
                    <input type="text" className="websit-form-input" name='name' value={name} onChange={onChange} />
                    <div className="input-border"></div>
                </div>
                <div className="info-block">
                    <p className="info-input">כתובת URL</p>
                    <input type="text" className="websit-form-input" name='url' value={url} onChange={onChange} />
                    <div className="input-border"></div>
                </div>

                <div className="info-block">
                    <p className="info-input">מזהה ID או Class של הרכיב המוסתר</p>
                    <input type="text" className="websit-form-input" name='divId' value={divId} onChange={onChange} id="divID" />
                    <div className="input-border"></div>

                </div>
            </div>
    )
}
export default Info
