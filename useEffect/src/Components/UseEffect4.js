import React, {useState , useEffect} from 'react';


function UseEffect4() {
	const [countTimer , setCountTimer] = useState(0);
	const tick = () => {
		setCountTimer(countTimer + 1)
	}
	useEffect(() => {
       const interval = setInterval(tick , 1000)
       return () => {
       	  clearInterval(interval)
       }
	},[countTimer])
  return (
    <div className="App">
          <h1>Dependency useEffect Hooks</h1>
           <p>Count {countTimer}</p>
           
    </div>
  );
}

export default UseEffect4;
