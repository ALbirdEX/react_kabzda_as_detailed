import React, {useRef, useState} from 'react';

const GetValueOfUncontrolledInputByButtonPres = () => {

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const element = inputRef.current as HTMLInputElement
        setValue(element.value)
    }

    return <><input ref={inputRef}/><button onClick={save}> save </button> - actual value: {value} </>
}

export default GetValueOfUncontrolledInputByButtonPres;