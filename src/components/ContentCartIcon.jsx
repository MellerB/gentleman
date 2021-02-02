import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";

export class ContentCartIcon extends React.Component {

    render() {
      return (
        <div style={{position:"relative", width: "100%", top:"33%",  transform: "translate(0, -50%)"}}>
         <CartIcon onClick={this.props.onClick} style={{position: "absolute",right: "0px", top:"0px", padding:"5px",height: "50px",zIndex:"-1"}}/> 
         <span style={{fontSize:"12px",height: "16px", position: "absolute", top: "10px", right: "15px", backgroundColor:"red",width:"16px",borderRadius:"100%",textAlign:"center",color:"white"}}>
           {this.props.amount}
           </span>
        </div>
      );
    }
}

