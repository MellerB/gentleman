import React from "react"  
import ProductListItem from "./ProductListItem";
import {indexedProducts} from "../data/products"
import {addItem} from "../data/cookieManager"

export default class ProductList extends React.Component {

    render() { 
        const items = indexedProducts
      return (
      <div style={{height: "20px", width: "50%", margin: "auto"}}>
          {items.map(item => <ProductListItem key={item.id} item={item} onItemClick={addItem}/>)}
      </div>
      );
    }
}