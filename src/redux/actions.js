export const default_state={
    settings:{
        fontFamily:"",
        fontVariant:"",
        text:"Yolo !",
        size:200,
        unionCheckbox:"",
        separateCheckbox:"",
        bezierAccuracy:"",
        delay:0.1,
        duration:0,
        strokeWidth:2, 
        fillColor:'#ff0000'
    },
    output:{
        svg:'',
        css:'',
        js:'',
    }

}

// input
export const SET_TEXT="SET_TEXT",
SET_SIZE="SET_SIZE",
SET_DELAY="SET_DELAY",
SET_DURATION="SET_DURATION",
SET_STROKE_WIDTH="SET_STROKE_WIDTH",
SET_FILL_COLOR="SET_FILL_COLOR",

// output
SET_SVG="SET_SVG",
SET_CSS="SET_CSS",
SET_JS="SET_JS"




export function setSettings(type,value) {
    return { type: type, value:value, }
}

export function setOutput(type,value) {
    return { type: type, value:value, }
}
