import React, {useState} from 'react';

function useCounter(startingValue) {
  const [count, setCount] = useState(startingValue);
  const increment = () =>  setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    increment,
    decrement,
    count
  }
}

function Display(props) {
  const {count, increment, decrement} = useCounter(props.start);

  return (
    <div>
      <button onClick={increment}>Incrase</button>
      <button onClick={decrement}>Decrease</button>
      <h1>{count}</h1>
    </div>)
}

function FancyDisplay(props) {
  const {count, increment, decrement} = useCounter(props.start);

  return (
    <div>
      <button onClick={increment}>Incrase</button>
      <button onClick={decrement}>Decrease</button>
      <h2>{count}</h2>
    </div>)
}

const App = () => {
  return(
    <div>
      <Display start={10}/>
      <Display start={50}/>
      <FancyDisplay start={60}/>
    </div>
  )
};

export default App;