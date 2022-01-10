import React from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shopPage/shop.component.jsx';
import './App.css';
import Header from './component/header/header.component.jsx';
import SignInAndSignOut from './page/signin-and-signup/signin-and-signup.component.jsx';
import {auth} from './firebase/firebase.util.js';

class App extends React.Component{
  constructor(){
    super();

    this.state = {
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(user => this.setState({currentUser: user}));
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
    <div>
    <Header currentUser = {this.state.currentUser} />
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/shop' element={<ShopPage/>}></Route>
      <Route exact path='/signin' element={<SignInAndSignOut/>}></Route>
    </Routes>
    </div>
  );}
}

export default App;
