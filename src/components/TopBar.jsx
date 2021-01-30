import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import NavListItem from "./NavListItem";

// var menu_button_width = document.getElementById("cart-menu").style.width;



export default class TopBar extends React.Component {
    render() {
      return (
        <header>
          <nav style={{height: "60px", width: "100%", position: "fixed",backgroundColor: "#eeeedf",margin: "auto",top:0}}>
            <ul class="left-menu-bar" style={{}}>
              <NavListItem text="Home"/>
            </ul>
            <ul class="logo-menu-bar">
              <li>
                <GentlemanIcon style={{height: "50px",padding:"5px"}}/>
              </li>
            </ul>
            <ul class="right-menu-bar" style={{}}>

            <NavListItem text="Kontakt"/>

              </ul>
              <ul class="cart-menu-bar">
              <li>
                <CartIcon style={{height: "40px", padding: "10px"}}/> 
              </li>
            </ul>
          </nav>
        </header>
      
      );
    }
}

