import React from "react";
import "./ShopCard.css";

export default function ShopCard ({card}) {
  const {name, price, color,img} = card;

  return (
    <li className={'ShopCard'}
    style={{backgroundImage: `url(${img})`,
    }}
    >
      <div className={"ShopCardContent"}><div className="ShopCardContent__header">
        <h2 className={"ShopCardContent__title"}>{name}</h2>
        <h3 className={"ShopCardContent__subtitle"}>{color}</h3>
        </div>  
        <div className={"ShopCardContent__footer"}>
          <span>${price}</span>

          <div className={'btn'}>
      <span className={'btnText'}>add to cart</span>
    </div>
        </div>
        </div> 
       
    </li>
  )
}