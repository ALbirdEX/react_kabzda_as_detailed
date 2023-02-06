import React, {ChangeEvent, useState} from 'react';
import style from './Dima2.module.css'

const Dima2 = () => {
    const [value, setValue] = useState('')
    const [title, setTitle] = useState<string[]>([])
    const valueInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    const addElement = () => {
        let newTitle = [...title, value]
        setTitle(newTitle)
        setValue('')
    }
    const deleteAllElement = () => {
        setTitle([])
    }
    return (
        <div className={style.button}>
            <input onChange={valueInput} value={value} placeholder={"Введите значение"}/>
            <button onClick={addElement}><h3>Добавить</h3></button>
            <button onClick={deleteAllElement} disabled={!title.length}> <h3>Очистить список</h3></button>
            <div>{title.map(t => <div><hr/>{t}</div>)}</div>
        </div>

    )
};
export default Dima2;