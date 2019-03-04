import React from 'react';
    
const InputIcing = (props) => {
    return (
       <React.Fragment>
            <label htmlFor={props.icing}>{props.icing}</label>
            <input type="radio" id={props.icing} name="icing" value={props.icing} onChange={props.onChange}/>
        </React.Fragment>
    )
}

//exports Input component to App.js
export default InputIcing; 