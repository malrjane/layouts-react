import React from "react";
import "./CardsView.css";
import ShopCard from "./ShopCard/ShopCard.jsx";

export default function CardsView({products}) {
  return (
    <ul className={"CardsView"}>
      {products.map((product) => (
        <ShopCard key={product.id} card={product.data} />
      ))}
    </ul>
  )
}