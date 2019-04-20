import React, { Component } from 'react';
const style = {
  'color': '#fff'
}


class Result extends Component {
  render() {
    const { area, status, accuracy } = this.props.result;
    return (
      <div className="result">
        <div className="area">
            <label>Area</label>
            <input style={style} type="text" value={area}/>
        </div>
        <div className="status">
            <label>Status</label>
            <input style={style} type="text" value={status}/>
        </div>
        <div className="accuracy">
            <label>Accuracy</label>
            <input style={style} type="text" value={accuracy}/>
        </div>
      </div>
    );
  }
}

export default Result;
