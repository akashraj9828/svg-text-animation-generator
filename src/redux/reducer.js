import {
    default_state,
    SET_TEXT,
    SET_SIZE,
    SET_DELAY,
    SET_DURATION,
    SET_STROKE_WIDTH,
    SET_FILL_COLOR,
    // output
    SET_SVG,
    SET_CSS,
    SET_JS
} from "./actions"



function reducer(state = default_state, action) {
    let { settings, output } = {...state};
    let value = action.value;
    switch (action.type) {
        case SET_TEXT:
            settings.text = value
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

        default:
            return state

    }
}


export default reducer
