import React from 'react'
import { setAnimation } from "./../../logic"
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';

const JsSnippet = () => {
    let App = setAnimation
    let jscode = ""
    if (App) {
        jscode = App.toString()
    }
    Prism.highlightAll();

    return (
        <div>
            JS snippet
            <pre>
                <code className="language-js">
                    {jscode}
                </code>
            </pre>
        </div>
    )
}

export default JsSnippet;


