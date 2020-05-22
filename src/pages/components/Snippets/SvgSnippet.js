import React, { useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';
import { connect } from 'react-redux';
import { format, download } from './../../utils'



let SvgSnippet = ({ svg }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [svg])
    return (
        <div id="output-svg">
            <div className="context">
                <h2 className="code-heading">SVG Snippet</h2>
                <button className="download-btn" onClick={() => { download('text.svg', format(svg)) }}>Download SVG</button>
            </div>
            <pre>
                <code className="language-html">
                    {format(svg)}
                </code>
            </pre>
        </div>
    )
}

const mapStateToProps = (state) => {
    let svg = state.output.svg
    return { svg }
}

SvgSnippet = connect(mapStateToProps, null)(SvgSnippet)
export default SvgSnippet;



