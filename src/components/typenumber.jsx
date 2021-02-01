import React from "react"

export default class PurchaseListItem extends React.Component {
    state={
        ilosc: 1
    }
    render() {
        const changeSum = (valueXD) => {
            this.setState({ilosc:valueXD})
            console.log(valueXD)
        }
        const item = {...this.props.item}
        if(["2","3","4"].includes(item.age.toString()[item.age.toString().length-1]) && item.age.toString()[item.age.toString().length-2]!=="1")
        {
            item.age = item.age.toString() + " lata"
        }
        else{
          item.age = item.age.toString() + " lat"
        }

    return (
        <div style={{height: "200px", margin: "10px",  border: "solid #C7A82B 2px",backgroundColor:"#eeeedf"}}>
        <img style={{float: "left", height: "100%", width: "15%", backgroundColor: "#eeeedf", borderRight: "solid #C7A82B 2px", objectFit: "cover"}} src={item.imageURL} alt="noice whiskey"/> 
        <div class="product" style={{paddingLeft: "5px",float: "left",height:"100%", width: "60%",color:"rgb(143, 86, 100)"}}>
            <h2>{item.name} </h2>
            <h3 style={{margin: "5px"}}>cena za sztukę: {item.price} zł</h3>
            <h3 style={{margin: "5px"}}>cena w sumie: <span id="suma">{this.state.ilosc * item.price}</span> zł</h3>
        </div>
        <div className="clickable-icon" style={{float: "right",width: "10%",height:"100%",boder:"solid #C7A82B 2px"}}>
        {/* <CartIcon style={{width: "100%", marginTop:"100px",  transform: "translate(-20px, -50%)"}} onClick={() => this.props.onItemClick(item.id)}/> */}
        <input id="ilosc" type="number" min="1" max="999" onClick={()=>changeSum(this.props)} />
        </div>
        </div>
    )
  }
}