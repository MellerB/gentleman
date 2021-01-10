import React from "react"

export default class TopBar extends React.Component {
    render() {
      return (
      <div style={{borderRadius: "5px", border: "black solid 2px", height: "20px", width: "100%"}}>
        <button style={{float: "right"}}>KOSZYK</button>
      </div>
      );
    }
}