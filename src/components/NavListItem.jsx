import React from "react"

// var menu_button_width = document.getElementById("cart-menu").style.width;



export default class NavListItem extends React.Component {
    render() {
      return (
<li>
  <div>
    {this.props.text}
</div>
</li>
      )}}