import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CounterWrapper } from "./tiimerStyled";

function Timer() {
  const [startDate, setStartDate] = useState(new Date());

  let currentDate = new Date();
  const currentTime = currentDate.getTime();  
  const startTime = startDate.getTime();
  console.log(startTime);
  const timeRemaining = startTime - currentTime;
  console.log(timeRemaining);

  let seconds = Math.floor(timeRemaining/1000);
  let minutes = Math.floor(seconds/60);
  let hours = Math.floor(minutes/60);
  let days = Math.floor(hours/24);
  console.log(hours);
  console.log(days);
  seconds %= 60;
  minutes %= 60;
  hours %= 24;

  return (
    <>
    <section className="section">
      <CounterWrapper>
      <h2>Countdown To Vacay</h2>
      <div className="reset_btn">
        <span>Enter Journey Date </span>
        <span>: </span>
        <span className="datepicker"> <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
        /> </span>
        
       
      </div>
      <div className="container">
        <div className="innerContainer"> {days} <br/>Days</div>
        <div className="innerContainer"> {hours} <br/>Hours</div>{" "}
        <div className="innerContainer"> {minutes}<br/> Minutes</div>
        <div className="innerContainer"> {seconds}<br/> Seconds</div>
      </div>
      </CounterWrapper>
      </section>
      </>
     
      
  );
}

export default Timer;
