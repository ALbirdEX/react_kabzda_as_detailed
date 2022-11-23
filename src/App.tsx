import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, valueType} from "./components/Rating/Rating";
import {MyTitle} from "./components/MyTitle";
import {RedBlack} from "./components/RedBlack";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff2} from "./components/UncontrolledOnOff/UncontrolledOnOff2";


//function declaration
function App() {
    console.log("App rendering")

    let [on, setOn] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<valueType>(0)
    let [collapsed, setCollapsed] =useState<boolean>(true)

    /*  const onClickHandler = () => setOn(!on)*/

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            <MyTitle title={"Идём дальше"}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/} {/*свернут - да*/}
            <Accordion titleValue={"Menu"}
                       collapsed={collapsed}
                       //setCollapsed={setCollapsed}
                       setCollapsed={() => {setCollapsed(!collapsed)}}/>
            <UncontrolledAccordion titleValue={"Uncontrolled Menu"}/>
            Uncontrolled
            <UncontrolledRating/>
            Controlled
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <RedBlack value={"Black"}/>

            <h1>Uncontrolled</h1>
            <UncontrolledOnOff onChange={setSwitchOn}/> <h3>{switchOn.toString()}</h3>
            <UncontrolledOnOff2/>

            <h1>Controlled</h1>
            <OnOff2 on={on}
                    setOn={setOn}/>
            <OnOff on={on}
                   //onChange={(on) => {setOn(on)}}
                   onChange={setOn}/>
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