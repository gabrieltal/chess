import './App.css';
import Game from './components/game';

function App() {
  return (
    <div className="app">
      <header className="d-flex justify-content-between bg-black p-2 align-items-center white">
        <nav>
          <a href="https://github.com/gabrieltal/chess" target="_blank" rel="noopener noreferrer">Github</a>
        </nav>
        <h1 class="m-0">Chess</h1>
        <p className="font-md">A <a className="white" href="https://github.com/in/gvtalavera" target="_blank" rel="noopener noreferrer">Gabriel Talavera</a> production.</p>
      </header>
      <main className="d-flex flex-column align-items-center vw-100">
        <Game />
      </main>
    </div>
  );
}

export default App;
