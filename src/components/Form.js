import React from 'react'

export default function Form(){

    /** passing objects in states */

    const [formData,setFormData] = React.useState(
        {
            firstName:"",
            lastName:"",
            email:"",
            comment:"",
            isFriendly:true,
            employment:"",
            favColor:""
        }
    );
        
    function handleChange(event) {

        const {name,value,type,checked} = event.target

        setFormData(prevFormData=>{
            return{
                ...prevFormData,
                [name]:type==="checkbox" ? checked : value
            }
        }
        )
    }
    function handleSubmit(event){
        // sayfanın refresh olmasını engelliyor
        // aksi halde, refresh, form data sıfırlanır.  
        event.preventDefault()
       // sendFormDataToAPI(formdData)
       console.log(formData)
    }

    return(
        <div className="form--page">
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
             <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />     
            <input
                type="text"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />      
            <textarea 
                onChange={handleChange}
                name="comment"
                value={formData.comment}
            />   
            <input
                id="isFriendly"
                type="checkbox"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">are you friendly</label>
            <br/>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
                
            </fieldset>

            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select id="favColor"
                    name="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
            >
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>   
            <br/>
            <label>button form  objesinin icinde oldugu icin,  <br/>
             onSubmit fonksiyonu tetikliyor</label>
             <br/>
            <button>Click To Send</button>         
        </form>
        </div>
    )
}