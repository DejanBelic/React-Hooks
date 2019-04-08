import React, { useState, useEffect } from 'react';



function App() {
  const [count, setCount] = useState(0);
  const handleIncreaseCount = () => setCount(count + 1);
  const handleDecreaseCount = () => setCount(count - 1);


  useEffect(() => {
    console.log(`I'm inside the useEffect function. The current count is ${count}`);

    return () => {
      console.log(`Queed to clean up above work after its executed. ${count}`)
    }
  });

  return (
    <div>
      <button onClick={handleIncreaseCount}>Increase</button>
      <button onClick={handleDecreaseCount}>Decrease</button>
      <h1>count</h1>
    </div>
  )
}

export default App;