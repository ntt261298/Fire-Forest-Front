import React, { Component } from 'react';

class Input extends Component {
    state = {}

    handleChange(e) {
        this.setState = {
            ...this.state,   
            [e.target.name] : e.target.value
        }
    }

  render() {
    return (
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
                <input type="text" name="X" id="X"/>
            </div>
            <div className="form Y">
                <label>Y:</label>
                <input type="text" name="Y" id="Y"/>
            </div>
            <div className="form FFMC">
                <label>FFMC:</label>
                <input type="text" name="FFMC" id="FFMC"/>
            </div>
            <div className="form DMC">
                <label>DMC:</label>
                <input type="text" name="DMC" id="DMC"/>
            </div>
            <div className="form DC">
                <label>DC:</label>
                <input type="text" name="DC" id="DC"/>
            </div>
        </div>

        <div className="option-2">
            <div className="form ISC">
                <label>ISC:</label>
                <input type="text" name="ISC" id="ISC"/>
            </div>
            <div className="form TEMP">
                <label>TEMP:</label>
                <input type="text" name="TEMP" id="TEMP"/>
            </div>
            <div className="form RH">
                <label>RH:</label>
                <input type="text" name="RH" id="RH"/>
            </div>
            <div className="form WIND">
                <label>DMC:</label>
                <input type="text" name="WIND" id="WIND"/>
            </div>
            <div className="form RAIN">
                <label>DC:</label>
                <input type="text" name="RAIN" id="RAIN"/>
            </div>
        </div>

        <div className="option-3">
            <div className="month form">
                <label>
                    MONTH:
                </label>
                <select class="prf-select"  id="month-of-birth" name="selectedMonth" onChange={this.handleChange.bind(this)}>
                    <option class="prf-option" value="01">Jan</option>
                    <option class="prf-option" value="02">Feb</option>
                    <option class="prf-option" value="03">Mar</option>
                    <option class="prf-option" value="04">Apr</option>
                    <option class="prf-option" value="05">May</option>
                    <option class="prf-option" value="06">Jun</option>
                    <option class="prf-option" value="07">Jul</option>
                    <option class="prf-option" value="08">Aug</option>
                    <option class="prf-option" value="09">Sep</option>
                    <option class="prf-option" value="10">Oct</option>
                    <option class="prf-option" value="11">Nov</option>
                    <option class="prf-option" value="12" selected>Dec</option>
                </select>
            </div>
            <div className="day form">
                <label>DAY:</label>
                <select class="prf-select" id="day-of-birth" name="selectedDay" onChange={this.handleChange.bind(this)}>
                    <option class="prf-option" value="01">01</option>
                    <option class="prf-option" value="02">02</option>
                    <option class="prf-option" value="03">03</option>
                    <option class="prf-option" value="04">04</option>
                    <option class="prf-option" value="05">05</option>
                    <option class="prf-option" value="06">06</option>
                    <option class="prf-option" value="07">07</option>
                    <option class="prf-option" value="08">08</option>
                    <option class="prf-option" value="09">09</option>
                    <option class="prf-option" value="10">10</option>
                    <option class="prf-option" value="11">11</option>
                    <option class="prf-option" value="12">12</option>
                    <option class="prf-option" value="13">13</option>
                    <option class="prf-option" value="14">14</option>
                    <option class="prf-option" value="15">15</option>
                    <option class="prf-option" value="16">16</option>
                    <option class="prf-option" value="17">17</option>
                    <option class="prf-option" value="18">18</option>
                    <option class="prf-option" value="19">19</option>
                    <option class="prf-option" value="20">20</option>
                    <option class="prf-option" value="21">21</option>
                    <option class="prf-option" value="22">22</option>
                    <option class="prf-option" value="23">23</option>
                    <option class="prf-option" value="24">24</option>
                    <option class="prf-option" value="25">25</option>
                    <option class="prf-option" value="26" selected>26</option>
                    <option class="prf-option" value="27">27</option>
                    <option class="prf-option" value="28">28</option>
                    <option class="prf-option" value="29">29</option>
                    <option class="prf-option" value="30">30</option>
                    <option class="prf-option" value="31">31</option>
            </select>
            </div>
            <div class="submit">
                <input type="submit" name="submit" value="Predict"/>
            </div>
        </div>

      </div>
    );
  }
}

export default Input;
