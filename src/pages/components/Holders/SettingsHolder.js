import React, { useEffect } from 'react'

import { connect } from 'react-redux'
import {
    SET_TEXT,
    SET_SIZE,
    SET_DELAY,
    SET_DURATION,
    SET_STROKE_WIDTH,
    setSettings,
    SET_FILL_COLOR,
    SET_FONT_FAMILY,
    SET_FONT_VARIANT,
    SET_TIMING_FUNCTION,
    SET_STROKE_COLOR,
    SET_REPEAT,
} from './../../../redux/actions'


import { svgGenerator } from './../../logic/'

let SettingsHolder = (props) => {

    let { dispatch } = props

    // eslint-disable-next-line no-unused-vars
    let { fontFamily, fontVariant, text, size, unionCheckbox, separateCheckbox, bezierAccuracy, delay, duration, strokeWidth, fillColor, timingFunction, strokeColor,repeat, initialized } = props

    useEffect(() => {
        if (initialized) {
            svgGenerator.renderCurrent()
        }
    }, [text, size, delay, duration, strokeWidth, fillColor, fontVariant, timingFunction, strokeColor,repeat, initialized])

    useEffect(() => {

        if (initialized) {
            svgGenerator.loadVariants()
        }
    }, [fontFamily, initialized])




    const update = (key, val) => {
        dispatch(setSettings(key, val))
    }

    return (
        <div className="settings">
            <div className="text-holder">
                <div className="input-group text-center ">
                    <input
                        className="input-text text-center "
                        type="text"
                        id="input-text"
                        value={text}
                        placeholder="Input Text Here"
                        onChange={e => update(SET_TEXT, e.target.value)}
                    />

                </div>
            </div>

            <div className="tuners-holder">
                <div>
                    <div className="input-group">
                        <label>Font: <span className="fonts-info">(Check all fonts <a className="fonts-link" href="https://fonts.google.com/?sort=alpha" target="_blank" rel="noopener noreferrer" >here</a>)</span> </label>
                        <select
                            id="font-select"
                            value={fontFamily}
                            onChange={e => update(SET_FONT_FAMILY, e.target.value)}
                        >
                        </select>
                    </div>

                    <div className="input-group">
                        <label>Variant:</label>
                        <select
                            id="font-variant"
                            value={fontVariant}
                            onChange={e => update(SET_FONT_VARIANT, e.target.value)}
                        >
                        </select>

                    </div>
                </div>
                <div>
                    <div className="input-group">

                        <label>Size:</label>
                        <input
                            type="number"
                            id="input-size"
                            value={size}
                            placeholder={100}
                            onChange={e => update(SET_SIZE, e.target.value)}

                        />
                    </div>

                    <div className="input-group">
                        <label>Stroke Width(px):</label>
                        <input
                            type="number"
                            id="input-width"
                            value={strokeWidth}
                            placeholder={2 + 'px'}
                            onChange={e => update(SET_STROKE_WIDTH, e.target.valueAsNumber)}

                        />
                    </div>

                </div>
                <div>
                    <div className="input-group">

                        <label>Delay(s):</label>
                        <input
                            type="number"
                            id="input-delay"
                            placeholder={0.1 + 's'}
                            value={delay}
                            onChange={e => update(SET_DELAY, e.target.valueAsNumber)}

                        />
                    </div>
                    <div className="input-group">

                        <label>Animation duration(s):</label>
                        <input
                            type="number"
                            id="input-duration"
                            placeholder="auto"
                            value={duration}
                            onChange={e => update(SET_DURATION, e.target.valueAsNumber)}

                        />

                    </div>
                    <div className="input-group ">

                        <label className="inline">Repeat:</label>
                        <input
                            type="checkbox"
                            id="input-duration"
                            placeholder="auto"
                            checked={repeat}
                            onChange={e => update(SET_REPEAT, e.target.checked)}

                        />

                    </div>
                </div>
                <div>
                    <div className="input-group">
                        <label>Timing Function:</label>
                        <select id="timing-function"
                            value={timingFunction}
                            onChange={e => update(SET_TIMING_FUNCTION, e.target.value)}
                        >
                            <option value='ease'>ease</option>
                            <option value='ease-in'>ease-in</option>
                            <option value='ease-out'>ease-out</option>
                            <option value='ease-in-out'>ease-in-out</option>
                            <option value='linear'>linear</option>
                            <option value='step-start'>step-start</option>
                            <option value='step-end'>step-end</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label>Fill Color:</label>
                        <input
                            type="color"
                            id="input-color"
                            value={fillColor}
                            onChange={e => update(SET_FILL_COLOR, e.target.value)}
                        />
                    </div>
                    <div className="input-group">
                        <label>Stroke Color:</label>
                        <input
                            type="color"
                            id="input-color"
                            value={strokeColor}
                            onChange={e => update(SET_STROKE_COLOR, e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    {/* <label</label>
                            className="hidden">Separate characters:
                        <input
                                type="checkbox" checked
                                id="input-separate"
                            />
                        
                        <label</label>
                            className="hidden">Union:
                        <input
                                type="checkbox"
                                id="input-union"
                            />
                         */}
                </div>
            </div>


        </div>
    )
}

const mapStateToProps = (state) => {

    let { settings, meta } = state
    return { ...settings, ...meta }
}


SettingsHolder = connect(mapStateToProps, null)(SettingsHolder)
// SettingsHolder = connect(null, null)(SettingsHolder)
export default SettingsHolder
