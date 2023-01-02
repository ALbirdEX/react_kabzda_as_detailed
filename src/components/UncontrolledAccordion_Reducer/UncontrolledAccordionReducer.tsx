import React, {useReducer} from 'react';
import {reducer, TOGGLE_COLLAPSED} from "./Reducer";

type AccordionPropsType = {
    titleValue: string,
}


function AccordionReducer(props: AccordionPropsType) {

    const [state, dispatch] = useReducer(reducer, {collapsed: true})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: TOGGLE_COLLAPSED})
            }}/>

            {!state.collapsed && <AccordionBody/>} {/*меняем значение тем самым получаем false
                                                    на котором и останавливаемся
                                                    по умолчанию - true*/}
        </div>
    )
}


type AccordionTitlePorpsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePorpsType) {
    return (
        <h3 onClick={() => {
            props.onClick()
        }}>*** {props.title} ***</h3>
    );
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>3</li>
    </ul>
}

export default AccordionReducer;