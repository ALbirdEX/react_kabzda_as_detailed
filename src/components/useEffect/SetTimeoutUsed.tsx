import React, {useEffect, useState} from 'react';

export const SetTimeoutUsed = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log("SetTimeout ")

    useEffect(() => {

        setTimeout(() => {
            console.log("SetTimeout used")
                //document.title = counter.toString()
        }, 1000)

    }, [counter])

    return <>
        Hello, counter: {counter} fake: {fake}
        <div>
            <button onClick={() => setCounter(counter + 1)}> +</button>
            <button onClick={() => setFake(fake + 1)}> +</button>
        </div>
    </>
};