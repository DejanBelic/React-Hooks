import React, {Component, useState} from 'react';

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

  const onClick = () => setCount(count + 1);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onClick}>Increase</button>
    </div>
  )
}

export default App;