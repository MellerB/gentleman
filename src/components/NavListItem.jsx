import React from "react"
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import GentlemanLogo from "../images/gentleman-logo.png";
import CartIconJPG from "../images/cart.jpg";

// var menu_button_width = document.getElementById("cart-menu").style.width;



export default class NavListItem extends React.Component {
    render() {
      return (
<li>
<a href="#" style={{height: "100%"}}>
  <div>
    {this.props.text}
    {this.props.children}
</div>
</a>
</li>
      )}}