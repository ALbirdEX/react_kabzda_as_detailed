import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, valueType} from "./components/Rating/Rating";
import {MyTitle} from "./components/MyTitle";
import {RedBlack} from "./components/RedBlack";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion_Reducer/UncontrolledAccordionReducer";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff2} from "./components/UncontrolledOnOff/UncontrolledOnOff2";
import {UncontrolledInput} from "./components/UncontrolledInput/UncontrolledInput";
import {TrackValueOfUncontrolledInput} from "./components/UncontrolledInput/TrackValueOfUncontrolledInput";
import GetValueOfUncontrolledInputByButtonPres
    from "./components/UncontrolledInput/GetValueOfUncontrolledInputByButtonPres";
import {ControlledCheckBox} from "./components/ControlledInput/ControlledCheckBox";
import ControlledSelect from "./components/ControlledInput/ControlledSelect";
import {Select} from "./components/Select/Select";
import UncontrolledAccordionReducer from "./components/UncontrolledAccordion_Reducer/UncontrolledAccordion";
import ReactMemo from "./components/ReactMemo";
import DifficultCount from "./components/UseMemo/DifficultCount";
import HelpsForReactMemo from "./components/UseMemo/HelpsForReactMemo";
import Dima2 from "./dopDima/Dima2/Dima2";
import LikeUseCallback from "./components/likeUseCallback";
import UseState from "./components/UseState";
import {UseEffectUsed} from "./components/useEffect/useEffect";
import {SetIntervalClock1} from "./components/useEffect/Clock";
import {SetIntervalClock2} from "./components/useEffect/Clock2";
import {SetIntervalClock3} from "./components/useEffect/Clock3Dima";
import {ClockAnalog} from "./components/useEffect/Clock/Clock3DimaAnalog";


//function declaration
function App() {
    let [on, setOn] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    let [ratingValue, setRatingValue] = useState<valueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [value, setValue] = useState("")


    const [mode, setMode] = useState("analog")
    const selectMode = (value: string) => setMode(value)

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

    const itemSelect = [
        {value: 1, title: "Mogilev"},
        {value: 2, title: "Minsk"},
        {value: 3, title: "Kiev"},
    ]

    const [valueItem, setValueItem] = useState(2)
    const clickItem = (value: number) => setValueItem(value)


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
            <h3>{switchOn.toString()}</h3>
            <UncontrolledOnOff onChange={setSwitchOn}/>
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
            <UncontrolledInput/>
            <div>***</div>
            <ControlledCheckBox/>
            <div>***</div>
            <ControlledSelect/>
            <div>
                <Select onChange={clickItem} items={itemSelect} value={valueItem}/>
            </div>
            <UncontrolledAccordionReducer titleValue={"Reducer accordion"}/>
            <h1>ReactMemo</h1>
            <ReactMemo/>
            <h1>UseMemo</h1>
            <DifficultCount/>
            <HelpsForReactMemo/>
            <LikeUseCallback/>
            <hr/>
            <h1>useState навароченный</h1>
            <UseState/>
            <hr/>
            <Dima2/>
            <UseEffectUsed/>
           {/* <h1>Clock 1</h1>
            <h2><SetIntervalClock1/></h2>*/}
         {/*   <h1>Clock 2</h1>
            <h2><SetIntervalClock2/></h2>*/}
            <h1>Clock Dima</h1>
            <h2><SetIntervalClock3/></h2>
            <ClockAnalog mode={mode} onChange={selectMode}/>

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