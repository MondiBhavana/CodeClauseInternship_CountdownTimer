import React from "react";
import CountdownTimer from "./CountdownTimer";
import "./App.css";

function App() {
  const targetDate = "2024-12-31T00:00:00";
  const eventName = "New Year Countdown";

  return (
    <div className="App">
      <CountdownTimer targetDate={targetDate} eventName={eventName} />
    </div>
  );
}

export default App;
