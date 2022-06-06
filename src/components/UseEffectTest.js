import React from 'react';

export default function UseEffectTest() {
    
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    
    console.log("Component rendered")
    
    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */
    
    React.useEffect(()=>{

        // ilk renderda useEffect çalışıyor
        // starwars data fetch ile alınıyor
        // setStarWarsData ile data oluşturuluyor (setState)
        // bu yuzden App re-render oluyor
        // ama useEffect tekrar çalışmıyor (count degişmiyor)

        console.log("Effect function ran")

        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))

    },[count])

    // },[]) sondaki array useEffect dependency. 
    // useEffect hangi state e göre çağıralacak ona karar veriyor
    // [count] yazarsak, count state i değiştikce useEffect çağrılır...
    // sadece bir kez çağrılsın istersen boş bir array  olmalı []


    return (
        <div>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            <h2>The count is {count}</h2>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )
}