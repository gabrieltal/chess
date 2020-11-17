import './App.css';
import Game from './components/game';

function App() {
  return (
    <div className="app">
      <header className="d-flex justify-content-between bg-black">
        <nav>
          <a href="https://github.com/gabrieltal/chess" target="_blank" rel="nofollow">Github</a>
        </nav>
        <h1 class="m-0">Chess</h1>
        <p className="font-md">A <a className="white" href="https://github.com/in/gvtalavera" target="_blank" rel="nofollow">Gabriel Talavera</a> production.</p>
      </header>
      <main className="d-flex flex-column align-items-center vw-100">
        <Game />
      </main>
    </div>
  );
}

export default App;
