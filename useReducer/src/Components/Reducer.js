import React, {useReducer} from 'react'

const initialvalue = 0;
const reducer = (state , action) => {
  switch(action){
  	case 'increment':
  	return state + 1
  	case 'decrement':
  	return state - 1
  	case 'reset':
  	return initialvalue
  	default:
  	  return state

  }
}

function Reducer(){
	      const [count , dispatch] =  useReducer(reducer,initialvalue)
	return(
            <div>
                 <h2>Simple useReducer Example</h2>
                 <p>{count}</p>
                 <button onClick = {() => dispatch('increment')}>Increment</button>
                 <button onClick = {() => dispatch('decrement')}>Decrement</button>
                 <button onClick = {() => dispatch('reset')}>Reset</button>
             </div>
		)
}
export default Reducer;