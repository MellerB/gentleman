import React from "react"
import PurchaseListItem from "../components/PurchaseListItem";
import { getProducts } from "../data/cookieManager";


export default class Cart extends React.Component {


  render() {
    const items = getProducts()
    return (
      <div style={{ height: "20px", width: "50%", margin: "auto" }}>
        {items.map(item => <PurchaseListItem key={item.id} item={item} amountChanged={this.props.amountChanged}/>)}
      </div>
    );
  }
}