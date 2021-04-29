import React from "react";
import "./JumiaCategoryItem.css";

export default function JumiaCategoryItem({image, name}) {
  return (
    <div className="jumiaCategoryItem">
      <img className="jumiaCategoryItem__image" src={image} alt="" srcset="" />
      <span className="jumiaCategoryItem__name">{name}</span>
    </div>
  );
}
