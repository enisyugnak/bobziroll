import React from "react";
import Count  from './Count'
import "../css/counter.css"

export default function CounterPage(){

    const [count,setCount] = React.useState(0)

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    function plusClicked(){
        
        //setCount(count+1);

        //  state degistirmek
        //  callback fonksiyonla yapılıyor
        //  eski degeri artırıyoruz. 
       /* setCount(function(oldValue){
            oldValue + 1
        })
        */
        // callback, kısa yazım
        // onceki deger icin naming convention 
        // başa prev yazmaca

        setCount(prevCount=>prevCount+1);
    }

    function minusClicked(){
        setCount(prevCount=>prevCount-1);
    }


    return(
        <div className="counter">
        <button className="counter--minus" onClick={minusClicked}>–</button>
        <Count count={count}/>
        <button className="counter--plus" onClick={plusClicked}>+</button>
    </div>
    )
}