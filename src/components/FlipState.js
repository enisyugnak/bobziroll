
import React from "react";
import "../css/flipstate.css"
/**
 * Challenge: 
 * - Initialize state for `isGoingOut` as a boolean
 * - Make it so clicking the div.state--value flips that
 *   boolean value (true -> false, false -> true)
 * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
 * 
 */

/**
* 
* ternary operator direk jsx  icinde kullanılabilir
*  <h1>{isGoingOut ? "Yes" : "No"}</h1>
* seklinde
*/

export default function FlipState() {
    
    const [isGoingOut, setisGoingOut] = React.useState(false)

    function stateClicked() {
        setisGoingOut(prevState => !prevState)
    }
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value" onClick={stateClicked}>
                <h1>{isGoingOut ? "YES" : "No"}</h1>
            </div>
        </div>
    )
}