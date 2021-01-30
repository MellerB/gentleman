import React from "react"  
import ProductListItem from "./ProductListItem";
import {indexedProducts} from "../data/products"

export default class ProductList extends React.Component {
    state={
        items: indexedProducts
    }

    render() { 
        console.log(this.state.items)
      return (
      <div style={{height: "20px", width: "50%", margin: "auto"}}>
          {this.state.items.map(item => <ProductListItem key={item.id} item={item}/>)}
      </div>
      );
    }
}