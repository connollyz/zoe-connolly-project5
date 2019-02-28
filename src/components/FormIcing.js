import React, {Component} from 'react';
    
const FormIcing = (props) => {
    return (
        <form onSubmit={this.props.handleIcing()}>
            <label className="icing" htmlFor="icing">{props.icing}</label>
            <input className="radio" type="radio" id="icing" name="icing" required/>
            <input type="submit" value="submit"/>
        </form>
    )
}
//exports form component to App.js
export default FormIcing; 