import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import NavListItem from "./NavListItem";
import {withRouter} from "react-router-dom"

export class ContentCartIcon extends React.Component {
    render() {
      return (
        <div >
         <CartIcon style={this.props.style}/> 
        </div>
      );
    }
}

