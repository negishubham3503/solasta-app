import React, { useState } from "react";
import {Component} from 'react';
import "./clock.css";

class Clock extends Component{
  updateDateLeft = ()=> {
    const newNow = new Date().getTime();
    setDate(solastaDate - newNow);
  }

  render(){
  setInterval(this.updateDateLeft, 1000);
  const now = new Date().getTime();
  const solastaDate = new Date(2020, 2, 13).getTime();
  const [date, setDate] = useState(solastaDate - now);

   return (
    <div className="Clock">
      <h1 id="heading">Solasta ETA</h1>
      <div className="time">
        <h1 id="value">{Math.floor(date / (1000 * 3600 * 24))}</h1>
        <h4 id="notation">days</h4>
      </div>
      <div className="time">
        <h1 id="value">{Math.floor(date / (1000 * 3600)) % 24}</h1>
        <h4 id="notation">hours</h4>
      </div>
      <div className="time">
        <h1 id="value">{Math.floor(date / (1000 * 60)) % 60}</h1>
        <h4 id="notation">minutes</h4>
      </div>
      <div className="time">
        <h1 id="value">{Math.floor(date / 1000) % 60}</h1>
        <h4 id="notation">seconds</h4>
      </div>
    </div>
  ); 
  }
}

export default Clock;