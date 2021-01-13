import React from "react"
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import GentlemanLogo from "../images/gentleman-logo.png";
import CartIconJPG from "../images/cart.jpg";

// var menu_button_width = document.getElementById("cart-menu").style.width;



export default class TopBar extends React.Component {
    render() {
      return (
        <header>
          <nav style={{height: "60px", width: "100%", position: "fixed",backgroundColor: "#eeeedf",margin: "auto",top:0}}>
            <ul class="left-menu-bar" style={{}}>

              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Home
                    {/* <GentlemanIcon style={{height: "100%",display:"block"}}/> */}
                     
                  </div>
                  
                </a>
              </li>
              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Dzień dobry
                    {/* <CartIcon style={{height: "100%",display:"block"}}/> */}
                  </div>
                  
                </a>
              </li>
            </ul>
            <ul class="logo-menu-bar">
              <li>
                <a href="#">
                <GentlemanIcon style={{height: "50px",padding:"5px"}}/>
                
                </a>
              </li>
            </ul>
            <ul class="right-menu-bar" style={{}}>

              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Wieczór
                  </div>
                  
                </a>
              </li>
              
              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Kontakt
                  </div>
                  
                </a>
              </li>

              </ul>
              <ul class="cart-menu-bar">
              <li>
                <a href="#">
                <CartIcon style={{height: "40px", padding: "10px"}}/> 
                </a>
              </li>
            </ul>
            
          </nav>
        </header>
      
      );
    }
}

