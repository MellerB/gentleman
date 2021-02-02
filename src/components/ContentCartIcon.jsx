import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";

export class ContentCartIcon extends React.Component {
    render() {
      return (
        <div >
         <CartIcon style={this.props.style}/> 
        </div>
      );
    }
}

