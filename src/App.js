import React from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from './page/homepage/homepage.component';
import ShopPage from './page/shopPage/shop.component.jsx';
import './App.css';
import Header from './component/header/header.component.jsx';

function App() {
  return (
    <div>
    <Header />
    <Routes>
      <Route exact path='/' element={<HomePage/>}></Route>
      <Route exact path='/shop' element={<ShopPage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
