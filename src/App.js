import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Home from './components/pages/Home';

import './App.css';
import NavBarItems from './components/layout/NavBarItems'
import Shop from './components/pages/Shop';
import About from './components/pages/About';
import Footer from './components/layout/Footer';

class App extends Component {
  // state for toggle 
  state = {
    toggleNavbar: false
  };

  //toggle method
  toggle = () => {
    this.setState((prevState) => {
      // return the object -- updating the state here
      return {toggleNavbar: !prevState.toggleNavbar};
    });
  };

  render () {
    let toggleNav;

    if (this.state.toggleNavbar) {
      toggleNav = <NavBarItems />;
    }
    return (
      <Router>
        <div className='App'>
          <NavBar toggleClickHandler={this.toggle} isNavBar={this.state.toggleNavbar}/>
          {toggleNav}
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
}

export default App;
