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
          <nav style={{height: "60px", width: "100%", position: "fixed",backgroundColor: "#dddddd",margin: "auto",top:0}}>
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
                    Dzień
                    {/* <CartIcon style={{height: "100%",display:"block"}}/> */}
                  </div>
                  
                </a>
              </li>
              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Dobry
                    {/* <CartIcon style={{height: "100%",display:"block"}}/> */}
                  </div>
                  
                </a>
              </li>
            </ul>
            <ul class="logo-menu-bar">
              <li>
                <a href="#">
                {/* <GentlemanIcon style={{height: "100%"}}/> */}
                
                <img  alt="Logo" src={GentlemanLogo} style={{height: "60px"}}></img> 
                </a>
              </li>
            </ul>
            <ul class="right-menu-bar" style={{}}>

              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Wieczór
                    {/* <GentlemanIcon style={{height: "100%",display:"block"}}/> */}
                    {/* <img src="../images/cart.jpg" ></img> */}
                  </div>
                  
                </a>
              </li>
              
              <li>
                <a href="#" style={{height: "100%"}}>
                  <div>
                    Kontakt
                    {/* <CartIcon style={{height: "100%",display:"block"}}/> */}
                  </div>
                  
                </a>
              </li>

              <li>
                <a href="#" style={{height: "100%"}}>
                  
                    {/* <img  alt="Logo" src={GentlemanLogo} style={{height: "60px"}}></img>  */}
                  {/* <CartIcon style={{height: "100%",display:"block"}}/> */}
                  
                  
                </a>
              </li>
              </ul>
              <ul class="cart-menu-bar">
              <li>
                <a href="#">
                {/* <GentlemanIcon style={{height: "100%"}}/> */}
                <CartIcon style={{height: "40px", margin: "10px"}}/> 
                </a>
              </li>
            </ul>
            
          </nav>
        </header>
      
      );
    }
}

