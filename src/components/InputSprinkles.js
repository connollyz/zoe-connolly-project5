import React, { Component } from 'react';

const InputSprinkles = (props) => {
    return (
        <React.Fragment>
            <label className="sprinkle" htmlFor="sprinkle">{props.sprinkle}</label>
            <input className="radio" type="radio" id="sprinkle" name="sprinkle" required />
        </React.Fragment>
    )
}
//exports Input component to App.js
export default InputSprinkles; 