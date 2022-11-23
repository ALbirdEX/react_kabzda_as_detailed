import React from 'react';

type RatingPropsType = {
    value: valueType
    onClick: (value: valueType) => void
}
export type valueType = 0 | 1 | 2 | 3 | 4 | 5

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/> {/*span*/}
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
    /*
        if (props.value === 1) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            );
        }
        if (props.value === 2) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            );
        }
        if (props.value === 3) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                    <Star selected={false}/>
                </div>
            );
        }
        if (props.value === 4) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={false}/>
                </div>
            );
        }
        if (props.value === 5) {
            return (
                <div>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                    <Star selected={true}/>
                </div>
            );
        }
        return (
            <div>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>
        );
    */
}

type StarPropsType = {
    selected: boolean
    value: valueType
    onClick: (value: valueType) => void
}

function Star(props: StarPropsType) {
    return <span onClick={() =>{props.onClick(props.value)}}>{props.selected ? <b>Star </b> : "Star "}</span>
}

/* замена if на тернарник
function Star1(props: StarPropsType) {
    if (props.selected) {           //props.selected === true (по умолчанию  true)
        return <span><b>Star </b> </span>
    } else {
        return <span>Star </span>
    }
}
*/
