import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Categories from './pages/Categories/Categories';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import NavBar from './NavBar/NavBar';
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
            {/* <Route path='/product/{id}' exact component={StreamDelete} /> */}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
