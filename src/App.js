import React, {useState} from 'react';

function useInput() {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  }

  return {
    value,
    onChange
  }
}

function App() {



  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        {...useInput()}
      />

      <input
        type="text"
        placeholder="Surname"
        {...useInput()}
      />

      <input
        type="text"
        placeholder="Age"
        {...useInput()}
      />
    </form>
  )
};

export default App;