import React from "react";
import "./ShopItem.css";

export default function ShopItem ({card}) {
const {name, price, color,img} = card;


return (
  <li className="ShopItem">
    <img src={img} alt={name} className={"ShopItem__img"} />
    <h2 className="ShopItem__title">{name}</h2>
    <h3 className="ShopItem__subtitle">{color}</h3> 
    <span className="ShopItem__price">${price}</span>
    <div className={'btn'}>
      <span className={'btnText'}>add to cart</span>
    </div>
  </li>
)

}