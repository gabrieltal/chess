import './app.css';
import Game from './components/game';

function App() {
  return (
    <div className="app">
      <header className="bg-black p-2 white">
        <nav className="d-grid nav-grid align-items-center">
          <a className="hide-on-sm font-md" href="https://github.com/gabrieltal/chess" target="_blank" rel="noopener noreferrer">Github</a>
          <div className="d-flex justify-content-center"><h1 className="m-0">Chess</h1></div>
          <a className="justify-self-end hide-on-sm font-md" href="https://linkedin.com/in/gvtalavera" target="_blank" rel="noopener noreferrer">Linkedin</a>
        </nav>
      </header>
      <Game />
    </div>
  );
}

export default App;
