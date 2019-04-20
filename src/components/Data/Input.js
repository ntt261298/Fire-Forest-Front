import React, { Component, Fragment } from 'react';
import toastr from 'toastr';

const style = {
    width: '115px',
    padding: '5px',
    borderRadius: '20px',
    background: 'transparent',
    border: '1px solid #009577',
    textAlign: 'center',
    fontSize: '24px',
    color: '#fff'
}

class Input extends Component {
    state = {
        month: 11,
        day: 0,
    }

    handleChange = e => {
        this.setState({  
            [e.target.name] : e.target.value
        })
    }

    onSubmitClick = () => {
        console.log(this.state);
        const { X, Y, month, day, FFMC, DMC, DC, ISI, temp, RH, wind, rain, area } = this.state;
        const data = {
            X, Y, month, day, FFMC, DMC, DC, ISI, temp, RH, wind, rain, area
        }

        fetch('http://localhost:5000/data', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)                                                                                                                                  ,
        }).then(res => {
            res.json();
            toastr.success('Submit data successfully');
        }) 
        .catch(err => toastr.err(err))                                                                                                                        
    }

  render() {
    return (
    <Fragment>
      <div className="input">
        <div className="user">
            <div className="img">
                <img src="john-doe.jpg" alt="" />
             </div>
            <h3>John Doe</h3>
            <p className="carrier">User</p>
            <button className="upload">Upload Avatar</button>
            <button className="delete">Delete Avatar</button>
        </div>

        <div className="option-1">
            <div className="form X">
                <label>X:</label>
                <input onChange={this.handleChange} type="text" name="X" id="X"/>
            </div>
            <div className="form Y">
                <label>Y:</label>
                <input onChange={this.handleChange} type="text" name="Y" id="Y"/>
            </div>
            <div className="form FFMC">
                <label>FFMC:</label>
                <input onChange={this.handleChange} type="text" name="FFMC" id="FFMC"/>
            </div>
            <div className="form DMC">
                <label>DMC:</label>
                <input onChange={this.handleChange} type="text" name="DMC" id="DMC"/>
            </div>
            <div className="form DC">
                <label>DC:</label>
                <input onChange={this.handleChange} type="text" name="DC" id="DC"/>
            </div>
        </div>

        <div className="option-2">
            <div className="form ISI">
                <label>ISI:</label>
                <input onChange={this.handleChange} type="text" name="ISI" id="ISI"/>
            </div>
            <div className="form temp">
                <label>TEMP:</label>
                <input onChange={this.handleChange} type="text" name="temp" id="temp"/>
            </div>
            <div className="form RH">
                <label>RH:</label>
                <input onChange={this.handleChange} type="text" name="RH" id="RH"/>
            </div>
            <div className="form wind">
                <label>WIND:</label>
                <input onChange={this.handleChange} type="text" name="wind" id="wind"/>
            </div>
            <div className="form rain">
                <label>RAIN:</label>
                <input onChange={this.handleChange} type="text" name="rain" id="rain"/>
            </div>
        </div>

        <div className="option-3">
            <div className="month form">
                <label>
                    MONTH:
                </label>
                <select onChange={this.handleChange} className="prf-select"  id="month-of-birth" name="month" onChange={this.handleChange.bind(this)}>
                    <option className="prf-option" value="0">Jan</option>
                    <option className="prf-option" value="1">Feb</option>
                    <option className="prf-option" value="2">Mar</option>
                    <option className="prf-option" value="3">Apr</option>
                    <option className="prf-option" value="4">May</option>
                    <option className="prf-option" value="5">Jun</option>
                    <option className="prf-option" value="6">Jul</option>
                    <option className="prf-option" value="7">Aug</option>
                    <option className="prf-option" value="8">Sep</option>
                    <option className="prf-option" value="9">Oct</option>
                    <option className="prf-option" value="10">Nov</option>
                    <option className="prf-option" value="11" selected>Dec</option>
                </select>
            </div>
            <div className="day form">
                <label>DAY:</label>
                <select onChange={this.handleChange} className="prf-select" id="day-of-birth" name="day" onChange={this.handleChange} >
                    <option className="prf-option" value="0">Mon</option>
                    <option className="prf-option" value="1">Tue</option>
                    <option className="prf-option" value="2">Wed</option>
                    <option className="prf-option" value="3">Thu</option>
                    <option className="prf-option" value="4">Fri</option>
                    <option className="prf-option" value="5">Sat</option>
                    <option className="prf-option" value="6">Sun</option>
                </select>
            </div>
            <div className="area">
                <label>Area:</label>
                <input name="area" onChange={this.handleChange} style={style} type="text"/>
            </div>
        </div>
      </div>
      <div className="footer-data">
        <button onClick={this.onSubmitClick} className="data-submit">Submit</button>
      </div>
    </Fragment>
    );
  }
}

export default Input;
