import React from 'react'

export default function PersonCardStar(props) {

    let  starIcon = props.isFilled ? "star-filled.png" : "star-empty.png";

    return(
        <img 
            src={`../images/${starIcon}`}
            className="card--favorite"
            onClick={props.handleClick}
        />
    )
}