import React, { Component } from 'react';



const Form = (props) => {
    return (
        <div>
            <label className="flavor" for="flavor">
                {props.flavor}
                <input className="radio" type="radio" id="flavor" name="flavor" required /> 
            </label> 
            <label className="icing" htmlFor="icing">
                {props.icing}
                <input className="radio" type="radio" id="icing" name="icing" required />
            </label>
        </div>
    )
}
//exports form component to App.js
export default Form; 