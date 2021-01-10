import React from "react"
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";  

export default class ProductList extends React.Component {
    state={
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTVYKaQl8WqoLowwFAYB417cJL7H__RG9oPg&usqp=CAU"
    }

    render() {  
      return (
      <div style={{height: "20px", width: "50%", margin: "auto"}}>
        <div style={{height: "200px", margin: "10px", borderRadius: "5px", border: "solid black 2px", boxShadow: "5px 8px #f0f0f0a0"}}>
        <img style={{float: "left", height: "100%", width: "15%", backgroundColor: "#f0f0f0", borderRight: "solid black 2px", objectFit: "cover"}} src={this.state.image} alt="noice whiskey"/> 
        <div style={{paddingLeft: "5px",float: "left",height:"100%", width: "60%"}}>
            <h2>'Nazwa łiski: string' 'int' lat</h2>
            <h3>typ: 'string'</h3>
            <h3>kraj pochodzenia: 'string'</h3>
            <h3>cena: 'decimal' zł</h3>
        </div>
        <button style={{float: "right",height: "100%", width: "10%", backgroundColor: "#a0a0a0",boder:"solid black 2px", borderLeft: "solid black 2px"}}>
        <CartIcon style={{width: "80%"}}/>
        </button>
        </div>
      </div>
      );
    }
}