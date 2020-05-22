import React, { useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';
import { connect } from 'react-redux'
import { download } from './../../utils'

let JsSnippet = ({ js }) => {
    useEffect(() => {
        Prism.highlightAll()
    }, [js])
    return (
        <div id="output-js">
            <div className="context">
                <h2 className="code-heading">JS Snippet</h2>
                <button className="download-btn" onClick={() => { download('text-animation.js', js) }}>Download JS</button>
            </div>
            <pre>
                <code className="language-js">
                    {js}
                </code>
            </pre>
        </div>

    )
}

const mapStateToProps = (state) => {
    let js = state.output.js;
    return { js }
}


JsSnippet = connect(mapStateToProps, null)(JsSnippet)

export default JsSnippet

