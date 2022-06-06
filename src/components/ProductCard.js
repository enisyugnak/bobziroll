import React from "react";
import smallist from "../data/smalist"

export default function  ProductCard(props){

    let randomTitle;
    function getRandomProduct(){
        const arr = smallist.data.products;
        const randomNum = Math.round(Math.random() * arr.length);
        randomTitle = arr[randomNum].name
        console.log(randomTitle);
    }

    function  cardClicked(e){
        getRandomProduct();
    }

    return (
        <div className="product--card">
            <p>{randomTitle}</p>
            <p><span className="bold">{props.title}</span></p>
            <p>{props.price} TL</p>
            <button onClick={cardClicked}>click</button>
        </div>
    )
}