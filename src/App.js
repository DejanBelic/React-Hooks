import React, {useState } from 'react';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0
//     }
//   }
//   handleClick = () => {
//     this.setState({ count: this.state.count + 1})
//   }
//   render() {
//     return (
//       <div>
//           <h1>{this.state.count}</h1>
//         <button onClick={this.handleClick}>Increase</button>
//       </div>
//     );
//   }
// }

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);
  const resetValues = () => setCount(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={resetValues}>Reset</button>
    </div>
  )
}

export default App;