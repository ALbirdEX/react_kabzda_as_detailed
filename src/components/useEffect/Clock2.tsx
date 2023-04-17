import React, {useEffect, useState} from 'react';

export const SetIntervalClock2 = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        }, 1000)
    }, [])

    return <>
        Hello, clock: {date.toLocaleTimeString()}
    </>
}
//отсутствует clearInterval