import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import NavListItem from "./NavListItem";
import {withRouter} from "react-router-dom"

export class ContentCartIcon extends React.Component {
    render() {
      return (
        <div style={{position:"relative", width: "100%", top:"17%",  transform: "translate(0, -50%)"}}>
         <CartIcon  onClick={() => this.props.onClick(this.props.id)} style={{position: "absolute",right: "0px", top:"0px", padding:"5px",height: "120px"}}/> 
         <span className="clickable" style={{color: "gray", fontSize: "40px", height: "10%", position: "absolute", top: "22px", right: "6px", transform: "translate(-50%, -50%)"}}>
           +1
           </span>
        </div>
      );
    }
}

