import './index.css';
import React from 'react';
import TopBar from "./components/TopBar"
import Main from './pages/Main'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { getItemsAmount, getSummaryPrice } from './data/cookieManager';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { 
      amount: getItemsAmount(),
      sum: getSummaryPrice(),
    }
    this.amountChanged = this.amountChanged.bind(this)  }

  amountChanged(){
    this.setState({ 
      amount: getItemsAmount(),
      sum: getSummaryPrice(),
    })
  }

  render(){
  return(
    <BrowserRouter>
    <TopBar amount={this.state.amount}/>
      <Switch>
            <Route exact path="/" render={(props) => (<Main {...props} amountChanged={this.amountChanged} />)}/>
            <Route exact path="/cart" render={(props) => (<Cart {...props} sum={this.state.sum} amountChanged={this.amountChanged} />)}/>
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>

)}}