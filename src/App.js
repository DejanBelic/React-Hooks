import React, { useState, useEffect } from 'react';


function Counter() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('salmon');
  const handleIncreaseCount = () => setCount(count + 1);
  const handleDecreaseCount = () => setCount(count - 1);


  useEffect(() => {
    console.log(`I'm inside the useEffect function. The current count is ${count}`);

    return () => {
      console.log(`Queed to clean up above work after its executed. ${count}`)
    }
  }, [count]);

  const handleColorChange = () =>  {
    const nextColor = color === 'salmon' ? 'gold' : 'salmon';
    setColor(nextColor);
  };

  return (
    <div>
      <button onClick={handleIncreaseCount}>Increase</button>
      <button onClick={handleColorChange}>Color change</button>
      <button onClick={handleDecreaseCount}>Decrease</button>
      <h1 style={{ color }}>count</h1>
    </div>
  )
}

function App() {
  const [visible, setVisible] = useState(false);
  return(<div>
    <button onClick={() => setVisible(!visible)}>Show / Hide the Counter Component</button>
    { visible &&  <Counter/>}
  </div>)
}

export default App;