import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Route, Switch} from 'react-router-dom';
 
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';

import Order from './components/Order';

import News from './components/News';

import Coupons from './components/Coupons';
import About from './components/About';
import NewsDetails from './components/NewsDetails';
class App extends Component {
  render() {
    return (
      <Router>
     <div className="container-fluid">
     <Navigation/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
           <Route path="/order" component={Order} />
              <Route path="/coupons" component={Coupons} />
                 <Route path="/news" component={NewsDetails} />
        </Switch>
    <Footer/>
      </div>
       </Router>
    );
  }
}

export default App;
