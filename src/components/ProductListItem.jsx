import React from "react"
import { ContentCartIcon } from "./AddItemIcon";



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
        <div style={{height: "200px", margin: "10px",  border: "solid #C7A82B 2px",backgroundColor:"#eeeedf44"}}>
        <img style={{float: "left", height: "100%", width: "15%", backgroundColor: "#eeeedf", borderRight: "solid #C7A82B 2px", objectFit: "cover"}} src={item.imageURL} alt="noice whiskey"/> 
        <div class="product" style={{paddingLeft: "5px",float: "left",height:"100%", width: "60%",color:"#C7A82B",webkitTextStroke:"1.2px black"}}>
            <h2>{item.name} </h2>
            <h3 style={{margin: "5px"}}>typ: {item.type}</h3>
            <h3 style={{margin: "5px"}}>kraj pochodzenia: {item.origin}</h3>
            <h3 style={{margin: "5px"}}>wiek: {item.age}</h3>
            <h3 style={{margin: "5px"}}>cena: {item.price} zł</h3>
        </div>
        <div className="clickable-icon clickable" style={{float: "right",width: "10%",height:"100%",boder:"solid #C7A82B 2px"}}>
        <ContentCartIcon id={item.id} onClick={this.props.onItemClick}/>
        </div>
        </div>
    )
  }
}