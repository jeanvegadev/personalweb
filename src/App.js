import logo from './logo.svg';
import './App.css';
import Example from './components/Header';

function App() {
  return (
    <div className="App">
      <Example/>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hola a todos soy Jean Vega.</p>
        <p>Esta es mi sitio web personal. Es construido con React.</p>
        <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </div>
    </div>
  );
}

export default App;
