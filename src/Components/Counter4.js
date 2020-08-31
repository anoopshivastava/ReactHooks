import React, {useState} from 'react'

function Counter4(){
	
	const [list , setList] = useState([]);
      const addItem = () => {
           setList([...list , {
            id:list.length,
            value:Math.floor(Math.random() * 10 + 1)
           }])
      }
	return(
            <div>
                  <h2>useState with Array</h2>
                  <button onClick={addItem}>Add item</button>
                  <ul>
                    {
                        list.map( item => <li key={item.id}>{item.value}</li>)
                    }
                  </ul>
            </div>
		)
}
export default Counter4;