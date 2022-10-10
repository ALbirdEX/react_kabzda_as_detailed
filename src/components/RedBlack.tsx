import React from 'react';


export function RedBlack(props: any) {
    if (props.value === "Red"){
        return <div><h1>R</h1></div>
    } if (props.value === "Black"){return <div><h1>B</h1></div>}
    else return <div><b><h1>ERROR</h1></b></div>
}

