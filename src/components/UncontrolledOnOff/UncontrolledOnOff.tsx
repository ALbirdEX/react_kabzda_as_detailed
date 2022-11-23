import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onChange: (setSwitchOn: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType ) {

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

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}