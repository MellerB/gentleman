import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {getItemsAmount} from "../data/cookieManager"

export class ContentCartIcon extends React.Component {

    render() {
      return (
        <div style={{position:"relative", width: "100%", top:"33%",  transform: "translate(0, -50%)"}}>
         <CartIcon onClick={this.props.onClick} style={{position: "absolute",right: "0px", top:"0px", padding:"5px",height: "50px"}}/> 
         <span style={{height: "10%", position: "absolute", top: "12.6px", right: "25px", transform: "translate(50%, -50%)"}}>
           {this.props.amount}
           </span>
        </div>
      );
    }
}

