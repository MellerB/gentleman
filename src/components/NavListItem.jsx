import React from "react"

export default class NavListItem extends React.Component {
    render() {
      return (
        <li className="clickable" style={{display: "inline-block",float: "left", textTransform: "uppercase"}}>
          <div style = {{height:"30px",padding: "20px 10px 10px 10px"}}>
            {this.props.text}
            {this.props.children}
          </div>
        </li>
      )}}