import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <b>DOMINIC K. YEGON</b>
        </p>
        <a
          className="App-link"
          href="https://dominicyegon.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Profile
        </a>
      </header>
    </div>
  );
}

export default App;
