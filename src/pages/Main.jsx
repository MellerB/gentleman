import React from "react"
import ProductList from "../components/ProductList";
import EmbedYt from "../components/EmbedYT";

export default class Main extends React.Component {

    render() { 
      return (
        <div>
          <EmbedYt />
          <ProductList amountChanged={this.props.amountChanged}/>

        </div>
            

      );
    }
}