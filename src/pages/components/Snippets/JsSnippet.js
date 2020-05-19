import React, { useEffect } from 'react'
import { setTextAnimation, setAnimation } from "./../../logic/setAnimation"
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';

const JsSnippet = () => {
    let js_function = setTextAnimation
    let jscode = ""
    if (js_function) {
        jscode = js_function.toString()
    }
    let js_function_caller = '\n\n' + setAnimation(true)
    Prism.highlightAll();

    return (
        <div id="output-js">
            <h2 className="code-heading">JS Snippet</h2>
            <pre>
                <code className="language-js">
                    {jscode}
                    {js_function_caller}
                </code>
            </pre>
        </div>
    )
}

export default JsSnippet;


