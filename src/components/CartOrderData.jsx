import React from "react";
import {ReactComponent as RubbishBin} from "../assets/rubbish-bin.svg";
import {setCookieJson} from "../data/cookieManager";
const digits = '0123456789';

export default class CartOrderData extends React.Component {

    removeAllItems = () => 
    {
        setCookieJson([])
        this.props.amountChanged()
    }
    checkifDigits = (e) => 
    {
        let value = e.target.value
        for(let i=0;i<value.length;i++){
            if(!digits.includes(value[i])){
                value = value.toString().replace(value[i],'')
                e.target.value=value
            }
        }
    }

    getSum = () =>
    {
        if(this.props.sum < 400)
        {
            return this.props.sum+20
        }
        return this.props.sum
    }


    render() {

        return (
            <div style={{ width: "40%", right: "10%", border: "solid #C7A82B 2px", padding: "15px 15px 15px 15px", backgroundColor: "#eeeedf", position: "fixed" }}>
                <div style={{ border: "solid #C7A82B 1px", padding: " 15px" }}>
                        
                        <RubbishBin onClick={this.removeAllItems} className="clickable-icon" style={{float:"right", width:"50px",height:"50px"}}/>
                    
                
                    <h4>Cena za produkty: <span>{this.props.sum}</span></h4>
                    <h4>Koszt wysyłki: {this.props.sum > 400 ? <span style={{color:"green"}}>Gratis!!!</span>:<span style={{}}>20 zł</span>} </h4>
                    <h4>Suma: <span>{this.getSum()}</span></h4>
                </div>

                <div style={{ border: "solid #C7A82B 1px", padding: " 15px", lineHeight:"200%", marginTop:"15px"}}>
                    <div>Imię<input type="text" placeholder="Jan" maxlength="16" /> </div>
                    <div>Nazwisko<input type="text" placeholder="Kowalski" maxlength="32" /> </div>
                    <div>   Nr tel
                        <input type="text" maxlength="3" size="1" onInput={this.checkifDigits}/>-
                        <input type="text" maxlength="3" size="1" onInput={this.checkifDigits}/>-
                        <input type="text" maxlength="3" size="1" onInput={this.checkifDigits}/>
                    </div>
                    <div>
                        <b>Adres:</b> <br />
                        <a>Miasto<input type="text" placeholder="Warszawa" /></a><br/>
                        <a>Kod pocztowy<input onInput={this.checkifDigits} type="text" placeholder="XX" maxlength="2" size="1"/>-<input onInput={this.checkifDigits} type="text" placeholder="XXX" maxlength="3" size="1"/></a><br/>
                        <a>Ulica<input type="text" placeholder="Mickiewicza" /></a><br/>
                        <a>Nr domu/mieszkania<input onInput={this.checkifDigits} type="text" placeholder="dom" size="1"/>/<input onInput={this.checkifDigits} type="text" placeholder="lokal" size="1" /></a>
                        <button onClick={() => console.log(`pobrano ${this.getSum()} zł z Twojej karty bankowej`)} style={{float:"right",backgroundColor: "black",color:"white",borderRadius:"5px"}}>Zamawiam!</button>
                    </div>
                    
                </div>
            </div>
        );
    }
}