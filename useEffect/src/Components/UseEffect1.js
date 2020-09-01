import React, {useState , useEffect} from 'react';


function UseEffect1() {
	const [counter , setCounter] = useState(0);

	useEffect(() => {
		document.title = `counter ${counter}`;
	})
  return (
    <div className="App">
          <h1>Simple useEffect Hooks</h1>
          <button onClick={() => setCounter(counter + 1)}>Counter {counter}</button>
    </div>
  );
}

export default UseEffect1;
