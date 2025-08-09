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
    if (number != -1 || number < 0) {
      return setNumber(0);
    }

    setNumber(number - 5);
  }

  return (
    <>
    <div className="full-Container">
      <div className='numberAddSubtract-Container'>
      <h1 className='heading-with-update'>Current value: {number}</h1>

      <div className="increment-decrement-buttons">
        <button className='increment' onClick={increment}>Increment</button>

        <button className='decrement' onClick={decrement}>Decrement</button>

        <button className='reset' onClick={reset}>Reset</button>

        <button className='incrementByFive' onClick={incrementByFive}>Increment by 5</button>

        <button className='decrementByFive' onClick={decrementByFive}>Decrement by 5</button>
      </div>
      </div>

    </div>
    </>
  )
}

export default App