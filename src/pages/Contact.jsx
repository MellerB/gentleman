import React from "react"

export default class Main extends React.Component {
  render() {


    const authors = [
      {name: "Michał Miękina", mail:"michmie178@student.polsl.pl"},
      {name: "Bartłomiej Meller", mail:"bartmel655@student.polsl.pl"}
    ]
    return (
      <div style={{ width: "60%", margin: "auto", border: "solid #C7A82B 2px",padding:"0 0 15px 15px",backgroundColor:"#eeeedf" }}>
        <div>
          <h4>Autorzy:</h4>
          <div style={{marginLeft: "10px", marginTop: "-10px"}}>
          {authors.map(author => <span>
            {author.name}<br/>
            <a style={{color: "black"}} href={"mailto:"+author.mail}>{author.mail}</a><br/>
            <br/>
            </span>)}
            </div>
            <h4>Przedmiot:</h4>
            <div style={{marginLeft: "10px", marginTop: "-10px"}}>
            "Aplikacje Webowe"<br/>
            </div>
            <br/>
        </div>
      </div>
    );
  }
}