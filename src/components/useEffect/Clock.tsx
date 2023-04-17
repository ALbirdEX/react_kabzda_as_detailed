import React, {useEffect, useState} from 'react';

export const SetIntervalClock1 = () => {
    const [counter, setCounter] = useState(1)
    const clock = new Date()

    useEffect(() => {
        setInterval(() => {
            setCounter(state => state +1 )
                //document.title = new Date().toLocaleTimeString() // краш страницы
        }, 1000)
    }, [])

    return <>
        Hello, clock: {clock.toLocaleTimeString()}
    </>
};
//отсутствует clearInterval