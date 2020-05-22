import store from "./../../redux/store"
import { SET_JS, setOutput } from './../../redux/actions'




export function setAnimation(get_signature = false) {

    let jscode = ""
    if (process.env.NODE_ENV === "production") {
        jscode=`function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
            let paths = document.querySelectorAll("path");
            let mode=repeat?'infinite':'forwards'
            for (let i = 0; i < paths.length; i++) {
                const path = paths[i];
                const length = path.getTotalLength();
                path.style["stroke-dashoffset"] = \`\${length}px\`;
                path.style["stroke-dasharray"] = \`\${length}px\`;
                path.style["stroke-width"] = \`\${strokeWidth}px\`;
                path.style["stroke"] = \`\${strokeColor}\`;
                path.style["animation"] = \`\${duration}s svg-text-anim \${mode} \${timingFunction}\`;
                path.style["animation-delay"] = \`\${i * delay}s\`;
            }
        }`
    }else{
        let js_function = setTextAnimation
        if (js_function) {
            jscode = js_function.toString()
        }
    }
    let { settings } = store.getState()
    let { delay, duration, strokeWidth, timingFunction, strokeColor,repeat } = settings
    let paths = document.querySelectorAll("path");

    delay = delay === '' || delay === null ? 0.1 : delay
    duration = duration === '' || duration === null ? paths.length * delay + 2 : duration
    strokeWidth = strokeWidth === '' || strokeWidth === null ? 2 : strokeWidth
    // strokeWidth = strokeWidth ?? 2
    timingFunction = timingFunction ?? "linear"

    // limit decimal points
    delay = parseFloat(delay.toPrecision(2))
    duration = parseFloat(duration.toPrecision(2))
    strokeWidth = parseFloat(strokeWidth.toPrecision(2))

    setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat);
    // debugger
    let signature=`setTextAnimation(${delay},${duration},${strokeWidth},'${timingFunction}','${strokeColor}',${repeat});`
    let final_js = `${jscode}\n ${signature}`
    store.dispatch(setOutput(SET_JS, final_js))
}


export function setTextAnimation(delay, duration, strokeWidth, timingFunction, strokeColor,repeat) {
    let paths = document.querySelectorAll("path");
    let mode=repeat?'infinite':'forwards'
    for (let i = 0; i < paths.length; i++) {
        const path = paths[i];
        const length = path.getTotalLength();
        path.style["stroke-dashoffset"] = `${length}px`;
        path.style["stroke-dasharray"] = `${length}px`;
        path.style["stroke-width"] = `${strokeWidth}px`;
        path.style["stroke"] = `${strokeColor}`;
        path.style["animation"] = `${duration}s svg-text-anim ${mode} ${timingFunction}`;
        path.style["animation-delay"] = `${i * delay}s`;
    }
}