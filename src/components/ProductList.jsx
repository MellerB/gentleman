import React from "react"  
import ProductListItem from "./ProductListItem";

export default class ProductList extends React.Component {
    state={
        items:[
            {
                name: "Jacek Daniel",
                age: 12,
                type: "burbon",
                origin: "USA",
                price: 69.69,
                imageURL: "https://propaganda24h.pl/environment/cache/images/500_500_productGfx_1293384820a33685a0938e2fd74f85c4.jpg"
            },
            {
                name: "Jaś Wędrowniczek red",
                age: 3,
                type: "Blend",
                origin: "chyba szkocja",
                price: 3.50,
                imageURL: "https://smaczajama.pl/userdata/public/gfx/a8f6bd71f68ed70a7adc9eacdaf5fa02.jpg"
            },

        ]
    }

    render() { 
      return (
      <div style={{height: "20px", width: "50%", margin: "auto"}}>
          {this.state.items.map(item => <ProductListItem item={item}/>)}
      </div>
      );
    }
}