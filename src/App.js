import React, { createContext } from 'react';

const NameContext = createContext();

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Milentije'
    }
  }
  render() {
    return(
      <NameContext.Provider value={this.state.name }>
        <Child />
      </NameContext.Provider>
    )
  }
}
class Child extends React.Component {
  render() {
    return(
      <section className="child">
          <Granchild/>
      </section>
    )
  }
}
class Granchild extends React.Component {
  render() {
    return(
      <div className="grandchild">
        <Button />
      </div>
    )
  }
}
class Button extends React.Component {
  render() {
    return(
      <NameContext.Consumer>
        {name => <button>{name}</button>}

      </NameContext.Consumer>
    )
  }
}


export default App;