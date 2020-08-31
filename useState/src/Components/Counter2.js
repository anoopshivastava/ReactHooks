import React, {useState} from 'react'

function Counter2(){
	const initialCount = 0;
	const [count , setCount] = useState(initialCount);
	return(
            <div>
                 <h2>useState with Previous Count</h2>
                 <p>{count}</p>
                 <button onClick={() => setCount(initialCount)}>Reset</button>
                 <button onClick={() => setCount(pre => pre + 1)}>Incremenent</button>
                 <button onClick={() => setCount(pre => pre - 1)}>Decrement</button>

            </div>
		)
}
export default Counter2;