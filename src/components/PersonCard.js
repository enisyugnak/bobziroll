import React from 'react';
import "../css/personcard.css"
import PersonCardStar from './PersonCardStar';

export default function PersonCard(){
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })

    // icon  belirleme PersonCardStar  a taşındı
    let  starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png";
    
    /** 
     * object spread  operator
     * once objenin tum elemanlarını alıyoruz
     * ...prevContact
     * 
     * sonra son elemanın degerini degistiriyoruz
     *  isFavorite: !prevContact.isFavorite
     * 
    */
    
    /**
     * 
     * bu  fonksiyonu PersonCardStar dan çağırmak icin
     * prop olarak handleClick tanımlayıp fonksiyon ismini
     * PersonCardStar componentine gönderiyoruz. 
     * 
     */
    
    function toggleFavorite() {
        setContact(prevContact=>({
            ...prevContact,
            isFavorite:!prevContact.isFavorite
        }))
    }

    return(
        <div className='card-main'>
        <article className="card">
            <img src="./images/user.png" className="card--image" />
            <div className="card--info">
                <PersonCardStar 
                    isFilled={contact.isFavorite}
                    handleClick={toggleFavorite}
                />
                <h2 className="card--name">
                    {contact.firstName} {contact.lastName}
                </h2>
                <p className="card--contact">{contact.phone}</p>
                <p className="card--contact">{contact.email}</p>
            </div>
            
        </article>
    </div>
    )

}