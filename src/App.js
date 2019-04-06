import React, { useState } from 'react';

function App() {
  // Like equivalent this.state = {}
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? 'active' : 'inactive';

  const onClick = () => setActivated(!activated);
  return(
    <button onClick={onClick}>
      {buttonText}
    </button>
  )
}

export default App;
