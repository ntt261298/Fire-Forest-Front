import React, { Component } from 'react';
import forest from '../../assets/forest-fire.jpg';
import Header from '../Header';
import Input from './Input';
import Result from './Result';

class Home extends Component {
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
      <div className="Home">
        <img id="bg" src={forest}/>
        <Header />
        <Input setResult={this.setResult}/>
        <Result result={this.state}/>
      </div>
    );
  }
}

export default Home;
