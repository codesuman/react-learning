import { PokemonProvider } from "./pokemon/PokemonStore";
import { PokemonComponent } from "./pokemon/PokemonComponent";

import './App.css';

function App() {
  return (
    <PokemonProvider>
      <PokemonComponent />
    </PokemonProvider>
  )
}

export default App;
