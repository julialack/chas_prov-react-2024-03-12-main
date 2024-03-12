// 6. Users i Redux (3p)
// Skapa en komponent som lägger till användare i en lista i Redux.
// Det ska gå att skriva in ett namn i ett inputfält och klicka på en "Lägg till"-knapp
// för att lägga till användaren. Alla användare ska visas i en lista under inputfältet.

// Som hjälp finns redan en slice (usersSlice.js) som hanterar användarlistan. Dessutom är
// react-redux och @reduxjs/toolkit redan installerat i projektet.
// Skapa en store som använder sig av usersSlice.js och Lägg till en Provider i App-komponenten
// nedanför.


import { store } from "./store";
import { Provider } from "react-redux";
import { addUser, users } from "./usersSlice";
import { useState } from "react";

 
function App() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);
  const addUser = () => {
    setUsers([...users, name]);
    setName("");
  };
  return (
  
    <Provider store={store}>
      <div>
        <h1>Users</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={addUser}>Lägg till</button>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
    </Provider>
  );
}

export default App;