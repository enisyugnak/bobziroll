import React from 'react';
import Box from './Box';
import boxData from "../data/boxes"

import "../css/boxes.css"
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */

export default function BoxesPage() {

    const [squares,setSquares] = React.useState(boxData);
    //  handleClick fonksiyonunu yeni bir fonksiyon
    // gibi tanımlayıp,  icine item.id parametresi ekliyoruz

    const boxElements = squares.map(item=>(
            <Box 
            key={item.id}  
            on={item.on} 
            handleClick={()=>toggle(item.id)}
            />
        ))

    function toggle(id){

        setSquares(prevSquares=>{
            return prevSquares.map((square)=>{
                /* if / else
                if(square.id === id){
                    return {...square,on:!square.on}
                }else{
                    return  square
                }
                */
               // ternary
                return square.id === id ?  {...square,on:!square.on} : square
            })

            //** OLD WAY  with  for loop */
            /*const newSquares = [];
            for (let i = 0; i < prevSquares.length; i++) {
                const currentSquare = prevSquares[i]
                if(currentSquare.id === id){
                    const updatedSquare ={
                       ...currentSquare,
                       on : !currentSquare.on 
                    }
                    newSquares.push(updatedSquare)
                }else{
                    newSquares.push(currentSquare)
                }
            }

            return newSquares*/
        })


    }

    return(
        <div className="box--page">
            {boxElements}
        </div>
    )

}