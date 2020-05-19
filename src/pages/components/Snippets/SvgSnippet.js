import React from 'react'
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';
import { connect } from 'react-redux';

let SvgSnippet = ({svg}) => {
    Prism.highlightAll();
    return (
        <div id="output-svg">
            SVG SNIPPET
            <pre>
                <code className="language-html">
                    {svg}
                </code>
            </pre>
        </div>
    )
}

const mapStateToProps = (state) =>{
    let svg=state.output.svg
    return {svg}
}

SvgSnippet=connect(mapStateToProps,null)(SvgSnippet)
export default SvgSnippet;



