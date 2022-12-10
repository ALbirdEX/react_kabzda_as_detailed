import React, {ChangeEvent, useState} from 'react';

export const ControlledCheckBox = () => {

    const [checkedValue, setCheckedValue] = useState(true)

    const parentCheckValue = (event: ChangeEvent<HTMLInputElement>) => {
        const newCheckedValue = event.currentTarget.checked
        setCheckedValue(newCheckedValue)
    }
    return <input type={"checkbox"} checked={checkedValue} onChange={parentCheckValue}/>
}