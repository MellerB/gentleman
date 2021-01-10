import React from "react"

export default class TopBar extends React.Component {
    render() {
      return (
      <div style={{borderRadius: "5px", border: "black solid 2px", height: "40px", width: "100%", position: "absolute"}}>
        <span>
          Dzień Dobry
        </span>
        <img src={"../images/cart.jpg"} style={{float:"right"}}></img>
      </div>
      );
    }
}