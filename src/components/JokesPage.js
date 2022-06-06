import React from 'react';
import Joke from "../components/Joke"
import jokesData from "../data/jokes"

export default function JokesPage(props) {

    const jokeElements =  jokesData.map(jokes =>{

        return <Joke 
                    key={jokes.id}
                    setup={jokes.setup}
                    punchline = {jokes.punchline}
                />
    })

        console.log(jokeElements)

  return(
    <div className="jokes--page">
        {jokeElements}
    </div>
  )
}