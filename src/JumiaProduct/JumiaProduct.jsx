import React from "react";

import "./JumiaProduct.css";
import JumiaProductItem from "./JumiaProductItem";

export default function JumiaProduct() {
  return (
    <div className="jumiaProduct">
      <JumiaProductItem
        image="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/58/23808/1.jpg?9050"
        name="Pixel 40 Inch Digital LED"
        price="UGX 715,000"
        price_crossed="UGX 800,000"
      />

<JumiaProductItem
        image="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/694/1.jpg?7221"
        name="Nokia 105 DS 1.8 Dual ..."
        price="UGX 48,000"
        price_crossed="UGX 70,000"
      />

<JumiaProductItem
        image="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/18223/1.jpg?9357"
        name="Sky 32 Inch HD Digital TV"
        price="UGX 800,000"
        price_crossed="UGX 900,000"
      />

<JumiaProductItem
        image="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/69/63244/1.jpg?8721"
        name="An Awesome Cool Bed Net"
        price="UGX 15,000"
        price_crossed="UGX 90,000"
      />
      
      <JumiaProductItem
      image="https://ug.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/75/71611/1.jpg?5700"
      name="Small Fridge for Babies"
      price="UGX 305,000"
      price_crossed="UGX 400,000"
    />
  
    </div>
    
  );
}
