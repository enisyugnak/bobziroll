import React from "react"
import ProductCard from "./ProductCard"
import "../css/products.css"

export default function  ProductsPage(props){
    

    let liste = props.products.map(item=>{
        return <ProductCard 
                    key={item.id}
                    title={item.name} 
                    price={item.price}
                    />
        })

    return(
        <div className="products--list">
            {liste}
        </div>

    )
}