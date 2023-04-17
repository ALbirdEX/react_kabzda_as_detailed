import React, {useState, KeyboardEvent, useEffect} from 'react';
import styles from './Select.module.css'

type ItemType = {
    title: string
    value: any
}

type SelectPropsType = {
    value?: number
    onChange: (value: number) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(it => it.value === props.value)
    const hoveredItem = props.items.find(it => it.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: number) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i <= props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1]

                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if(!selectedItem) {
                props.onChange(props.items[0].value)
            }
            props.onChange(props.items[0].value)
        }

        if (e.key === "Enter" || e.key ==="Escape") {
            setActive(false)
        }
    }


    return (
        <>
            {/*<select>
                <option value={props.items[0].value}>{props.items[0].title}</option>
                <option value={props.items[1].title}>{props.items[1].title}</option>
                <option value={props.items[2].title}>{props.items[2].title}</option>
            </select>*/}

            <div className={styles.select} onKeyUp={onKeyUp} tabIndex={0}>
                {/*<div className={`${styles.select} + ${active ? styles.active : ''}`}>
                <h3 onClick={showItems}>{selectedItems && selectedItems.title}</h3>*/}
                <span className={styles.main}
                      onClick={toggleItems}>{selectedItem && selectedItem.title}</span> {/*если есть selectedItems то отображаем selectedItems.title*/}
                {
                    active &&
                    <div className={styles.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() =>{setHoveredElementValue(i.value)}}
                            /*className={(selectedItem === i ? styles.selected : "")}*/
                            className={`${styles.item} + ${hoveredItem === i ? styles.selected : ""}`}
                            key={i.value}
                            onClick={() => {onItemClick(i.value)}}>
                            {i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    );
}