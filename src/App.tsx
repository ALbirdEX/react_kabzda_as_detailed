import React, {useState} from 'react';
import './App.css';
import Accordion, {ItemType} from "./components/Accordion/Accordion";
import {Rating, valueType} from "./components/Rating/Rating";
import {MyTitle} from "./components/MyTitle";
import {RedBlack} from "./components/RedBlack";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff2} from "./components/UncontrolledOnOff/UncontrolledOnOff2";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {TrackValueOfUncontrolledInput} from "./components/UncontrolledInput/TrackValueOfUncontrolledInput";
import GetValueOfUncontrolledInputByButtonPres from "./components/UncontrolledInput/GetValueOfUncontrolledInputByButtonPres";
import {ControlledInput} from "./components/ControlledInput/ControlledInput";
import {ControlledCheckBox} from "./components/ControlledInput/ControlledCheckBox";
import ControlledSelect from "./components/ControlledInput/ControlledSelect";


//function declaration
function App() {
    console.log("App rendering")

    let [on, setOn] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<valueType>(0)
    let [collapsed, setCollapsed] =useState<boolean>(true)
    let [value, setValue] = useState("")

    const friend = [
        {title: "Dima", value: 1},
        {title: "Valera", value: 2},
        {title: "Alex", value: 3},

    ]

    const collapsedHandler = () => {
        setCollapsed(!collapsed)
    }
    /*  const onClickHandler = () => setOn(!on)*/

    const onClickHandler = (value: any, title: string) => {
        const valueID = `${title}, you ID : ${value}`
        setValue(valueID)
        setCollapsed(!collapsed)
    }

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            <MyTitle title={"Идём дальше"}/>
            {/*<Accordion titleValue={"Menu"} collapsed={true}/>*/} {/*свернут - да*/}
            <h3>{collapsed.toString()}</h3>
            <h2>{`samurai ${value}`}</h2>
            <Accordion titleValue={"Menu"}
                       collapsed={collapsed}
                       //setCollapsed={setCollapsed}
                       setCollapsed={collapsedHandler}
                       items={friend}
                       onClickItem={onClickHandler}/>
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

            <h1>Uncontrolled</h1>
            <UncontrolledInput/>
            <div><TrackValueOfUncontrolledInput/></div>
            <div><GetValueOfUncontrolledInputByButtonPres/></div>

            <h1>Controlled</h1>
            <ControlledInput/>
            <div>***</div>
            <ControlledCheckBox/>
            <div>***</div>
            <ControlledSelect/>
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