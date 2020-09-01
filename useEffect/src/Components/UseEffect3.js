import React, {useState , useEffect} from 'react';
import UseEffect2 from './UseEffect2'

function UseEffect3() {
	const [toggleDisplay , showToggle] = useState(false);
  return (
    <div className="App">
          <h1>Clean up useEffect Hooks</h1>
           <button onClick= {() => showToggle(!toggleDisplay)}>Toggle Component</button>
           {toggleDisplay && <UseEffect2/>}
           
    </div>
  );
}

export default UseEffect3;
