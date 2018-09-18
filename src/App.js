import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router} from "react-router-dom"
import routes from "./routes"
import{Provider} from "react-redux"
import store from "./redux/store"
import styled from "styled-components"

const MainWrapper = styled.section`

  display: flex;

`;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <MainWrapper>
      <div className="App">
     {routes}
      </div>
      </MainWrapper>
      </Router>
      </Provider>
    );
  }
}

export default App;
