import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {MyTitle} from "./components/MyTitle";
import {RedBlack} from "./components/RedBlack";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff/OnOff2";

//function declaration
function App() {
    console.log("App rendering")

    let [on, setOn] = useState(false)

    /*  const onClickHandler = () => setOn(!on)*/

    return (
        <div>
            <PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            <MyTitle title={"Идём дальше"}/>
            <Accordion titleValue={"Menu"} collapsed={true}/> {/*свернут - да*/}
            <Accordion titleValue={"Users"} collapsed={false}/> {/*свернут - нет*/}
            <Rating value={5}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <RedBlack value={"Black"}/>

            <OnOff on={false}/>
            <OnOff2 on={on}
                    setOn={setOn}/>
        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return <h1>{props.title}</h1>
}


export default App;