// 1. Lista med useState (3p)
// Skapa en komponent som visar en lista med hobbies.
// Användaren ska kunna lägga till en ny hobby via ett
// inputfält och en "Lägg till"-knapp. Varje hobby i listan
// ska ha en "Ta bort"-knapp som tar bort hobbyn från listan.
// Använd useState för att hantera listan.

import React, { useState } from 'react';

function App() {
  const [hobbys, setHobbys] = useState([]);

  const handleAddHobby = (hobby) => {
    setHobbys([...hobbys, hobby ]);
  };

  const handleRemoveHobby = (index) => {
    const updatedHobbys = [...hobbys];
    updatedHobbys.splice(index, 1);
    setHobbys(updatedHobbys);
  };

  return (
    <div>
      <h1>Hobbies</h1>
      <input type="text" />
      <button onClick={() => handleAddHobby('')}>Lägg till</button>
      {hobbys.map((hobby, index) => (
        <div key={index}>
          {hobby}
          <button onClick={() => handleRemoveHobby(index)}>Ta bort</button>
        </div>
      ))}
    </div>
  );
}

export default App;
