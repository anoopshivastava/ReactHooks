import React, {useState} from 'react'

function Counter3(){
	const initialCount = 0;
	const [name , setName] = useState({firstName:'', lastName:''});
	return(
            <div>
                  <h2>useState with Object</h2>
                  <input type="text" onChange = {e => setName({...name,firstName:e.target.value}) } value={name.firstName} />
                  <input type="text" onChange = {e => setName({...name,lastName:e.target.value}) } value={name.lasttName}/>
                  <p>First Name: {name.firstName}</p>
                  <p>Last Name: {name.lastName}</p>
            </div>
		)
}
export default Counter3;