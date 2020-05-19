// import "prismjs/themes/prism-coy.css";
// import "prismjs/themes/prism-dark.css";
// import "prismjs/themes/prism-funky.css";
// import "prismjs/themes/prism-okaidia.css";
// import "prismjs/themes/prism-solarizedlight.css";
// import "prismjs/themes/prism-twilight.css";
// import "prismjs/themes/prism.css";
import "prismjs/themes/prism-tomorrow.css";
import Prism from 'prismjs';
import React from 'react'
import { connect } from 'react-redux'

let CssSnippet = ({css}) => {
  Prism.highlightAll();
  return (
      <div>
          CSS Snippet
  
          <pre>
      <code className="language-css">
          {css}
      </code>
    </pre>
      </div>
  )
}

const mapStateToProps = (state) => {
  let css=state.output.css;
  return {css}
}


CssSnippet= connect(mapStateToProps,null)(CssSnippet)

export default CssSnippet

