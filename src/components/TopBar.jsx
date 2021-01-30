import React from "react";
import {ReactComponent as CartIcon} from "../assets/shopping-cart.svg";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import NavListItem from "./NavListItem";


export default class TopBar extends React.Component {
    render() {
      return (
        <div style={{height: "80px"}}>
          
          <nav style={{position: "absolute", top:"0px", width: "100%" ,height: "60px", backgroundColor: "#eeeedf"}}>
            <ul style={{marginTop: "0px", marginLeft: "calc(50% - 150px)"}}>
              <NavListItem text="Home"/>

              <NavListItem>
                <GentlemanIcon style={{height: "50px",padding:"5px", marginTop:"-20px"}}/>
              </NavListItem>

            <NavListItem text="Kontakt"/>
                
            </ul>

            <div className="clickable-icon" style={{position: "absolute", right:0, top:0}}>
                <CartIcon style={{padding:"5px",height: "50px"}}/> 
            </div>
          </nav>
          
          </div>
      );
    }
}

