import React, {useState , useEffect,useRef} from 'react';


function UseRef1() {
  const myRef = useRef(null)
	useEffect(() => {
    console.log(myRef)
    myRef.current.focus()
  },[])
  return (
    <div className="">
           <input type="text" ref={myRef}/>
    </div>
  );
}

export default UseRef1;
