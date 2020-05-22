import React, { Fragment,useEffect } from 'react'
import CssSnippet from './components/Snippets/CssSnippet'
import SettingsHolder from './components/Holders/SettingsHolder'
import SvgHolder from './components/Holders/SvgHolder'
import Header from './components/Extras/Header'
import CodeHolder from './components/Holders/CodeHolder'
import JsSnippet from './components/Snippets/JsSnippet'
import SvgSnippet from './components/Snippets/SvgSnippet'
import {svgGenerator} from "./logic"
import Footer from './components/Extras/Footer'
import DownloadBundle from './components/Extras/DownloadBundle'

export default function MainPage() {
    useEffect(() => {
        let test=document.getElementById('font-select')
        if(test){
            svgGenerator.init()
        }
      },[]);
    return (
        <Fragment>
            <Header/>
            <SettingsHolder/>
            <DownloadBundle/>
            <SvgHolder/>
            <CodeHolder>
                <SvgSnippet/>
                <CssSnippet/>
                <JsSnippet/>
            </CodeHolder>
            <Footer/>
        </Fragment>
    )
}
