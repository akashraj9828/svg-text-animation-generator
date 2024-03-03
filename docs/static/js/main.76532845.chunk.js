(this["webpackJsonptext-animation"]=this["webpackJsonptext-animation"]||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/upload.925fc5db.svg"},22:function(e,t,a){e.exports=a(43)},27:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(5),o=a.n(l),i=(a(27),a(7),a(3)),c=a.n(i),s=a(2),u=function(e){var t="",a="";return e.split(/>\s*</).forEach((function(e){e.match(/^\/\w/)&&(a=a.substring("\t".length)),t+=a+"<"+e+">\r\n",e.match(/^<?\w[^>]*[^/]$/)&&(a+="\t")})),t.substring(1,t.length-3)},m=function(e,t){var a=document.createElement("a");a.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),a.setAttribute("download",e),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)},d=function(e){var t=e.css;return Object(n.useEffect)((function(){c.a.highlightAll()}),[t]),r.a.createElement("div",{id:"output-css"},r.a.createElement("div",{className:"context"},r.a.createElement("h2",{className:"code-heading"},"CSS Snippet"),r.a.createElement("button",{className:"download-btn",onClick:function(){m("text-animation.css",t)}},"Download CSS")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-css"},t)))},p=d=Object(s.b)((function(e){return{css:e.output.css}}),null)(d),h=a(1);function f(e,t){return{type:e,value:t}}var E=a(20),g=a.n(E),v=a(6),b={settings:{fontUploadedFile:void 0,fontUploadedName:"",fontFamily:"",fontVariant:"",text:"@akashraj9828",size:150,unionCheckbox:!1,separateCheckbox:!0,bezierAccuracy:"",delay:.1,duration:"",strokeWidth:2,fillColor:"#f16f6b",strokeColor:"#ffffff",timingFunction:"linear",repeat:!0},output:{svg:"",css:"",js:""},meta:{initialized:!1}};var N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,a=Object(h.a)({},e),n=a.settings,r=a.output,l=a.meta,o=t.value;switch(t.type){case"SET_TEXT":return n.text=o,Object(h.a)({},e,{settings:n});case"SET_FONT_UPLOADED_FILE":return n.fontUploadedFile=o,Object(h.a)({},e,{settings:n});case"SET_FONT_UPLOADED_NAME":return n.fontUploadedName=o,Object(h.a)({},e,{settings:n});case"SET_FONT_FAMILY":return n.fontFamily=o,Object(h.a)({},e,{settings:n});case"SET_FONT_VARIANT":return n.fontVariant=o,Object(h.a)({},e,{settings:n});case"SET_SIZE":return n.size=null!==o&&void 0!==o?o:0,Object(h.a)({},e,{settings:n});case"SET_DELAY":return n.delay=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_TIMING_FUNCTION":return n.timingFunction=o,Object(h.a)({},e,{settings:n});case"SET_DURATION":return n.duration=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_STROKE_WIDTH":return n.strokeWidth=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_REPEAT":return n.repeat=isNaN(o)?"":o,Object(h.a)({},e,{settings:n});case"SET_FILL_COLOR":return n.fillColor=o,Object(h.a)({},e,{settings:n});case"SET_STROKE_COLOR":return n.strokeColor=o,Object(h.a)({},e,{settings:n});case"SET_CSS":return r.css=o,Object(h.a)({},e,{output:r});case"SET_JS":return r.js=o,Object(h.a)({},e,{output:r});case"SET_SVG":return r.svg=o,Object(h.a)({},e,{output:r});case"SET_INITIALIZED":return l.initialized=o,Object(h.a)({},e,{meta:l});default:return e}},T=Object(v.b)(N,b,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),y=function(){var e=document.getElementById("animation-keyframes"),t=T.getState().settings.fillColor;e&&e.remove();var a=document.createElement("style");a.type="text/css",a.id="animation-keyframes";var n="   40% {\n          stroke-dashoffset: 0;\n          fill: transparent;\n        }\n        60% {\n          stroke-dashoffset: 0;\n          fill: ".concat(t,";\n        }\n        100% {\n          stroke-dashoffset: 0;\n          fill: ").concat(t,";\n        }\n        "),r="     /* Google chrome */\n      @-webkit-keyframes svg-text-anim {\n    ".concat(n,"\n    }\n    /* Most browsers */\n    @keyframes svg-text-anim {\n    ").concat(n,"\n    }");a.innerHTML=r,document.getElementsByTagName("head")[0].appendChild(a),T.dispatch(f("SET_CSS",r))};function S(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];var e,t="";t='function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {\n            let paths = document.querySelectorAll("path");\n            let mode=repeat?\'infinite\':\'forwards\'\n            for (let i = 0; i < paths.length; i++) {\n                const path = paths[i];\n                const length = path.getTotalLength();\n                path.style["stroke-dashoffset"] = `${length}px`;\n                path.style["stroke-dasharray"] = `${length}px`;\n                path.style["stroke-width"] = `${strokeWidth}px`;\n                path.style["stroke"] = `${strokeColor}`;\n                path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;\n                path.style["animation-delay"] = `${i * delay}s`;\n            }\n        }';var a=T.getState(),n=a.settings,r=n.delay,l=n.duration,o=n.strokeWidth,i=n.timingFunction,c=n.strokeColor,s=n.repeat,u=document.querySelectorAll("path");r=""===r||null===r?.1:r,l=""===l||null===l?u.length*r+2:l,o=""===o||null===o?2:o,i=null!==(e=i)&&void 0!==e?e:"linear",O(r=parseFloat(r.toPrecision(2)),l=parseFloat(l.toPrecision(2)),o=parseFloat(o.toPrecision(2)),i,c,s);var m="setTextAnimation(".concat(r,",").concat(l,",").concat(o,",'").concat(i,"','").concat(c,"',").concat(s,");"),d="".concat(t,"\n ").concat(m);T.dispatch(f("SET_JS",d))}function O(e,t,a,n,r,l){for(var o=document.querySelectorAll("path"),i=l?"infinite":"forwards",c=0;c<o.length;c++){var s=o[c],u=s.getTotalLength();s.style["stroke-dashoffset"]="".concat(u,"px"),s.style["stroke-dasharray"]="".concat(u,"px"),s.style["stroke-width"]="".concat(a,"px"),s.style.stroke="".concat(r),s.style.animation="".concat(t,"s svg-text-anim ").concat(i," ").concat(n),s.style["animation-delay"]="".concat(c*e,"s")}}var _=a(13),k=a.n(_),x=a(21),w=a(4),F=a.n(w),j=a(14);var C=new function(){var e=T.getState().settings;this.initialized=!1,this.fontList={},this.init=function(){this.bind(),this.loadFonts().then((function(e){T.dispatch({type:"SET_INITIALIZED",value:!0})}))},this.bind=function(){this.selectFamily=this.$("#font-select"),this.selectVariant=this.$("#font-variant")},this.loadFonts=Object(x.a)(k.a.mark((function e(){var t,a=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU",e.next=3,fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=".concat("AIzaSyDedkw4Dr7wPMbTcUfTpXBLgyoncPygzDU")).then((function(e){return e.json()}));case 3:return t=e.sent,this.fontList=t,this.fontList.items.forEach((function(e){return a.addOption(a.selectFamily,e.family)})),this.loadVariants(),e.abrupt("return",1);case 8:case"end":return e.stop()}}),e,this)}))),this.renderCurrent=function(){var t=e.size;t||(t=parseFloat(e.size)),t||(t=100);var a=this.selectFamily.selectedIndex,n=this.selectVariant.selectedIndex,r=e.text;if(e.fontUploadedFile)try{var l=j.a.parse(e.fontUploadedFile),o=new F.a.models.Text(l,r,t,!1,!1,"");for(var i in o.models)o.models[i].layer=i;var c=F.a.exporter.toSVG(o);T.dispatch(f("SET_SVG",c)),S(),y()}catch(d){console.error(d)}else{var s=this.fontList.items[a],u=s.variants[n],m=s.files[u];j.a.load(m,(function(e,a){if(e)console.log(e);else{var n=new F.a.models.Text(a,r,t,!1,!1,"");for(var l in n.models)n.models[l].layer=l;var o=F.a.exporter.toSVG(n);T.dispatch(f("SET_SVG",o)),S(),y()}}))}},this.loadVariants=function(){var e=this;this.selectVariant.options.length=0,this.fontList.items[this.selectFamily.selectedIndex].variants.forEach((function(t){return e.addOption(e.selectVariant,t)})),this.renderCurrent()},this.$=function(e){return document.querySelector(e)},this.addOption=function(e,t){var a=document.createElement("option");a.text=t,a.value=t,e.options.add(a)}},A=function(e){var t=e.dispatch,a=Object(n.useRef)(null),l=e.fontUploadedFile,o=e.fontUploadedName,i=e.fontFamily,c=e.fontVariant,s=e.text,u=e.size,m=(e.unionCheckbox,e.separateCheckbox,e.bezierAccuracy,e.delay),d=e.duration,p=e.strokeWidth,h=e.fillColor,f=e.timingFunction,E=e.strokeColor,v=e.repeat,b=e.initialized;Object(n.useEffect)((function(){b&&C.renderCurrent()}),[s,u,m,d,p,h,c,f,E,v,b,l]),Object(n.useEffect)((function(){b&&C.loadVariants()}),[i,b]);var N=function(e,a){t({type:e,value:a})};return r.a.createElement("div",{className:"settings"},r.a.createElement("div",{className:"text-holder"},r.a.createElement("div",{className:"input-group text-center "},r.a.createElement("input",{className:"input-text text-center ",type:"text",id:"input-text",value:s,placeholder:"Input Text Here",onChange:function(e){return N("SET_TEXT",e.target.value)}}))),r.a.createElement("div",{className:"tuners-holder"},r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",{className:"flex-row-group"},r.a.createElement("span",null,"Font:"," ",r.a.createElement("span",{className:"fonts-info"},"(Check all fonts"," ",r.a.createElement("a",{className:"fonts-link",href:"https://fonts.google.com/?sort=alpha",target:"_blank",rel:"noopener noreferrer"},"here"),")")),r.a.createElement("img",{src:g.a,width:16,alt:"Upload your font",title:"Upload your font"}),r.a.createElement("input",{ref:a,type:"file",id:"inputFont",accept:".woff, .otf, .ttf",onChange:function(e){var t=e.target.files&&e.target.files[0];if(t){var a=new FileReader;a.onload=function(e){N("SET_FONT_UPLOADED_FILE",e.target.result)},N("SET_FONT_UPLOADED_NAME",t.name),a.readAsArrayBuffer(t)}},multiple:!1})),r.a.createElement("select",{id:"font-select",value:i,onChange:function(e){return N("SET_FONT_FAMILY",e.target.value)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Variant:"),r.a.createElement("select",{id:"font-variant",value:c,onChange:function(e){return N("SET_FONT_VARIANT",e.target.value)}})),l?r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Using uploaded font:"),r.a.createElement("label",{className:"inline light-text"},o),r.a.createElement("input",{type:"checkbox",id:"input-duration",placeholder:"Remove font",checked:void 0!==l,onChange:function(e){return N("SET_FONT_UPLOADED_FILE",void 0),void N("SET_FONT_UPLOADED_NAME","")}})):r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Size:"),r.a.createElement("input",{type:"number",id:"input-size",value:u,placeholder:100,onChange:function(e){return N("SET_SIZE",e.target.value)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Stroke Width(px):"),r.a.createElement("input",{type:"number",id:"input-width",value:p,placeholder:"2px",onChange:function(e){return N("SET_STROKE_WIDTH",e.target.valueAsNumber)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Delay(s):"),r.a.createElement("input",{type:"number",id:"input-delay",placeholder:"0.1s",value:m,onChange:function(e){return N("SET_DELAY",e.target.valueAsNumber)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Animation duration(s):"),r.a.createElement("input",{type:"number",id:"input-duration",placeholder:"auto",value:d,onChange:function(e){return N("SET_DURATION",e.target.valueAsNumber)}})),r.a.createElement("div",{className:"input-group "},r.a.createElement("label",{className:"inline"},"Repeat:"),r.a.createElement("input",{type:"checkbox",id:"input-duration",placeholder:"auto",checked:v,onChange:function(e){return N("SET_REPEAT",e.target.checked)}}))),r.a.createElement("div",null,r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Timing Function:"),r.a.createElement("select",{id:"timing-function",value:f,onChange:function(e){return N("SET_TIMING_FUNCTION",e.target.value)}},r.a.createElement("option",{value:"ease"},"ease"),r.a.createElement("option",{value:"ease-in"},"ease-in"),r.a.createElement("option",{value:"ease-out"},"ease-out"),r.a.createElement("option",{value:"ease-in-out"},"ease-in-out"),r.a.createElement("option",{value:"linear"},"linear"),r.a.createElement("option",{value:"step-start"},"step-start"),r.a.createElement("option",{value:"step-end"},"step-end"))),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Fill Color:"),r.a.createElement("input",{type:"color",id:"input-color",value:h,onChange:function(e){return N("SET_FILL_COLOR",e.target.value)}})),r.a.createElement("div",{className:"input-group"},r.a.createElement("label",null,"Stroke Color:"),r.a.createElement("input",{type:"color",id:"input-color",value:E,onChange:function(e){return N("SET_STROKE_COLOR",e.target.value)}}))),r.a.createElement("div",null)))},I=A=Object(s.b)((function(e){var t=e.settings,a=e.meta;return Object(h.a)({},t,{},a)}),null)(A),L=function(e){var t=e.svg;return r.a.createElement("div",{id:"svg-holder",dangerouslySetInnerHTML:{__html:t}})},D=L=Object(s.b)((function(e){return{svg:e.output.svg}}),null)(L),U=function(){return r.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/akashraj9828"},r.a.createElement("img",{src:"https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg",alt:"Buy me a coffee"}),r.a.createElement("span",{style:{marginLeft:"5px",fontSize:"28px!important"}},"Buy me a coffee"))},R=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("div",null,r.a.createElement("h1",{className:"title"},"SVG TEXT ANIMATION GENERATOR"),r.a.createElement("h4",{className:"subtitle"}," (Pure CSS no libraries used)")),r.a.createElement("div",{className:"extras"}),r.a.createElement(U,null))},V=function(e){var t=e.children;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"code-holder"},t))},z=function(e){var t=e.js;return Object(n.useEffect)((function(){c.a.highlightAll()}),[t]),r.a.createElement("div",{id:"output-js"},r.a.createElement("div",{className:"context"},r.a.createElement("h2",{className:"code-heading"},"JS Snippet"),r.a.createElement("button",{className:"download-btn",onClick:function(){m("text-animation.js",t)}},"Download JS")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-js"},t)))},P=z=Object(s.b)((function(e){return{js:e.output.js}}),null)(z),G=function(e){var t=e.svg;return Object(n.useEffect)((function(){c.a.highlightAll()}),[t]),r.a.createElement("div",{id:"output-svg"},r.a.createElement("div",{className:"context"},r.a.createElement("h2",{className:"code-heading"},"SVG Snippet"),r.a.createElement("button",{className:"download-btn",onClick:function(){m("text.svg",u(t))}},"Download SVG")),r.a.createElement("pre",null,r.a.createElement("code",{className:"language-html"},u(t))))},M=G=Object(s.b)((function(e){return{svg:e.output.svg}}),null)(G);var $=function(){return r.a.createElement("div",{className:"gitIcons"},r.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/svg-text-animation-generator/fork","data-icon":"octicon-repo-forked","data-size":"large","data-show-count":"true","aria-label":"Fork akashraj9828/svg-text-animation-generator on GitHub"},"Fork"),r.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828/svg-text-animation-generator","data-icon":"octicon-star","data-size":"large","data-show-count":"true","aria-label":"Star akashraj9828/svg-text-animation-generator on GitHub"},"Star"),r.a.createElement("a",{className:"github-button",href:"https://github.com/akashraj9828","data-size":"large","data-show-count":"true","aria-label":"Follow @akashraj9828 on GitHub"},"Follow @akashraj9828"))};var W=function(){return r.a.createElement("footer",null,r.a.createElement($,null),r.a.createElement("span",{className:"footer-text"},"With ",r.a.createElement("span",{className:"heart"},"\u2764")," by ",r.a.createElement("a",{href:"https://akashraj.tech"},"Akash Raj")))},B=function(e){var t=e.svg,a=e.css,n=e.js,l=e.text,o='\n                <!DOCTYPE html>\n                <html lang="en">\n                <head>\n                    <meta charset="UTF-8">\n                    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n                    <title>'.concat(l," | Animation</title>\n                    <style>\n                        ").concat(a,"\n                    </style>\n                </head>\n                <body style='background:mediumseagreen'>\n                    <div class=\"svg-holder\">\n                        ").concat(t,"\n                    </div>\n                </body>\n                <script>\n                    ").concat(n,"\n                <\/script>\n                </html>\n            ");return r.a.createElement("div",{className:"context text-center my-1"},r.a.createElement("button",{className:"download-btn",onClick:function(){m("".concat(l,"-animation.html"),o)}},"Download Source"))},X=B=Object(s.b)((function(e){var t=e.output,a=e.settings;return Object(h.a)({},t,{text:a.text})}),null)(B);function H(){return Object(n.useEffect)((function(){document.getElementById("font-select")&&C.init()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(R,null),r.a.createElement(I,null),r.a.createElement(X,null),r.a.createElement(D,null),r.a.createElement(V,null,r.a.createElement(M,null),r.a.createElement(p,null),r.a.createElement(P,null)),r.a.createElement(W,null))}var J=function(){return r.a.createElement(s.a,{store:T},r.a.createElement("div",{className:"App"},r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t){}},[[22,1,2]]]);
//# sourceMappingURL=main.76532845.chunk.js.map