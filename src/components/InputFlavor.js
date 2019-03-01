
import React, { Component } from 'react';

const InputFlavor = (props) => {
    return (
        <React.Fragment>
            <label className="flavor" htmlFor="flavor">{props.flavor}</label>
            <input className="radio" type="radio" id="flavor" name="userInput" value={props.flavor} onChange={props.onChange} required /> 
        </React.Fragment>   
    )
}
//exports Inputcomponent to App.js
export default InputFlavor; 
