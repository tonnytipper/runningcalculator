import React, {Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import Register from './components/Register'
import Calculator from './components/Calculator'
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
        <div className="App">
			<div className="App-header"> <h2>RUNNING REWARD CALCULATOR</h2> </div>
			  <Navbar />
			  <div className="App-wrapper">
					<Route exact path="/" component={Landing} />
					<Route exact path="/register" component={Register} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/profile" component={Profile} />
					<Route exact path="/calculator" component={Calculator} />
			</div>          
        </div>
      </Router>
    );
  }
}

export default App;