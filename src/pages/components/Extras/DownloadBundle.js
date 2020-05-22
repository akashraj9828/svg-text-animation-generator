import React from 'react'
import { connect } from 'react-redux'
import { download } from './../../utils'
let DownloadBundle = (props) => {
    const { svg, css, js ,text} = props
    let html_file = `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>${text} | Animation</title>
                    <style>
                        ${css}
                    </style>
                </head>
                <body style='background:mediumseagreen'>
                    <div class="svg-holder">
                        ${svg}
                    </div>
                </body>
                <script>
                    ${js}
                </script>
                </html>
            `
    return (
        <div className="context text-center my-1">
            <button className="download-btn" onClick={() => { download(`${text}-animation.html`, html_file) }}>Download Source</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    let { output,settings } = state
    return {
        ...output,text:settings.text
    }
}


DownloadBundle = connect(mapStateToProps, null)(DownloadBundle)
export default DownloadBundle