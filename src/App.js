import './App.css';
import Pokecard from './Pokecard';
import pokedex from './Pokedex';

function App() {
  return (
    <div className="App">
      <Pokecard pokedex={pokedex} />
    </div>
  );
}

export default App;
