import React, {useReducer} from 'react'

const initialvalue = {
  firstCounter:0,
  secondCounter:0

};
const reducer = (state , action) => {
  switch(action.type){
  	case 'increment':
  	return {...state, firstCounter : state.firstCounter + action.value}
  	case 'decrement':
  	return {...state,firstCounter : state.firstCounter - action.value}
    
    case 'secondincrement':
    return {...state, secondCounter : state.secondCounter + action.value}
    case 'seconddecrement':
    return {...state,secondCounter : state.secondCounter - action.value}


  	case 'reset':
  	return initialvalue
  	default:
  	  return state

  }
}

function Reducer2(){
	      const [count , dispatch] =  useReducer(reducer,initialvalue)
	return(
            <div>
                 <h2>Complex state & action useReducer Example</h2>
                 <p>{count.firstCounter}</p>
                  <p>{count.secondCounter}</p>
                 <button onClick = {() => dispatch({type:'increment',value:1})}>Increment</button>
                 <button onClick = {() => dispatch({type:'decrement',value:1})}>Decrement</button>
                  <button onClick = {() => dispatch({type:'increment',value:5})}>Increment</button>
                 <button onClick = {() => dispatch({type:'decrement',value:5})}>Decrement</button>
                 <button onClick = {() => dispatch({type:'reset'})}>Reset</button>



                 <div>
                        <button onClick = {() => dispatch({type:'secondincrement',value:1})}>Increment</button>
                        <button onClick = {() => dispatch({type:'seconddecrement',value:1})}>Decrement</button>
                 </div>

             </div>
		)
}
export default Reducer2;