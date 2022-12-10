import React, {ChangeEvent, useState} from 'react';

const ControlledSelect = () => {

    const [selectValue, setSelectValue] = useState<string | undefined>(undefined)
    const selectValueHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSelectValue(event.currentTarget.value)
    }


    return <select value={selectValue} onChange={selectValueHandler}>
        <option>none</option>
        <option value={"1"}>Apple</option>
        <option value={"2"}>Orange</option>
        <option value={"3"}>Banana</option>
    </select>
};

export default ControlledSelect;