// 3. Custom Hook för counter (3p)
// Skapa en custom hook, useCounter, som hanterar en räknare.
// Denna hook ska tillhandahålla två funktioner: en för att öka
// räknarens värde och en för att minska den. Skriv kod i App-komponenten
// nedanför som använder din custom hook och visar räknarens värde
// samt två knappar för att öka och minska värdet.

import React, { useState } from "react";

const LessButton = ({ onLess }) => {
  return <button onClick={onLess}>-</button>;
}

const MoreButton = ({ onMore }) => {
  return <button onClick={onMore}>+</button>;
}

const App = () => {
  const [count, setCount] = useState(0);

  const handleLess = () => {
    setCount(count - 1);
  }



  return (
    <div>
      <h1>Counter</h1>
      <p>{count}</p>
      <LessButton onLess={handleLess} />
      <MoreButton onMore={() => setCount(count + 1)} />
    </div>
  );
}

export default App;
