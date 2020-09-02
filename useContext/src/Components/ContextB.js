import React, {useContext} from 'react'
import ContextC from './ContextC'
import {UserContext , ConsumerContext} from '../App';
function ContextB(){
	const user = useContext(UserContext)
	const consumer = useContext(ConsumerContext)
	return(
            <div>
                            

               <h2>ContextB</h2>
               <div>{consumer} %% {user}</div>
               <ContextC/>

            </div>
		)
}
export default ContextB;