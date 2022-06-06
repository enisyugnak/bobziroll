import React from 'react'
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
export default function Box(props) {


    const styles = {
        backgroundColor: props.on ?  "#222222" : "transparent"
    }

    //  clickHandler fonksiyonu bir ust componentten geliyor. 
    // onClick event  bir ustten  gelen fonksiyonu tetikliyor
    // handleClick={()=>toggle(item.id)}
    // id parametresini yukarda tanımlıyoruz.
    // bu yuzden direk props.handleClick yeterli. 


    return(
        <div 
            className="box" 
            style={styles} 
            onClick={props.handleClick}
            key={props.id}>
        </div>
    )
}