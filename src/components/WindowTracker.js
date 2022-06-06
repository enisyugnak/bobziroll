import React from 'react';

export default function WindowTracker() {

    const [size,setSize] = React.useState(window.innerWidth);

    React.useEffect(()=>{

        function watchWidth(){
            console.log("watch")
            setSize(window.innerWidth);
        }
        
        window.addEventListener("resize",watchWidth)

        return function (){
            console.log("clean")
            window.removeEventListener("resize",watchWidth);
        }

    },[])

    return (
       <h1>Window width: {size}</h1>
    )
}