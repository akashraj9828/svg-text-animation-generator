import React, { Fragment } from 'react'

const CodeHolder = ({children}) => {
    return (
        <Fragment>
        <div className="code-holder">
            {children}
        </div>
        </Fragment>
    )
}
export default CodeHolder
