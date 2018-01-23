import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import NavBarTop from '../../components/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import SetUpTransaction from '../SetUpTransaction/SetUpTransaction';
import TransactionHistory from '../TransactionHistory/TransactionHistory';

class App extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        user: true
      
    }
  }
  

  render() {
    return (
      <div>
          <NavBarTop />
          <Switch>
              <Route exact path='/' render={() => <HomePage /> } />
              <Route exact path='/setuptransaction' render={() => <SetUpTransaction /> } />
              <Route exact path='/transactionhistory' render={() => <TransactionHistory /> } />
          </Switch>

      </div>
    );
  }
}

export default App;
