
import React from 'react';
import {
  BrowserRouter as Router, Route,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Data from './components/Data/Data';

export const App = props => (
  <Router>
    <div className="App">
      <Route path="/" exact component={Home} />
      <Route path="/data" exact component={Data} />
    </div>
  </Router> 
);