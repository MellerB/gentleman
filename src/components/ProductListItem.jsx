import React from "react"
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";

export default class ProductListItem extends React.Component {
    render() {
        const item = {...this.props.item}
        if(item.age)
        {
            item.age = item.age.toString() + " lat"
        }

      return (
      <span>
        <div style={{height: "200px", margin: "10px",  border: "solid #C7A82B 2px",backgroundColor:"#eeeedf"}}>
        <img style={{float: "left", height: "100%", width: "15%", backgroundColor: "#eeeedf", borderRight: "solid #C7A82B 2px", objectFit: "cover"}} src={item.imageURL} alt="noice whiskey"/> 
        <div class="product" style={{paddingLeft: "5px",float: "left",height:"100%", width: "60%",color:"rgb(143, 86, 100)"}}>
            <h2>{item.name} </h2>
            <h3>typ: {item.type}</h3>
            
            <h3>kraj pochodzenia: {item.origin}</h3>
            <h3>wiek: {item.age}</h3>
            <h3>cena: {item.price} zł</h3>
        </div>
        <div className="clickable-icon" style={{float: "right",width: "10%",boder:"solid #C7A82B 2px", position:"relative"}}>
        <CartIcon style={{width: "80%",top:"67.7px",position:"absolute"}}/>
        </div>
        </div>
        </span>
      )
    }
}