import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
}


export function OnOff(props: OnOffPropsType) {
    return (
        <div>
            <button className={props.on ? `${s.button} ${s.colorOn}` : s.button}><h3>On</h3></button>
            <button className={!props.on ? s.button + ' ' + s.colorOff : s.button}><h3>Off</h3></button>
            <button className={`${s.circle} ${props.on ? s.colorOn : s.colorOff}`}></button>
        </div>
    )
}