import React from "react";
import Greeting from "./components/Greeting";
import NavBar from "./components/NavBar";
import ProductsPage from "./components/ProductsPage";
import StateIntro from "./components/StateIntro";
import CounterPage from "./components/CounterPage";
import smalist from "./data/smalist"
import MemeGenerator from "./components/MemeGenerator";
import FlipState from "./components/FlipState";
import PersonCard from "./components/PersonCard";
import BoxesPage from "./components/BoxesPage";
import JokesPage from "./components/JokesPage";
import Form from "./components/Form";
import FormPassword from "./components/FormPassword";
import UseEffectTest from "./components/UseEffectTest";
import WindowTracker from "./components/WindowTracker";

/** 
<ProductsPage products={smalist.data.products}/>
*/

/**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */


export default function  App(){

  const [show,setShow] = React.useState(true);

function btnClicked(event) {
   setShow(prevShow=> !prevShow)
   console.log(show)
}

  return (
    <div>
      <NavBar/>
      <button onClick={btnClicked}>
        Toggle WindowTracker
      </button>
      {show && <WindowTracker/>}
    </div> 
  )
}