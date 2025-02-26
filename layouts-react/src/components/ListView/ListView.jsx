import React from "react";
import './ListView.css';
import ShopItem from "./ShopItem/ShopItem.jsx";


export default function ListView({products}) {
  return (
    <ul className={"ListView"}>
      {products.map((product) => (
        <ShopItem key={product.id} card={product.data} />
      ))}
       </ul>
  )
}