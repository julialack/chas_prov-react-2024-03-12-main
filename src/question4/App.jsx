// Context API för Temahantering (3p)
// Använd Context API för att skapa ett enkelt tema-byte-system.
// Skapa en ThemeContext som innehåller aktuellt tema (t.ex. "light" eller "dark").
// Använd en Provider från ThemeContext i App-komponenten nedanför.
// Skapa två barn-komponenter som använder temat.
// Skapa en tredje barn-komponent som innehåller en knapp som kan växla tema.
// Providern i App-komponenten ska omsluta de tre barn-komponenterna.

import { useContext } from 'react';
import Button from './components/Button';
import { ThemeContext, ThemeProvider } from './components/ThemeContext';

function App() {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider>
      <div className={`App ${isDarkTheme ? 'dark' : ''}`}>
        <h1>Theme Context</h1>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;


