import React from "react"
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";

// var menu_button_width = document.getElementById("cart-menu").style.width;



export default class TopBar extends React.Component {
    render() {
      return (
      <div style={{height: "60px", width: "100%", position: "fixed",backgroundColor: "#dddddd",margin: "auto",top:0}}>
        

        <ul id="menu-bar" style={{}}>

          <li>
            <span>
              Dzień Dobry
            </span>
          </li>
          <li>
            <a href="#" id="menu-logo" style={{height: "100%", backgroundColor: "#a0a0a0",boder:"solid black 2px", borderLeft: "solid black 2px"}}>
              <div>
                {/* <GentlemanIcon style={{height: "100%",display:"block"}}/> */}
                <img src="../images/cart.jpg" ></img>
              </div>
              
            </a>
          </li>
          <li>
            <a href="#" id="menu-cart" style={{height: "100%", backgroundColor: "#a0a0a0",boder:"solid black 2px", borderLeft: "solid black 2px"}}>
              <div>
                <CartIcon style={{height: "100%",display:"block"}}/>
              </div>
              
            </a>
          </li>
        </ul>
        

        
      </div>
      );
    }
}

