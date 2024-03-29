import React from "react";
import {ContentCartIcon} from "./ContentCartIcon";
import {ReactComponent as GentlemanIcon} from "../assets/gentleman-icon.svg";
import NavListItem from "./NavListItem";
import {withRouter} from "react-router-dom"


class TopBar extends React.Component {
    render() {
      return (
        <div style={{height: "80px", zIndex: "10"}} >
          
          <nav style={{zIndex: "10",position: "fixed",left:"0px", top:"0px", right:"0px", width: "100%" ,height: "60px", backgroundColor: "#eeeedf",boxShadow:"0px 3px 10px grey"}}>
            <ul style={{marginTop: "0px", marginLeft: "calc(50% - 150px)"}}>
            <NavListItem onClick={() => this.props.history.push('/')} text="Home"/>

              <NavListItem>
                <GentlemanIcon style={{height: "50px",padding:"5px", marginTop:"-20px"}}/>
              </NavListItem>

            <NavListItem onClick={() => this.props.history.push('/contact')} text="Kontakt"/>
                
            </ul>

            <div onClick={() => this.props.history.push('/cart')} className="clickable-icon" style={{position: "absolute", right:0, top:0}}>
                <ContentCartIcon amount={this.props.amount}/> 
            </div>
          </nav>
          
          </div>
      );
    }
}


export default withRouter(TopBar)
