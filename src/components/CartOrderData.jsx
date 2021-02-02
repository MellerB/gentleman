import React from "react"

export default class CartOrderData extends React.Component {

    render() {
        return (
            <div style={{ width: "40%", right: "10%", border: "solid #C7A82B 2px", padding: "15px 15px 15px 15px", backgroundColor: "#eeeedf", position: "fixed" }}>
                <div style={{ border: "solid #C7A82B 1px", padding: " 15px" }}>
                    <h4>Cena za produkty: <span>{this.props.sum}</span></h4>
                    <h4>Koszt wysyłki: <span style={{color:"green"}}>Gratis!!!</span></h4>
                    <h4>Suma: <span>{this.props.sum}</span></h4>
                </div>

                <div style={{ border: "solid #C7A82B 1px", padding: " 15px", lineHeight:"200%", marginTop:"15px"}}>
                    <div>Imię<input type="text" id="name" placeholder="Jan" maxlength="16" /> </div>
                    <div>Nazwisko<input type="text" id="surname" placeholder="Kowalski" maxlength="32" /> </div>
                    <div>   Nr tel
                        <input type="text" id="phone-nr1" class="phone-number-cells" maxlength="3" size="1" oninput="moveForward1()" />-
                        <input type="text" id="phone-nr2" class="phone-number-cells" maxlength="3" size="1" oninput="moveForward2()" />-
                        <input type="text" id="phone-nr3" class="phone-number-cells" maxlength="3" size="1" oninput="moveForward()" />
                    </div>
                    <div>E-mail<input type="email" id="emailinput" placeholder="jan.kowalski1980@poczta.pl" /></div>
                    <div>
                        <b>Adres:</b> <br />
                        <a>Miasto<input id="city" type="text" placeholder="Warszawa" /></a><br/>
                        <a>Kod pocztowy<input type="text" placeholder="XX" maxlength="2" size="1" id="postCode1" oninput="checkPostCode1()" />-<input type="text" placeholder="XXX" maxlength="3" size="1" id="postCode2" oninput="checkPostCode2()" /></a><br/>
                        <a>Ulica<input type="text" id="street" placeholder="Mickiewicza" /></a><br/>
                        <a>Nr domu/mieszkania<input type="text" placeholder="dom" size="1" id="house" />/<input type="text" placeholder="lokal" size="1" id="flat" /></a>
                    </div>
                </div>
            </div>
        );
    }
}