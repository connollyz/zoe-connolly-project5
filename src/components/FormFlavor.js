import React, { Component } from 'react';

const FormFlavor = (props) => {
    return (
        <form onSubmit={this.props.handleFlavor()}>
            <label className="flavor" htmlFor="flavor">{props.flavor}</label>
            <input className="radio" type="radio" id="flavor" name="flavor" required /> 
            <input type="submit" value="submit" />   
        </form>
    )
}
//exports form component to App.js
export default FormFlavor; 
