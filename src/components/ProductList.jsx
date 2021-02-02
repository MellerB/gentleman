import React from "react"  
import ProductListItem from "./ProductListItem";
import {addItem} from "../data/cookieManager"
import { indexedProducts } from "../data/products";

export default class ProductList extends React.Component {

    render() { 
        const items = indexedProducts
      return (
      <div style={{height: "20px", width: "50%", margin: "auto"}}>
          {items.map(item => <ProductListItem key={item.id} item={item} onItemClick={() => {addItem(item.id); this.props.amountChanged()}}/>)}
      </div>
      );
    }
}