import React from 'react';
import About from './components/about';
import Grid from './components/grid';
import Rules from './components/rules';

import { Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"; 

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #C0C0C0;
  h1 {
    font-family: "Holtwood One SC", serif;
    color: #000000;
  }
`;

const App = () => {
  return (
    <MainDiv>
      <div>
        <Link 
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "1.5rem",
            paddingRight: 10,
          }}
          to="/about"
          >
          About
        </Link>
        <Link 
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "1.5rem",
            paddingRight: 10,
          }}
          to="/rules"
          >
          Rules
        </Link>
        <Link 
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "1.5rem",
            paddingRight: 10,
          }}
          to="/"
          >
          Game
        </Link>
      </div>
      <h1>Welcome to John Conway's Game of Life</h1>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/rules" component={Rules} />
        <Route path="/" component={Grid} />
      </Switch>
    </MainDiv>
  );
}

export default App;
