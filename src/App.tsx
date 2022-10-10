import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {MyTitle} from "./components/MyTitle";


//function declaration
function App() {
    console.log("App rendering")
    return (
        <div>
            <PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            <MyTitle title={"Идём дальше"}/>
            <Accordion title={"МЕНЮ"}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

function PageTitle(props: any) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;
