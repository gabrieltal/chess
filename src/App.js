import './app.css';
import Game from './components/game';

function App() {
  return (
    <div className="app">
      <header className="bg-black p-2 white">
        <nav className="d-grid nav-grid align-items-center">
          <a className="hide-on-sm font-md" href="https://github.com/gabrieltal/chess" target="_blank" rel="noopener noreferrer">Github</a>
          <div className="d-flex justify-content-center"><h1 className="m-0">Chess</h1></div>
          <div className="d-flex justify-content-end hide-on-sm"><p className="font-md">A <a className="white" href="https://linkedin.com/in/gvtalavera" target="_blank" rel="noopener noreferrer">Gabriel Talavera</a> production.</p></div>
        </nav>
      </header>
      <Game />
    </div>
  );
}

export default App;
