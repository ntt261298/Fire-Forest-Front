import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header';
import Input from '../src/components/Input';
import Result from '../src/components/Result';

class App extends Component {
  state = {
    area: '',
    status: '',
    accuracy: '',
  }

  setResult = (area, status, accuracy) => {
    this.setState({
      area,
      status,
      accuracy
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input setResult={this.setResult}/>
        <Result result={this.state}/>
      </div>
    );
  }
}

export default App;
