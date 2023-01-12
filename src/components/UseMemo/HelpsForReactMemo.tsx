import React, {useMemo, useState} from 'react';

const UserSecret = (props: { users: Array<string> }) => {
    console.log("USERS SECRET")
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}


const Users = React.memo(UserSecret)


const HelpsForReactMemo = () => {
    console.log("HelpsForReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Victor', 'Dima'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <>
            <hr/>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>+ User</button>
            {counter}
            <Users users={newArray}/>
        </>
    );
};
export default HelpsForReactMemo;