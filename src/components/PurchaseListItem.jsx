import React from "react"
import {ReactComponent as ArrowDown} from "../assets/Arrow-down.svg";
import {ReactComponent as Cross} from "../assets/cross.svg";

export default class PurchaseListItem extends React.Component {
    state = {
        count: this.props.item.getAmount()
    }

    add = () =>
    {
        this.props.item.add()
        this.props.amountChanged()
        this.setState({count: this.props.item.getAmount()})
    }

    remove = () =>
    {
        this.props.item.remove()
        this.props.amountChanged()
        this.setState({count: this.props.item.getAmount()})
    }
    render() {
        const item = { ...this.props.item }
        if (["2", "3", "4"].includes(item.age.toString()[item.age.toString().length - 1]) && item.age.toString()[item.age.toString().length - 2] !== "1") {
            item.age = item.age.toString() + " lata"
        }
        else {
            item.age = item.age.toString() + " lat"
        }

        return (
            <div style={{ height: "140px", margin: "10px", border: "solid #C7A82B 2px", backgroundColor: "#eeeedf",display:"flex"}}>
                <img style={{ float: "left", height: "100%", width: "15%", backgroundColor: "#eeeedf", borderRight: "solid #C7A82B 2px", objectFit: "cover" }} src={item.imageURL} alt="noice whiskey" />
                <div class="product" style={{ paddingLeft: "5px", float: "left", height: "100%", width: "60%", color: "rgb(143, 86, 100)" }}>
                    <h3>{item.name} </h3>
                    <h4 style={{ margin: "5px" }}>cena za sztukę: {item.price} zł</h4>
                    <h4 style={{ margin: "5px" }}>cena w sumie: <span id="suma">{this.state.count * item.price}</span> zł</h4>
                </div>

                <div style={{ float: "right", width: "20%", boder: "solid #C7A82B 2px", marginTop: "20px", textAlign:"center"}}>
                    <ArrowDown onClick={this.add} style={{width:"40px", height:"40px",transform: "rotate(180deg)"}}/>
                        <div>{this.state.count}</div>
                    {this.state.count > 1 ? 
                    <ArrowDown onClick={this.remove} style={{width:"40px", height:"40px"}}/>
                    :
                    <Cross onClick={this.remove} style={{marginTop: "6px", marginLeft: "1px",fill: "red",width:"20px", height:"20px"}}/>
                }
                    </div>

            </div>
        )
    }
}