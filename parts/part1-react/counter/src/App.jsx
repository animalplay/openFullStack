import { useState } from "react";

const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}

const Display = ({counter}) => {
  return (
    <h2>{counter}</h2>
  )
}



function App() {
  const [counter, setCounter] = useState(0)

  const handleClick = () => {
    setCounter(counter + 1)
  }

  const handleReset = () => setCounter(0)
  
  return (
    <>
      <section>
        <header>
          <h1>Counter</h1>
        </header>
        
        <Display counter={counter}/>
        
        <Button onClick={handleClick} text='Click me!'/>
        <Button onClick={handleReset} text='Reset'/>

      </section>
    </>
  );
}

export default App;
