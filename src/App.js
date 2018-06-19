import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Messages from './components/Messages';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <div className="menu">
          <ul>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/messages">Messages</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <a href="/messages"> Messages regular reload</a></li>
          </ul>
      </div>
      <div className="Tabs">
        <Route path="/" exact component={Home}/>
        <Route path="/messages" component={Messages}/>
        <Route path="/about" component={About}/>
      </div>
    </div>
    );
  }
}

export default App;
