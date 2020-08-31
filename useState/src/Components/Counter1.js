import React, {useState} from 'react'

function Counter1(){
	const [count , setCount] = useState(0);
	return(
            <div>
                 <h2>Simple Example</h2>
                 <button onClick={() => setCount(count + 1)}>Counter {count}</button>
            </div>
		)
}
export default Counter1;