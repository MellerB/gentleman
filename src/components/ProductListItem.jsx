import React from "react"
import { ReactComponent as CartIcon } from "../assets/shopping-cart.svg";



export default class ProductListItem extends React.Component {
    render() {
        const item = {...this.props.item}
        if(["2","3","4"].includes(item.age.toString()[item.age.toString().length-1]) && item.age.toString()[item.age.toString().length-2]!=="1")
        {
            item.age = item.age.toString() + " lata"
        }
        else{
          item.age = item.age.toString() + " lat"
        }

    return (
        <div style={{height: "200px", margin: "10px",  border: "solid #C7A82B 2px",backgroundColor:"#eeeedf"}}>
        <img style={{float: "left", height: "100%", width: "15%", backgroundColor: "#eeeedf", borderRight: "solid #C7A82B 2px", objectFit: "cover"}} src={item.imageURL} alt="noice whiskey"/> 
        <div class="product" style={{paddingLeft: "5px",float: "left",height:"100%", width: "60%",color:"rgb(143, 86, 100)"}}>
            <h2>{item.name} </h2>
            <h3 style={{margin: "5px"}}>typ: {item.type}</h3>
            <h3 style={{margin: "5px"}}>kraj pochodzenia: {item.origin}</h3>
            <h3 style={{margin: "5px"}}>wiek: {item.age}</h3>
            <h3 style={{margin: "5px"}}>cena: {item.price} zł</h3>
        </div>
        <div className="clickable-icon" style={{float: "right",width: "10%",height:"100%",boder:"solid #C7A82B 2px"}}>
        <CartIcon style={{width: "100%", marginTop:"100px",  transform: "translate(-20px, -50%)"}} onClick={() => this.props.onItemClick(item.id)}/>
        </div>
        </div>
    )
  }
}