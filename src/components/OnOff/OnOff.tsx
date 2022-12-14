import React from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "100px",
        height: "50px",
        borderRadius: "50px",
        border: "3px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: props.on ? "green" : "white"
    };
    const offStyle = {
        width: "100px",
        height: "50px",
        borderRadius: "50px",
        border: "3px solid black",
        display: "inline-block",
        marginLeft: "5px",
        padding: "5px",
        backgroundColor: !props.on ? "red" : "white"
        //backgroundColor: props.on ? "white" : "red"
    };
    const indicatorStyle = {
        width: "20px",
        height: "20px",
        borderRadius: "15px",
        border: "3px solid black",
        display: "inline-block",
        marginLeft: "20px",
        backgroundColor: props.on ? "green" : "red"
    };


    return (
        <div>
            <div onClick={()=>{props.onChange(true)}} style={onStyle}>On</div>
            <div onClick={()=>{props.onChange(false)}} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}