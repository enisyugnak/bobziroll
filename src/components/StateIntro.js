import React from "react";

    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize 
     * the state array with the same 2 items below
     * 
     * Don't worry about fixing `addItem` quite yet.
     */

export default function StateIntro(){

    // let thingsArray =  ["thing1","thing2"]
    // [array,function to set state]
    
    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])

    
    function  addThing(){
        const newThingText = `Thing ${things.length + 1}`
        // thingsArray.push(newThingText)
        // (array spread) ...prevThings
        // bu operator tüm array i seriyor
        // ...prevThings = ["Thing 1", "Thing 2"]
        // bu durumda, eski array e yeni yazıyı  ekliyor
        /*
        setThings(prevThings => {
             return [...prevThings, newThingText]
        })
        */
        // kısa yazım, direk array dönmece
        setThings(prevThings => [...prevThings,newThingText])

    }
    
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)

    return(
        <div>
            <button onClick={addThing}>click</button>
            <div>{thingsElements}</div>
        </div>
    )

}