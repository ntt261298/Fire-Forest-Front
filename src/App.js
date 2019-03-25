import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import Result from '../src/components/Result';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Input />
        <Result />
      </div>
    );
  }
}

export default App;
