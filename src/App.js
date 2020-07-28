import React from 'react';
import About from './components/about';
import Grid from './components/grid';
import Rules from './components/rules';

import { Route, Link, Switch } from 'react-router-dom';
import styled from "styled-components"; 

const App = () => {
  return (
    <MaindDiv>
      <div>
        <Link to="/about">
          About
        </Link>
        <Link to="/rules">
          Rules
        </Link>
        <Link to="/game">
          Game
        </Link>
      </div>
      <h1>Welcome to John Conway's Game of Life</h1>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/rules" component={Rules} />
        <Route path="/game" component={Grid} />
      </Switch>
    </MaindDiv>
  );
}

export default App;
