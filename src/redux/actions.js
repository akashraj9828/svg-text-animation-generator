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
    },
    meta:{
        initialized:false
    }

}

// input
export const SET_TEXT="SET_TEXT",
SET_FONT_FAMILY="SET_FONT_FAMILY",
SET_FONT_VARIANT="SET_FONT_VARIANT",
SET_SIZE="SET_SIZE",
SET_DELAY="SET_DELAY",
SET_DURATION="SET_DURATION",
SET_STROKE_WIDTH="SET_STROKE_WIDTH",
SET_FILL_COLOR="SET_FILL_COLOR",

// output
SET_SVG="SET_SVG",
SET_CSS="SET_CSS",
SET_JS="SET_JS",

// meta
SET_INITIALIZED="SET_INITIALIZED"




export function setSettings(type,value) {
    return { type: type, value:value, }
}

export function setOutput(type,value) {
    return { type: type, value:value, }
}

export function setMeta(type,value) {
    return { type: type, value:value, }
}
