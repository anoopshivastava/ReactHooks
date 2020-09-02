import React  from 'react'

function Count(props){
	console.log(props.title)
	return(
            <div>
                 {props.title}
                 
            </div>
		)
}
export default React.memo(Count);