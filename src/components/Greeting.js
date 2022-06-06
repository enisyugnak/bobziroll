import React from "react";
/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

export default function Greeting(){

    //let greetingMessage = "hedelek";


    // useState bu normali
    const result = React.useState("budur");
    // array obje dönüyor
    // console.log(result[0]) ===> budur
    

    // deconstructing array
    // [array,function]
    const [isImportant,setIsImportant] = React.useState("YES");
    // console.log(result) ===> budur

    function btnClicked(){
        
        setIsImportant("NO");
        //greetingMessage = document.getElementById("personName").value;
        //console.log(greet("hasanbey"));
    }

    function greet(name){
        const date = new Date()
        const hours = date.getHours()
        
        let timeOfDay
        if(hours >= 4 && hours < 12) {
            timeOfDay = "morning"
        } else if(hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else if(hours >= 17 && hours < 20) {
            timeOfDay = "evening"
        } else {
            timeOfDay = "night"
        }
        
        return `Good ${timeOfDay}, ${name}!`
    }

    return(
 
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value" onClick={btnClicked}>
                <h1>{isImportant}</h1>
            </div>
        </div>


    )
}