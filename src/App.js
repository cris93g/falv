import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import{provider} from "react-redux"
import store from "./redux/store"

class App extends Component {
  render() {
    return (
      <provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </provider>
    );
  }
}

export default App;
