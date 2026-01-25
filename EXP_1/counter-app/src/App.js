import { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Counter SPA</h2>
        <p>Count: {count}</p>
        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <button onClick={() => setCount(count + 1)} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>+</button>
          <button onClick={() => setCount(count - 1)} style={{ padding: '10px 20px', fontSize: '1.2rem' }}>-</button>
        </div>
      </header>
    </div>
  );
}

export default App;
