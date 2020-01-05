import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import NavBar from './NavBar/NavBar';
import Login from './pages/Login/Login';
import './app.scss';

const App = () => {
  return (
    <div className='app'>
      <Router>
        <div>
          <NavBar />
          <div className='container'>
            <Route path='/' exact component={Home} />
            <Route path='/products' exact component={Products} />
            <Route path='/categories' exact component={Categories} />
            <Route path='/product/:id' exact component={ProductDetail} />
            <Route path='/login' exact component={Login} />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
