import {
    default_state,
    SET_TEXT,
    SET_FONT_FAMILY,
    SET_FONT_VARIANT,
    SET_SIZE,
    SET_DELAY,
    SET_DURATION,
    SET_STROKE_WIDTH,
    SET_FILL_COLOR,
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
    switch (action.type) {
        case SET_TEXT:
            settings.text = value
            var new_state={ ...state, settings }
            return new_state
        case SET_FONT_FAMILY:
            settings.fontFamily = value
            var new_state={ ...state, settings }
            return new_state
        case SET_FONT_VARIANT:
            settings.fontVariant = value
            var new_state={ ...state, settings }
            return new_state
        case SET_SIZE:
            settings.size = value
            var new_state={ ...state, settings }
            return new_state

        case SET_DELAY:
            settings.delay = value
            var new_state={ ...state, settings }
            return new_state

        case SET_DURATION:
            settings.duration = value
            var new_state={ ...state, settings }
            return new_state

        case SET_STROKE_WIDTH:
            settings.strokeWidth = value
            var new_state={ ...state, settings }
            return new_state

        case SET_FILL_COLOR:
            settings.fillColor = value
            var new_state={ ...state, settings }
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
