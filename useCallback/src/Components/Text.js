import React, {useState} from 'react'

function Text(){
	console.log("text component")
	return(
            <div>
                 <h2>Welcome Text</h2>
                 
            </div>
		)
}
export default React.memo(Text);