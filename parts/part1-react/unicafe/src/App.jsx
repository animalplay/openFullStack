import { useState } from "react";
import "./App.css";
import { Statistics } from "./components/Statistics";
import { Button } from "./components/Button";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodHandleClick = () => {
    const newGoodCounter = good + 1;
    setGood(newGoodCounter);
  };

  const neutralHandleClick = () => {
    const newNeutralCounter = neutral + 1;
    setNeutral(newNeutralCounter);
  };

  const badHandleClick = () => {
    const newBadCounter = bad + 1;
    setBad(newBadCounter);
  };

  

  return (
    <main>
      <h1>Give feedBack</h1>
      <Button onClick={goodHandleClick} text="Good"/>
      <Button onClick={neutralHandleClick} text="Neutral"/>
      <Button onClick={badHandleClick} text="Bad"/>
      
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
      />
    </main>
  );
}

export default App;
