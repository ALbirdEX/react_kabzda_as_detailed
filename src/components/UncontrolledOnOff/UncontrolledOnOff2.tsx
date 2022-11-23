import React, {useState} from 'react';
import s from '../OnOff/OnOff.module.css'


export function UncontrolledOnOff2() {

    let [on, setOn] = useState(true)

    const onClickHandlerOn = () => setOn(true)
    const onClickHandlerOff = () => setOn(false)

    return (
        <div>
            <button onClick={onClickHandlerOn} className={on ? `${s.button} ${s.colorOn}` : s.button}>
                <h3>On</h3>
            </button>
            <button onClick={onClickHandlerOff} className={!on ? s.button + ' ' + s.colorOff : s.button}>
                <h3>Off</h3>
            </button>
            <button className={`${s.circle} ${on ? s.colorOn : s.colorOff}`}/>
        </div>
    )
}