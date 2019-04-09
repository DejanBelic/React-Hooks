import React, {createContext, useState, useContext} from 'react';

const NameContext = createContext();

function App() {
  const [name, setName] = useState('Milentije');
  return (
    <NameContext.Provider value={name}>
      <Child/>
    </NameContext.Provider>
  )
}

function Child() {
  return (
    <section className="child">
      <Granchild/>
    </section>
  )
}

function Granchild() {
  return (
    <div className="grandchild">
      <Button/>
    </div>
  )
}

function Button() {
  const name = useContext(NameContext);
  return (
     <button>{name}</button>
  )
}


export default App;