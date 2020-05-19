import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import {
    SET_TEXT,
    SET_SIZE,
    SET_DELAY,
    SET_DURATION,
    SET_STROKE_WIDTH,
    setSettings,
    SET_FILL_COLOR
} from './../../../redux/actions'


let SettingsHolder = (props) => {

    let { dispatch } = props

    let {
        fontFamily,
        fontVariant,
        text,
        size,
        unionCheckbox,
        separateCheckbox,
        bezierAccuracy,
        delay,
        duration,
        strokeWidth, 
        fillColor
    } = props

    const update = (key, val) => dispatch(setSettings(key, val))

    return (
        <div>
            <div
                className="settings">
                <div>
                    <label
                        className="input-text">
                        <input
                            className="text-center"
                            type="text"
                            id="input-text"
                            value={text}
                            placeholder="Text Here"
                            onChange={e => update(SET_TEXT, e.target.value)}
                        />
                    </label>
                </div>
                <div
                    className="tuners">
                    <div>
                        <label>Font:<select
                            id="font-select"
                        // onChange={e => update(SET_FONT,e.target.value)}
                        >
                        </select>
                        </label>
                        <label>Variant:<select
                            id="font-variant"
                        // onChange={e => update(SET_VARIANT,e.target.value)}
                        >
                        </select>
                        </label>
                    </div>
                    <div>
                        <label>Size:
                            <input
                                type="number"
                                id="input-size"
                                value={size}
                                onChange={e => update(SET_SIZE, e.target.value)}
                            // onChange={renderCurrent}

                            />
                        </label>
                        <label>Bezier accuracy:
                            <input
                                type="text"
                                id="input-bezier-accuracy"
                                placeholder="auto"
                            // onChange={renderCurrent}

                            />
                        </label>
                    </div>
                    <div>
                        <label
                            className="hidden">Union:
                        <input
                                type="checkbox"
                                id="input-union"
                            // onChange={renderCurrent}

                            />
                        </label>
                        <label>Delay(s):
                            <input
                                type="number" checked
                                id="input-delay"
                                value={delay}
                                onChange={e => update(SET_DELAY, e.target.valueAsNumber)}
                            // onChange={renderCurrent}

                            />
                        </label>
                        <label>Animation duration(s):
                            <input
                                type="number"
                                id="input-duration"
                                placeholder="auto"
                                value={duration}
                                onChange={e => update(SET_DURATION, e.target.valueAsNumber)}
                            // onChange={renderCurrent}

                            />
                        </label>
                    </div>
                    <div>
                        <label>Stroke Width(px):
                            <input
                                type="number"
                                id="input-width"
                                value={strokeWidth}
                                onChange={e => update(SET_STROKE_WIDTH, e.target.valueAsNumber)}
                            // onChange={renderCurrent}

                            />
                        </label>
                        <label>Stroke Width(px):
                            <input
                                type="color"
                                id="input-color"
                                value={fillColor}
                                onChange={e => update(SET_FILL_COLOR, e.target.value)}
                            // onChange={renderCurrent}

                            />
                        </label>
                        <label
                            className="hidden">Separate characters:
                        <input
                                type="checkbox" checked
                                id="input-separate"
                            // onChange={renderCurrent}

                            />
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    let { settings } = state
    return { ...settings }
}


SettingsHolder = connect(mapStateToProps, null)(SettingsHolder)
// SettingsHolder = connect(null, null)(SettingsHolder)
export default SettingsHolder
