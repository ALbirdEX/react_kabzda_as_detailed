import React, {useState} from 'react';


function generateDate() {
    console.log("generateDate")
    return 3221548546546
}

const UseState = () => {
    console.log("Example")
    // const initialValue = useMemo(generateDate, [])
    const [counter, setCounter] = useState<number>(generateDate) //initialValue  <number> - неявная типизация
    /*    const changer = (state: number) => {
            return state + 1
        }*/
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
};

export default UseState;