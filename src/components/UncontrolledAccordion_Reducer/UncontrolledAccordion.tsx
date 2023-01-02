import React, {useState} from 'react';

type AccordionPropsType = {
    titleValue: string,
}

function Accordion(props: AccordionPropsType) {

   const [collapsed, setCollapsed] = useState(true)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() =>{setCollapsed(!collapsed)}}/>
            {!collapsed && <AccordionBody/>} {/*меняем значение тем самым получаем false
                                                    на котором и останавливаемся
                                                    по умолчанию - true*/}
        </div>
    )
}

/*function Accordion2(props: AccordionPropsType) {
    if (props.collapsed) {                            //props.collapsed === true
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }
}*/

type AccordionTitlePorpsType = {
    title: string
    onClick: () => void
    }

function AccordionTitle(props: AccordionTitlePorpsType) {
    return (
        <h3 onClick={() => {props.onClick()}}>*** {props.title} ***</h3>
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