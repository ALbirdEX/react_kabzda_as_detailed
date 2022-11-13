import React from 'react';
import s from './OnOff.module.css'

type OnOff2PropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export function OnOff2(props: OnOff2PropsType) {
    /* let [on, setOn] = useState(true)*/

    const onClickHandlerOn = () => props.setOn(true)

    const onClickHandlerOff = () => props.setOn(false)

    return (
        <div>
            <button onClick={onClickHandlerOn} className={props.on ? `${s.button} ${s.colorOn}` : s.button}>
                <h3>On</h3>
            </button>
            <button onClick={onClickHandlerOff} className={!props.on ? s.button + ' ' + s.colorOff : s.button}>
                <h3>Off</h3>
            </button>
            <button className={`${s.circle} ${props.on ? s.colorOn : s.colorOff}`}/>
        </div>
    )
}