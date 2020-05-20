import React, { Fragment } from 'react'
import Bmc from './Bmc'
const Header = () => {
    return (
        <Fragment>
            <div>
                <h1 className="title">SVG TEXT ANIMATION GENERATOR</h1>
                <h4 className="subtitle"> (Pure CSS no libraries used)</h4>
            </div>
            <div className="extras">
            </div>
            <Bmc />
        </Fragment>

    )
}

export default Header
