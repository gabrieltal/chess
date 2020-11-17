import './App.css';
import Game from './components/game';

function App() {
  return (
    <div className="app">
      <header className="d-flex justify-content-between">
        <nav>
          <a href="https://github.com/gabrieltal/chess">Github</a>
        </nav>
        <h1 class="m-0">Chess</h1>
        <p className="font-md">A <a className="white" href="https://github.com/in/gvtalavera">Gabriel Talavera</a> production.</p>
      </header>
      <main className="d-flex">
        <Game />
      </main>
    </div>
  );
}

export default App;
