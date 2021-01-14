import React from "react"

// var menu_button_width = document.getElementById("cart-menu").style.width;



export default class NavListItem extends React.Component {
    render() {
      return (
<li>
<a href="#" style={{height: "100%"}}>
  <div>
    {this.props.text}
    {/* {this.props.children} */}
</div>
</a>
</li>
      )}}