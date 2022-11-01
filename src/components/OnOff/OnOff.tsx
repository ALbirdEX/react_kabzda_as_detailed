import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
}

export function OnOff(props: OnOffPropsType) {
    return (
            <div>
                <button className={props.on ? `${s.buttonOn} ${s.colorOn}` : s.buttonOn}>On</button>
                <button className={!props.on ? s.buttonOff + ' ' + s.colorOff : s.buttonOn}>On</button>
                <button className={props.on ? s.circle + ' ' + s.colorOn : s.circle + ' ' + s.colorOff}></button>
            </div>

    )
}