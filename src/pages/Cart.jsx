import React from "react"
import PurchaseListItem from "../components/PurchaseListItem";
import OrderData from "../components/CartOrderData"
import { indexedProducts } from "../data/products"


export default class Cart extends React.Component {


  render() {
    const items = indexedProducts
    return (
      <div>
        <div style={{ height: "20px", width: "25%",marginLeft:"10%" }}>
        {items.map(item => <PurchaseListItem key={item.id} item={item} />)}
        
      </div>

        <OrderData/>
      </div>
      
    );
  }
}