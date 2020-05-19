import React from 'react'


import { connect } from 'react-redux';


let SvgHolder = ({ svg }) => {
    return (
        <div id="svg-holder" dangerouslySetInnerHTML={{__html:svg}} >
            
        </div>
    )
}
const mapStateToProps = (state) => {
    let svg = state.output.svg
    return { svg }
}
SvgHolder = connect(mapStateToProps, null)(SvgHolder)
export default SvgHolder
