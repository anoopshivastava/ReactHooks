import React from 'react';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';
import Counter3 from './Components/Counter3';
import Counter4 from './Components/Counter4';
import './App.css';

function App() {
  return (
    <div className="App">
          <h1>useState Hooks</h1>
           <Counter1/>
           <Counter2/>
           <Counter3/>
           <Counter4/>
    </div>
  );
}

export default App;
