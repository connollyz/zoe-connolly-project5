import React from 'react';
    
const InputIcing = (props) => {
    return (
       <React.Fragment>
            <label className="icing" htmlFor="icing">{props.icing}</label>
            <input className="radio" type="radio" id="icing" name="userInput" value={props.icing} onChange={props.onChange} required/>
        </React.Fragment>
    )
}

//exports Input component to App.js
export default InputIcing; 