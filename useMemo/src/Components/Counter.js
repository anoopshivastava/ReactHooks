import React, {useState , useMemo} from 'react'

function Counter(){
	const [ count1 , setcount1] = useState(0)
	const [ count2 , setcount2] = useState(0)

	const incrementCounter1 = () => {
           setcount1(count1 + 1)
	}
	const incrementCounter2 = () => {
           setcount2(count2 + 1)
	}
	const Event = useMemo(() => {
        let i = 0
		while( i < 200000000000)
			i++
		return count1 % 2 === 0
	},[count1])
	 
	return(
            <div>
                 <button onClick={incrementCounter1}>Counter1 {count1}</button>
                 <p>{ Event ? 'Event' : 'Odd' }</p>
                 <button onClick={incrementCounter2}>Counter2 {count2}</button>
            </div>
		)
}
export default Counter;