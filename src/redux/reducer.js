import {default_state} from './default_state'
import {
    SET_TEXT,
    SET_FONT_FAMILY,
    SET_FONT_VARIANT,
    SET_TIMING_FUNCTION,
    SET_SIZE,
    SET_DELAY,
    SET_DURATION,
    SET_STROKE_WIDTH,
    SET_FILL_COLOR,
    SET_STROKE_COLOR,
    SET_REPEAT,
    // output
    SET_SVG,
    SET_CSS,
    SET_JS,
    // meta
    SET_INITIALIZED
} from "./actions"



function reducer(state = default_state, action) {
    let { settings, output ,meta} = {...state};
    let value = action.value;
    var new_state=null
    switch (action.type) {
        case SET_TEXT:
            settings.text = value
            new_state={ ...state, settings }
            return new_state
        case SET_FONT_FAMILY:
            settings.fontFamily = value
            new_state={ ...state, settings }
            return new_state
        case SET_FONT_VARIANT:
            settings.fontVariant = value
            new_state={ ...state, settings }
            return new_state
        case SET_SIZE:
            settings.size = value??0
            new_state={ ...state, settings }
            return new_state

        case SET_DELAY:
            settings.delay = isNaN(value)?'':value
            new_state={ ...state, settings }
            return new_state
        case SET_TIMING_FUNCTION:
            settings.timingFunction = value
            new_state={ ...state, settings }
            return new_state

        case SET_DURATION:
            settings.duration = isNaN(value)?'':value
            new_state={ ...state, settings }
            return new_state

        case SET_STROKE_WIDTH:
            settings.strokeWidth = isNaN(value)?'':value
            new_state={ ...state, settings }
            return new_state
        case SET_REPEAT:
            settings.repeat = isNaN(value)?'':value
            new_state={ ...state, settings }
            return new_state

        case SET_FILL_COLOR:
            settings.fillColor = value
            new_state={ ...state, settings }
            return new_state
        case SET_STROKE_COLOR:
            settings.strokeColor = value
            new_state={ ...state, settings }
            return new_state


        case SET_CSS:
            output.css = value
            return { ...state, output }

        case SET_JS:
            output.js = value
            return { ...state, output }

        case SET_SVG:
            output.svg = value
            return { ...state, output }

        case SET_INITIALIZED:
            meta.initialized = value
            return { ...state, meta }

        default:
            return state

    }
}


export default reducer
