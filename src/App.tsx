import { PokemonProvider } from "./pokemon/PokemonStore";
import { PokemonApp } from "./pokemon/PokemonApp";

import './App.css';

function App() {
  return (
    <PokemonProvider>
      <PokemonApp />
    </PokemonProvider>
  )
}

export default App;
