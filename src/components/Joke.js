import React from 'react';
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
export default function Joke(props) {

    const [isShown,setIsShown] =  React.useState(false);
    function toggle(){
        setIsShown(prevShown=> !prevShown)
        console.log(isShown)
    }
    /** 
     * Conditional Rendering && 
     * if true show the line
     * true && <p>show this</p>
     */
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}>{isShown ? "hide" : "show"} Punchline</button>
            <hr />
        </div>
    )
}