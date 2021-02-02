import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './index.css';

import TopBar from "./components/TopBar"
import Main from './pages/Main'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import { getItemsAmount } from './data/cookieManager';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state =  { amount: getItemsAmount()}
    this.amountChanged = this.amountChanged.bind(this)  }

  amountChanged(){
    this.setState({amount: getItemsAmount()})
  }

  render(){
  return(
    <BrowserRouter>
    <TopBar amount={this.state.amount}/>
      <Switch>
            <Route exact path="/" render={(props) => (<Main {...props} amountChanged={this.amountChanged} />)}/>
            <Route exact path="/cart" render={(props) => (<Cart {...props} amountChanged={this.amountChanged} />)}/>
            <Route exact path="/contact" component={Contact} />
        </Switch>
      </BrowserRouter>

)}}