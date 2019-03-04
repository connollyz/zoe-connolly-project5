import React from 'react';

const InputFlavor = (props) => {
    return (
        <React.Fragment>
            <label htmlFor={props.flavor}>{props.flavor}</label>
            <input type="radio" id={props.flavor} name="flavor" value={props.flavor} onChange={props.onChange} /> 
        </React.Fragment>   
    )
}
//exports Inputcomponent to App.js
export default InputFlavor; 
