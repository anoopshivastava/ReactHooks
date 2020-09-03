import React, {useState , useEffect,useRef} from 'react';


function UseRef2() {
  const [count ,setCount] = useState(0)
  const myRef = useRef(null)
  useEffect(() => {
      myRef.current = setInterval(() => {
        setCount(prev => prev + 1)
      },1000)
      return () => {
        clearInterval(myRef.current)
      }
  })
  return (
    <div className="">
           <p>Counter {count}</p>
           <button onClick = { () => clearInterval(myRef.current)}>Click here</button>
    </div>
  );
}

export default UseRef2;
