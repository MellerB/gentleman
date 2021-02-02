import React from "react"
import PurchaseListItem from "../components/PurchaseListItem";
import OrderData from "../components/CartOrderData"
import { getProducts } from "../data/cookieManager";


export default class Cart extends React.Component {


  render() {
    const items = getProducts()
    return (
      <div>
      <div style={{ height: "20px", width: "30%", marginLeft: "10%" }}>
        {items.map(item => <PurchaseListItem key={item.id} item={item} amountChanged={this.props.amountChanged}/>)}
      </div>
        <OrderData sum={this.props.sum}/>
      </div>
      
    );
  }
}