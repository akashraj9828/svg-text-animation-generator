import store from "./../../redux/store"
import {SET_JS,setOutput} from './../../redux/actions'


let js_function = setTextAnimation
let jscode = ""
if (js_function) {
    jscode = js_function.toString()
}



export function setAnimation(get_signature = false) {
    let { settings } = store.getState()
    let { delay, duration, strokeWidth, timingFunction, strokeColor } = settings
    console.log("---: setAnimation -> duration", duration);
    let paths = document.querySelectorAll("path");
    
    delay =delay===''|| delay===null?0.1: delay
    duration =duration===''|| duration===null?paths.length * delay + 2: duration
    strokeWidth =strokeWidth===''|| strokeWidth===null?2: strokeWidth
    // strokeWidth = strokeWidth ?? 2
    timingFunction = timingFunction ?? "linear"
    
    console.log("---: setAnimation -> duration", duration);



    // limit decimal points
    delay=parseFloat(delay.toPrecision(2))
    duration=parseFloat(duration.toPrecision(2))
    strokeWidth=parseFloat(strokeWidth.toPrecision(2))
    
    setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor);
    // debugger
    let signature=`${jscode}\n setTextAnimation(${delay},${duration},${strokeWidth},'${timingFunction}','${strokeColor}');`
    store.dispatch(setOutput(SET_JS,signature))
}


export function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor) {
    let paths = document.querySelectorAll("path");
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i]
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim infinite ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }

}