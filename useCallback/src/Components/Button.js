import React  from 'react'

function Button(props){
	console.log(props.text)
	return(
            <div>
                 <button onClick={props.clickHandler}>{props.text}</button>
            </div>
		)
}
export default React.memo(Button);