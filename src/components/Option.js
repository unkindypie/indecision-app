import React from 'react'

//function-based stateless component
const Option = (props)=> (
    <div>
        {props.optionText}
        <button
            //вызываю обработчик события с нужным мне параметром
            onClick={(e)=>props.handleDeleteOption(props.optionText)}
        >
            Delete
        </button>
    </div>
);


export default Option
