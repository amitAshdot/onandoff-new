import React from 'react'

 const PageWraper = ({children}) => {
    return (
        <div className="pageWraper" style={{position:"absolute",width:"80vw"}}>
            {children}
        </div>
    )
}
export default PageWraper