import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="result">
        <div className="area">
            <label>Area</label>
            <input type="text"/>
        </div>
        <div className="status">
            <label>Status</label>
            <input type="text"/>
        </div>
        <div className="accuracy">
            <label>Accuracy</label>
            <input type="text"/>
        </div>
      </div>
    );
  }
}

export default Result;
