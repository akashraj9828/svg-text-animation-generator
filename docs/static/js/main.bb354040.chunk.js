(this["webpackJsonptext-animation"]=this["webpackJsonptext-animation"]||[]).push([[0],{21:function(e,t,a){e.exports=a(42)},26:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(4),o=a.n(l),c=(a(26),a(6),a(3)),i=a.n(c),s=a(2),u=function(e){var t="",a="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(a=a.substring("\t".length)),t+=a+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^/]$/)&&(a+="\t")})),t.substring(1,t.length-3)},m=function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},d=function(e){var t=e.css;return Object(n.useEffect)((function(){i.a.highlightAll()}),[t]),r.a.createElement("div",{id:"output-css"},r.a.createElement("div",{className:"context"},r.a.createElement("h2",{className:"code-heading"},"CSS Snippet"),r.a.createElement("button",{className:"download-btn",onClick:function(){m("text-animation.css",t)}},"Download")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-css"},t)))},f=d=Object(s.b)((function(e){return{css:e.output.css}}),null)(d),h=a(1);function E(e,t){return{type:e,value:t}}var p=a(5),g={settings:{fontFamily:"",fontVariant:"",text:"@akashraj9828",size:150,unionCheckbox:!1,separateCheckbox:!0,bezierAccuracy:"",delay:.1,duration:"",strokeWidth:2,fillColor:"#f16f6b",strokeColor:"#ffffff",timingFunction:"linear"},output:{svg:"",css:"",js:""},meta:{initialized:!1}};var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,a=Object(h.a)({},e),n=a.settings,r=a.output,l=a.meta,o=t.value;switch(t.type){case"SET_TEXT":return n.text=o,Object(h.a)({},e,{settings:n});case"SET_FONT_FAMILY":return n.fontFamily=o,Object(h.a)({},e,{settings:n});case"SET_FONT_VARIANT":return n.fontVariant=o,Object(h.a)({},e,{settings:n});case"SET_SIZE":return n.size=null!==o&&void 0!==o?o:0,Object(h.a)({},e,{settings:n});case"SET_DELAY":return n.delay=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_TIMING_FUNCTION":return n.timingFunction=o,Object(h.a)({},e,{settings:n});case"SET_DURATION":return n.duration=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_STROKE_WIDTH":return n.strokeWidth=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_FILL_COLOR":return n.fillColor=o,Object(h.a)({},e,{settings:n});case"SET_STROKE_COLOR":return n.strokeColor=o,Object(h.a)({},e,{settings:n});case"SET_CSS":return r.css=o,Object(h.a)({},e,{output:r});case"SET_JS":return r.js=o,Object(h.a)({},e,{output:r});case"SET_SVG":return r.svg=o,Object(h.a)({},e,{output:r});case"SET_INITIALIZED":return l.initialized=o,Object(h.a)({},e,{meta:l});default:return e}},b=Object(p.b)(v,g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());function S(e,t,a,n,r){for(var l=document.querySelectorAll("path"),o=0;o<l.length;o++){var c=l[o],i=c.getTotalLength();c.style["stroke-dashoffset"]="".concat(i,"px"),c.style["stroke-dasharray"]="".concat(i,"px"),c.style["stroke-width"]="".concat(a,"px"),c.style.stroke="".concat(r),c.style.animation="".concat(t,"s svg-text-anim infinite ").concat(n),c.style["animation-delay"]="".concat(o*e,"s")}}var N=a(12),T=a.n(N),y=a(19),O=a(13),k=a.n(O),_=a(20);var x=new function(){var e=b.getState().settings;this.initialized=!1,this.fontList={},this.init=function(){this.bind(),this.loadFonts().then((function(e){b.dispatch({type:"SET_INITIALIZED",value:!0})}))},this.bind=function(){this.selectFamily=this.$("#font-select"),this.selectVariant=this.$("#font-variant")},this.loadFonts=Object(y.a)(T.a.mark((function e(){var t,a=this;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU",e.next=3,fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat("AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU")).then((function(e){return e.json()}));case 3:return t=e.sent,this.fontList=t,console.log("---: App -> fontList",t),this.fontList.items.forEach((function(e){return a.addOption(a.selectFamily,e.family)})),this.loadVariants(),e.abrupt("return",1);case 9:case"end":return e.stop()}}),e,this)}))),this.renderCurrent=function(){var t=e.size;t||(t=parseFloat(e.size)),t||(t=100);var a=this.selectFamily.selectedIndex,n=this.selectVariant.selectedIndex,r=e.text,l=this.fontList.items[a],o=l.variants[n],c=l.files[o].substring(5);_.a.load(c,(function(e,a){var n=new k.a.models.Text(a,r,t,!1,!1,"");for(var l in n.models)n.models[l].layer=l;var o=k.a.exporter.toSVG(n);b.dispatch(E("SET_SVG",o)),function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e,t="",a=S;a&&(t=a.toString());var n=b.getState(),r=n.settings,l=r.delay,o=r.duration,c=r.strokeWidth,i=r.timingFunction,s=r.strokeColor,u=document.querySelectorAll("path");l=""===l||null===l?.1:l,o=""===o||null===o?u.length*l+2:o,c=""===c||null===c?2:c,i=null!==(e=i)&&void 0!==e?e:"linear",S(l=parseFloat(l.toPrecision(2)),o=parseFloat(o.toPrecision(2)),c=parseFloat(c.toPrecision(2)),i,s);var m="".concat(t,"\n setTextAnimation(").concat(l,",").concat(o,",").concat(c,",'").concat(i,"','").concat(s,"');");b.dispatch(E("SET_JS",m))}(),function(){var e=document.getElementById("animation-keyframes"),t=b.getState().settings.fillColor;e&&e.remove();var a=document.createElement("style");a.type="text/css",a.id="animation-keyframes";var n="   40% {\n          stroke-dashoffset: 0;\n          fill: transparent;\n        }\n        60% {\n          stroke-dashoffset: 0;\n          fill: ".concat(t,";\n        }\n        100% {\n          stroke-dashoffset: 0;\n          fill: ").concat(t,";\n        }\n        "),r="     /* Google chrome */\n      @-webkit-keyframes svg-text-anim {\n    ".concat(n,"\n    }\n    /* Most browsers */\n    @keyframes svg-text-anim {\n    ").concat(n,"\n    }");a.innerHTML=r,document.getElementsByTagName("head")[0].appendChild(a),b.dispatch(E("SET_CSS",r))}()}))},this.loadVariants=function(){var e=this;this.selectVariant.options.length=0,this.fontList.items[this.selectFamily.selectedIndex].variants.forEach((function(t){return e.addOption(e.selectVariant,t)})),this.renderCurrent()},this.$=function(e){return document.querySelector(e)},this.addOption=function(e,t){var a=document.createElement("option");a.text=t,a.value=t,e.options.add(a)}},j=function(e){var t=e.dispatch,a=e.fontFamily,l=e.fontVariant,o=e.text,c=e.size,i=(e.unionCheckbox,e.separateCheckbox,e.bezierAccuracy,e.delay),s=e.duration,u=e.strokeWidth,m=e.fillColor,d=e.timingFunction,f=e.strokeColor,h=e.initialized;Object(n.useEffect)((function(){h&&x.renderCurrent()}),[o,c,i,s,u,m,l,d,f,h]),Object(n.useEffect)((function(){h&&x.loadVariants()}),[a,h]);var E=function(e,a){t({type:e,value:a})};return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"text-holder"},r.a.createElement("div",{className:"input-group text-center "},r.a.createElement("input",{className:"input-text text-center ",type:"text",id:"input-text",value:o,placeholder:"Input Text Here",onChange:function(e){return E("SET_TEXT",e.target.value)}}))),r.a.createElement("div",{className:"tuners-holder"},r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Font: ",r.a.createElement("span",{className:"fonts-info"},"(Check all fonts ",r.a.createElement("a",{className:"fonts-link",href:"https://fonts.google.com/?sort=alpha",target:"_blank",rel:"noopener noreferrer"},"here"),")")," "),r.a.createElement("select",{id:"font-select",value:a,onChange:function(e){return E("SET_FONT_FAMILY",e.target.value)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Variant:"),r.a.createElement("select",{id:"font-variant",value:l,onChange:function(e){return E("SET_FONT_VARIANT",e.target.value)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Size:"),r.a.createElement("input",{type:"number",id:"input-size",value:c,placeholder:100,onChange:function(e){return E("SET_SIZE",e.target.value)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Stroke Width(px):"),r.a.createElement("input",{type:"number",id:"input-width",value:u,placeholder:"2px",onChange:function(e){return E("SET_STROKE_WIDTH",e.target.valueAsNumber)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Delay(s):"),r.a.createElement("input",{type:"number",id:"input-delay",placeholder:"0.1s",value:i,onChange:function(e){return E("SET_DELAY",e.target.valueAsNumber)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Animation duration(s):"),r.a.createElement("input",{type:"number",id:"input-duration",placeholder:"auto",value:s,onChange:function(e){return E("SET_DURATION",e.target.valueAsNumber)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Timing Function:"),r.a.createElement("select",{id:"timing-function",value:d,onChange:function(e){return E("SET_TIMING_FUNCTION",e.target.value)}},r.a.createElement("option",{value:"ease"},"ease"),r.a.createElement("option",{value:"ease-in"},"ease-in"),r.a.createElement("option",{value:"ease-out"},"ease-out"),r.a.createElement("option",{value:"ease-in-out"},"ease-in-out"),r.a.createElement("option",{value:"linear"},"linear"),r.a.createElement("option",{value:"step-start"},"step-start"),r.a.createElement("option",{value:"step-end"},"step-end"))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Fill Color:"),r.a.createElement("input",{type:"color",id:"input-color",value:m,onChange:function(e){return E("SET_FILL_COLOR",e.target.value)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Stroke Color:"),r.a.createElement("input",{type:"color",id:"input-color",value:f,onChange:function(e){return E("SET_STROKE_COLOR",e.target.value)}}))),r.a.createElement("div",null)))},w=j=Object(s.b)((function(e){var t=e.settings,a=e.meta;return Object(h.a)({},t,{},a)}),null)(j),C=function(e){var t=e.svg;return r.a.createElement("div",{id:"svg-holder",dangerouslySetInnerHTML:{__html:t}})},I=C=Object(s.b)((function(e){return{svg:e.output.svg}}),null)(C),F=function(){return r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/akashraj9828"},r.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",{style:{marginLeft:"5px",fontSize:"28px!important"}},"Buy me a coffee"))},A=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"SVG TEXT ANIMATION GENERATOR"),r.a.createElement("h4",{className:"subtitle"}," (Pure CSS no libraries used)")),r.a.createElement("div",{className:"extras"}),r.a.createElement(F,null))},L=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"code-holder"},t))},D=function(e){var t=e.js;return Object(n.useEffect)((function(){i.a.highlightAll()}),[t]),r.a.createElement("div",{id:"output-js"},r.a.createElement("div",{className:"context"},r.a.createElement("h2",{className:"code-heading"},"JS Snippet"),r.a.createElement("button",{className:"download-btn",onClick:function(){m("text-animation.js",t)}},"Download")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-js"},t)))},z=D=Object(s.b)((function(e){return{js:e.output.js}}),null)(D),V=function(e){var t=e.svg;return Object(n.useEffect)((function(){i.a.highlightAll()}),[t]),r.a.createElement("div",{id:"output-svg"},r.a.createElement("div",{className:"context"},r.a.createElement("h2",{className:"code-heading"},"SVG Snippet"),r.a.createElement("button",{className:"download-btn",onClick:function(){m("text.svg",u(t))}},"Download")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-html"},u(t))))},R=V=Object(s.b)((function(e){return{svg:e.output.svg}}),null)(V);var G=function(){return r.a.createElement("div",{className:"gitIcons"},r.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/svg-text-animation-generator/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork akashraj9828/svg-text-animation-generator on GitHub"},"Fork"),r.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/svg-text-animation-generator","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star akashraj9828/svg-text-animation-generator on GitHub"},"Star"),r.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828","data-size":"large","data-show-count":"true","aria-label":"Follow @akashraj9828 on GitHub"},"Follow @akashraj9828"))};var M=function(){return r.a.createElement("footer",null,r.a.createElement(G,null),r.a.createElement("span",{className:"footer-text"},"With ",r.a.createElement("span",{className:"heart"},"\u2764")," by ",r.a.createElement("a",{href:"https://akashraj.tech"},"Akash Raj")))};function U(){return Object(n.useEffect)((function(){document.getElementById("font-select")&&x.init()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(A,null),r.a.createElement(w,null),r.a.createElement(I,null),r.a.createElement(L,null,r.a.createElement(R,null),r.a.createElement(f,null),r.a.createElement(z,null)),r.a.createElement(M,null))}var W=function(){return r.a.createElement(s.a,{store:b},r.a.createElement("div",{className:"App"},r.a.createElement(U,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t){}},[[21,1,2]]]);
//# sourceMappingURL=main.bb354040.chunk.js.map