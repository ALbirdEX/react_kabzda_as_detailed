import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, valueType} from "./components/Rating/Rating";
import {MyTitle} from "./components/MyTitle";
import {RedBlack} from "./components/RedBlack";
import {OnOff} from "./components/OnOff/OnOff";
import {OnOff2} from "./components/OnOff/OnOff2";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";


//function declaration
function App() {
    console.log("App rendering")

    let [on, setOn] = useState(false)
    let [ratingValue, setRatingValue] = useState<valueType>(0)


    /*  const onClickHandler = () => setOn(!on)*/

    return (
        <div className={"App"}>
            <PageTitle title={"This is APP components"}/>
            <PageTitle title={"My friends"}/>
            <MyTitle title={"Идём дальше"}/>
            <Accordion titleValue={"Menu"} collapsed={true}/> {/*свернут - да*/}
            <Accordion titleValue={"Users"} collapsed={false}/> {/*свернут - нет*/}
            <UncontrolledAccordion titleValue={"Uncontrolled"}/>
            Uncontrolled
            <UncontrolledRating/>
            Controlled
            <Rating value={ratingValue} onClick={setRatingValue}/>

            <RedBlack value={"Black"}/>

            <OnOff/>
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