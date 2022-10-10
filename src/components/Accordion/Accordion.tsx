import React from 'react';

type AccordionPropsType = {
    titleValue: string,
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {                            //props.collapsed === true
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    }
}


type AccordionTitlePorpsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePorpsType) {
    return (
        <h3>*** {props.title} ***</h3>
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

export default Accordion;