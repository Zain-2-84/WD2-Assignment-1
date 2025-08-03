import './App.css'
import { useState } from 'react';

function App() {
  let [number, setNumber] = useState(0);

  function increment() {
    setNumber(number + 1);
  }

  function decrement() {
    if (number === 0) {
      return;
    }

    setNumber(number - 1);
  }

  function reset() {
    setNumber(0);
  }

  function incrementByFive() {
    setNumber(number + 5);
  }

  function decrementByFive() {
    if (number != -1 && number < 0) {
      return number = 0;
    }

    setNumber(number - 5);
  }

  return (
    <>
      <h1>Current value: {number}</h1>
      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={reset}>Reset</button>

      <button onClick={incrementByFive}>Increment by 5</button>

      <button onClick={decrementByFive}>Decrement by 5</button>
    </>
  )
}

export default App