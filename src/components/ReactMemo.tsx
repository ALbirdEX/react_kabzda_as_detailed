import React, {useState} from 'react';

const NewMessageCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}

const UserSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, index) => <div key={index}>{u}</div>)}
    </div>
}


const Users = React.memo(UserSecret)


const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Alex', 'Victor', 'Dima'])

    const addUser = () => {
        const newUsers = [...users, 'Sveta ' + new Date().getTime()]
        setUsers(newUsers)
    }


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={addUser}>add user</button>
            <NewMessageCounter count={counter}/>
            <Users users={users}/>
        </div>
    );
};

export default Example1;