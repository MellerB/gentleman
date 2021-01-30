import React from "react"

import {testCookies} from "../data/cookieManager"

export default class Cart extends React.Component {


    render() { 
      testCookies()
      return (
      <div style={{height: "200px", width: "200px", background: "red"}}>
          KOSZYK
      </div>
      );
    }
}