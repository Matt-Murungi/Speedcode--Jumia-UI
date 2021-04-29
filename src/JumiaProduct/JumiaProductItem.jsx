import React from 'react'

import "./JumiaProductItem.css";

export default function JumiaProductItem({image, name, price, price_crossed}) {
    return (
        <div className="jumiaProductItem">

        <img src={image} 
       className="jumiaProductItem__image"
       alt="" 
        srcset=""/>

    <p className="jumiaProductItem__name">{name}</p>

    <h2 className="jumiaProductItem__price">{price}</h2>

    <p className="jumiaProductItem__priceCrossed">{price_crossed}</p>

      </div>
    )
}
