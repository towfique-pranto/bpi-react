import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState("");

  const calculateBMI = () => {
    if (!height || !weight) {
      setResult("Please enter both height and weight.");
      return;
    }
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }

    setResult(`Your BMI is ${bmi.toFixed(2)} : Result is ${category}`);
  };

  return (
    <div>
      <div className="container">
        <h1>BMI Calculator</h1>
        <label htmlFor="height">Height (cm):</label>
        <input
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
          id="height"
          placeholder="e.g., 175"
        ></input>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          id="weight"
          placeholder="e.g., 70"
        ></input>
        <button onClick={calculateBMI}>Calculate BMI</button>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default App;
