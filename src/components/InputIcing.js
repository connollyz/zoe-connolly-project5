import React, {Component} from 'react';
    
const FormIcing = (props) => {
    return (
       <React.Fragment>
            <label className="icing" htmlFor="icing">{props.icing}</label>
            <input className="radio" type="radio" id="icing" name="icing" required/>
        </React.Fragment>
    )
}
//exports form component to App.js
export default FormIcing; 