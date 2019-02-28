import React, { Component } from 'react';
import firebase from './firebase.js';
import Header from './components/Header.js';
import Donut from './components/Donut.js';
import Form from './components/Form.js';
import Footer from './components/Footer.js';

import './App.css';


//on componemt did mout store values in state
class App extends Component{
  constructor(){
    super();
    this.state={
      //Have a state with an emty array (option array)
      options:[]
    }
  }
  // handle event of click on submit button

  //dbRef  to get access to the firebase.
  handleSubmit = (event) => {
    //the argument passed to this function is the event (submition of the form)
    //default behavoior it
    event.preventDefault();
    const dbRef = firebase.database().ref()
    this.state({
      
    })}

  //this is where things get print to page
  render() {
    return (
      <div className="App">
        <Header/>
        <main>
          <Donut/>
          <Form/> 
        </main>
        <Footer/>
      </div>
    );
  
  };
}



// populate the array with the firebase data

// use the contence of option array to be the displayed as buttons on the page
//create a listener for users input and store in a variable 
//take user input and compare to properties in firebase donut flavours 
//if exactly equal to firebase property get the value of the property and store in a variable
// target the SVG and change the colour with the variable equal to the user input (hex code)
//disable event default
// have a listener on the button (next) onClick emty option array  and replace with next set of options in the array


export default App;
