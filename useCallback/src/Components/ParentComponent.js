import React, {useState,useCallback} from 'react'
import Button from './Button'
import Count from './Count'
import Text from './Text'
function ParentComponent(){
  console.log("parent component")
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(5000)
	const incrementAge = useCallback( () => {
		setAge(age + 1)
	} , [age])
	const incrementSalary = useCallback(() => {
		setSalary(salary + 1000)
	},[salary])
	return(
            <div>
                 <h2>useParentComponent Hooks</h2>
                   <Text/>
                   <Count title={age}/>
                  <Button  clickHandler = {incrementAge}   text="Increment Age"/>
                   <Count title={salary}/>
                  <Button clickHandler = {incrementSalary} text="Increment Salary"/>
            </div>
		)
}
export default ParentComponent;