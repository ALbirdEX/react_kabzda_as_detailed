import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
   // on: boolean
}

export function OnOff(props: OnOffPropsType) {

    let [on, setOn] = useState(false);

    const onStyle = {
        width: "100px",
        height: "50px",
        borderRadius: "50px",
        border: "3px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: on ? "green" : "white"
    };
    const offStyle = {
        width: "100px",
        height: "50px",
        borderRadius: "50px",
        border: "3px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: !on ? "red" : "white"
        //backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "15px",
        border: "3px solid black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: on ? "green" : "red"
    };


    return (
        <div>
            <div onClick={()=>{setOn(true)}} style={onStyle}>On</div>
            <div onClick={()=>{setOn(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}