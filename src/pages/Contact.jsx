import React from "react"

export default class Main extends React.Component {

  render() {
    return (
      <div style={{ width: "60%", margin: "auto", border: "solid #C7A82B 2px",padding:"0 0 15px 15px",backgroundColor:"#eeeedf" }}>
        <div style={{}}>
          <h4>Obsługa klienta</h4>
          <a href="mailto:gentlemanbok@gntl.pl">gentlemanbok@gntl.pl</a><br/>
          32 54 69 130<br/>
          32 54 69 131
          
        </div>
        <div>
          <h4>Współpraca</h4>
          <a href="mailto:gentlemancoop@gntl.pl">gentlemancoop@gntl.pl</a><br/>
          32 54 69 132<br/>
          507328443
        </div>
        <div>
          <h4>Lokalizacja</h4>
          <a href="https://goo.gl/maps/SBFnVFuDijPt3f5d9" target="_blank" rel="noreferrer">
          Gliwice 44-100, śląskie<br/>
          ul. Kaszubska 23
          </a>
        </div>
      </div>
    );
  }
}