import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';

import './App.css';
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <NavBar />
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/shop' component={Shop} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
