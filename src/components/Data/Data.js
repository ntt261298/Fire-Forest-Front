import React, { Component } from 'react';
import forest from '../../assets/forest-fire.jpg';
import Header from '../Header';
import Input from './Input';


class Data extends Component {
  render() {
    return (
      <div className="Data">
        <img id="bg" src={forest}/>
        <Header />
        <Input />
      </div>
    );
  }
}

export default Data;
