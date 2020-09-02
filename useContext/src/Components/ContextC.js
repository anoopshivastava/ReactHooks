import React from 'react'
import {UserContext , ConsumerContext} from '../App';
function ContextC(){
	
	return (
             <div>
                  <UserContext.Consumer>          
                    {
                          user => {

                          	   return  (
                                              <ConsumerContext.Consumer>

                                                                        {
                                                                        	 consumer => {

                                                                        	 	return (
                                                                                        <p>{user} && {consumer}</p>
  
                                                                        	 		)
                                                                        	 }
                                                                        }
                                              </ConsumerContext.Consumer>
                          	   	)
                          }

                    }
                      </UserContext.Consumer>
             </div>
		)
}
export default ContextC;