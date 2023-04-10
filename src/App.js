import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  fetch(process.env.REACT_APP_API_URL || "https://localhost:8080/api/v1")
    .then(() => console.log('Deu certo!'))
    .catch(() => console.log('Deu errado!'))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter with React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        </div>
      </header>
      
    </div>
  );
}

export default App;
