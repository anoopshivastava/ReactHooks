import React, {useState , useEffect} from 'react';


function UseEffect2() {
	const [x , setX] = useState(0);
  const [y , setY] = useState(0);
  const logMouseMove = (e) => {
    console.log(e)
     setX(e.clientX);
     setY(e.clientY);
  }
	useEffect(() => {
    console.log("event call")
		window.addEventListener('mousemove' , logMouseMove)
    return () => {
        window.removeEventListener('mousemove' , logMouseMove)
    }
	},[])
  return (
    <div className="App">
          <h1>Conditionlly Run useEffect Hooks</h1>
           <p>X: {x} && Y: {y}</p>
    </div>
  );
}

export default UseEffect2;
