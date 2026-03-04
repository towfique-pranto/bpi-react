import React from "react";

const App = () => {
  return (
    <div>
      <div className="container">
        <h1>BMI Calculator</h1>
        <label htmlFor="height">Height (cm):</label>
        <input type="number" id="height" placeholder="e.g., 175"></input>
        <label htmlFor="weight">Weight (kg):</label>
        <input type="number" id="weight" placeholder="e.g., 70"></input>
        <button>Calculate BMI</button>
        <div className="result"></div>
      </div>
    </div>
  );
};

export default App;
