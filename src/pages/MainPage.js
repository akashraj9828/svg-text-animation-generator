import React, { Fragment,useEffect,useState } from 'react'
import CssSnippet from './components/Snippets/CssSnippet'
import SettingsHolder from './components/Holders/SettingsHolder'
import SvgHolder from './components/Holders/SvgHolder'
import Header from './components/Extras/Header'
import CodeHolder from './components/Holders/CodeHolder'
import JsSnippet from './components/Snippets/JsSnippet'
import SvgSnippet from './components/Snippets/SvgSnippet'
import {genKeyFrames,setAnimation,svgGenerator} from "./logic"

export default function MainPage() {
    console.log("render");
    const [instance, setInstance] = useState()
    useEffect(() => {
        let test=document.getElementById('font-select')
        if(test){
            setAnimation()
            let ins=svgGenerator
            setInstance(ins)
            ins.init()
        }
      });

   
    return (
        <Fragment>
            <Header/>
            <SettingsHolder instance={instance}/>
            <SvgHolder/>
            <CodeHolder>
                <CssSnippet/>
                <JsSnippet/>
                <SvgSnippet/>
            </CodeHolder>
        </Fragment>
    )
}
