import React from "react";
import  memesData from "../data/memes"
import "../css/memes.css"

    /**
     * Challenge: 
     * As soon as the Meme component loads the first time,
     * make an API call to "https://api.imgflip.com/get_memes".
     * 
     * When the data comes in, save just the memes array part
     * of that data to the `allMemes` state
     * 
     * Think about if there are any dependencies that, if they
     * changed, you'd want to cause to re-run this function.
     * 
     * Hint: for now, don't try to use an async/await function.
     * Instead, use `.then()` blocks to resolve the promises
     * from using `fetch`. We'll learn why after this challenge.
     */

export default function MemeGenerator(){
    //const memesArray = memeData.data.memes;
    //const [memeImage,setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")

    const [meme,setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:""
    })

    const [allMemes,setAllMemes] = React.useState([])

    /** Async fetch */
    /** ama tavsiye etmedi... */
/*
    React.useEffect(async ()=>{
        const res = await fetch("https://api.imgflip.com/get_memes")
        const data = await res.json()
        setAllMemes(data.data.memes)
      },[])
*/



    /** 
     * useEffect clean up function asynch icinde kullanmak icin
     * useEffect i async yapmıyoruz...
     * yerine icerde async fonksiyon tanımlıyoruz
     * sonra cleanup icin return fonksiyonu kullanabiliriz. 
     * 
    */

    React.useEffect(()=>{
        async function getMemes(){
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes();
        // userEffect cleanup return function
        // simdi kullanmıyoruz..
        //return ()=>{}

    },[])
    
/*
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllMemes(data.data.memes))

    },[])
    */
    function getMemeImage(){
        //let memesArray = allMemes.data.memes
        let num = Math.floor(Math.random()*allMemes.length);
        let url = allMemes[num].url

        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage:url
        }))
        
    }

    function handleChange(event) {
        const {name,value} = event.target
        setMeme(prevMeme=>({
            ...prevMeme,
            [name]:value
        }))
    }

    return(
        <div className="container-memes">
            <div className="form">
                <input 
                    type="text"
                    id="topText"
                    name="topText"
                    placeholder="Top text"
                    className="form--input"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    id="bottomText"
                    name="bottomText"
                    placeholder="Bottom text"
                    className="form--input"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>

                <div className="meme">
                    <img src={meme.randomImage} className="meme--image" />
                    <h2 className="meme--text top">{meme.topText}</h2>
                    <h2 className="meme--text bottom">{meme.bottomText}</h2>
                </div>                  
            </div>
            
        </div>
    )
}