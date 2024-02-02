import logo from './logo.svg';
import './App.css';
import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h1>Welcome to React Facebook Auth Example</h1>
      <Facebook />
    </div>
  );
}

export default App;
