import React, { useState } from 'react';
import './Store.css';
import { products } from '../../data/products';
import IconSwitch from "../IconSwitch/IconSwitch.jsx";
import CardsView from '../CardsView/CardsView.jsx';
import ListView from '../ListView/ListView.jsx';


export default function Store() {

  const [view, setView] = useState(false);

  const changeView = () => {
    setView(!view);
  }

  const productsId = products.map((item) => (
    {
      data: item,
      id: Math.random(),
    }
  ));




  return (
<div className={'container'}><div>
  <IconSwitch
  icon={view ? "view_list" : "view_module"}
  onSwitch={changeView}

  />
  {view ? (
    <CardsView products={productsId} />
) : (
    <ListView products={productsId} />)  }


</div></div>
  )
}


