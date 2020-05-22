// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-twilight.css";
// import "prismjs/themes/prism.css";
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { download } from './../../utils'

let CssSnippet = ({ css }) => {
  useEffect(() => {
    Prism.highlightAll()
  }, [css])
  return (
    <div id="output-css">
      <div className="context">
        <h2 className="code-heading">CSS Snippet</h2>
        <button className="download-btn" onClick={() => { download('text-animation.css', css) }}>Download CSS</button>
      </div>

      <pre>
        <code className="language-css">
          {css}
        </code>
      </pre>
    </div>
  )
}

const mapStateToProps = (state) => {
  let css = state.output.css;
  return { css }
}


CssSnippet = connect(mapStateToProps, null)(CssSnippet)

export default CssSnippet

