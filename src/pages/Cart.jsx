import React from "react"
import PurchaseListItem from "../components/PurchaseListItem";
import { indexedProducts } from "../data/products"


export default class Cart extends React.Component {


  render() {
    const items = indexedProducts
    return (
      <div style={{ height: "20px", width: "50%", margin: "auto" }}>
        {items.map(item => <PurchaseListItem key={item.id} item={item} />)}
      </div>
    );
  }
}