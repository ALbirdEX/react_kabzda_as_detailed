import React, {useEffect, useState} from 'react';
import {AnalogClockView} from "./AnalogClockView";
import {DigitalClockView} from "./DigitalClockView";

type PropsType = {
    mode: string
    onChange: (mode: string) => void
}

export const ClockAnalog: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

        const intervalID = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    let view

    switch (props.mode) {
        case "analog":
            view = <AnalogClockView date={date}/>
            break
        case "digital":
        default:
            view = <DigitalClockView date={date}/>
    }

    const Analog = () => {props.onChange("analog")}
    const Digital = () => {props.onChange("digital")}

    return <div>
        <button onClick={Analog} disabled={props.mode === "analog"}>ANALOG</button>
        <button onClick={Digital} disabled={props.mode === "digital"}>DIGITAL</button>
        <div>{view}</div>
    </div>
}

export type ClockViewPropsType = {
    date: Date
}