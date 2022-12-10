import React from 'react';

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    //setCollapsed: (collapsed: boolean) => void
    items: ItemType[]

    setCollapsed: () => void
    onClickItem: (value: any, title: string) => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                //onClick={() => {props.setCollapsed(props.collapsed)}}
                            onClick={props.setCollapsed}
            />
            {!props.collapsed && <AccordionBody items={props.items}
                                                onClickItem={props.onClickItem}/>} {/*меняем значение тем самым получаем false
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
        //<h3 onClick={() => {props.onClick()}}>*** {props.title} ***</h3>
        <h3 onClick={props.onClick}>*** {props.title} ***</h3>
    );
}

type AccordionBodyPropsType = {
    items: Array<ItemType>
    onClickItem: (value: any, title: string) => void
}

function AccordionBody(props: AccordionBodyPropsType) {

    const valueHandler = (value: any, title: string) => props.onClickItem(value, title)

    return (
        <ul>
            {props.items
                .map((i, index) =>
                    <li onClick={() => {valueHandler(i.value, i.title)}} key={index}>
                        <h4>{i.title}</h4>
                    </li>)}
        </ul>
    )
}

export default Accordion;