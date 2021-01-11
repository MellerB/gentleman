import React from "react"
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";

export default class ProductListItem extends React.Component {
    render() {
        const item = this.props.item 
        if(item.age)
        {
            item.age = item.age.toString() + " lat"
        }
      return (
      <span>
        <div style={{height: "200px", margin: "10px", borderRadius: "5px", border: "solid black 2px", boxShadow: "5px 8px #f0f0f0a0"}}>
        <img style={{float: "left", height: "100%", width: "15%", backgroundColor: "#f0f0f0", borderRight: "solid black 2px", objectFit: "cover"}} src={item.imageURL} alt="noice whiskey"/> 
        <div style={{paddingLeft: "5px",float: "left",height:"100%", width: "60%"}}>
            <h2>{item.name} {item.age}</h2>
            <h3>typ: {item.type}</h3>
            <h3>kraj pochodzenia: {item.origin}</h3>
            <h3>cena: {item.price} zł</h3>
        </div>
        <button style={{float: "right",height: "100%", width: "10%", backgroundColor: "#a0a0a0",boder:"solid black 2px", borderLeft: "solid black 2px"}}>
        <CartIcon style={{width: "80%"}}/>
        </button>
        </div>
        </span>
      )
    }
}