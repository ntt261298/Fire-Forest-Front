import React, { Component } from 'react';
import './App.css';
import forest from '../src/assets/forest-fire.jpg';
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
        <img id="bg" src={forest}/>
        <Header />
        <Input setResult={this.setResult}/>
        <Result result={this.state}/>
      </div>
    );
  }
}

export default App;
