import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import NavListItem from "./NavListItem";
import {withRouter} from "react-router-dom"
import {getItemsAmount} from "../data/cookieManager"

export class ContentCartIcon extends React.Component {

  state = {amount: getItemsAmount()}

    shouldComponentUpdate(_,nextState)
    {
      const t = getItemsAmount()
      return nextState.amount !== t
    }

    render() {
      const amount = getItemsAmount()
      return (
        <div style={{position:"relative", width: "100%", top:"33%",  transform: "translate(0, -50%)"}}>
         <CartIcon onClick={this.props.onClick} style={{position: "absolute",right: "0px", top:"0px", padding:"5px",height: "50px"}}/> 
         <span style={{height: "10%", position: "absolute", top: "12.6px", right: "8px", transform: "translate(-50%, -50%)"}}>
           {amount}
           </span>
        </div>
      );
    }
}

