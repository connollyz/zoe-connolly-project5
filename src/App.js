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
      flavors:[],
      icing:[]
    }
  }
  
  //dbRef  to get access to the firebase.
  //go get the information from the firebase
  componentDidMount() {

    //create a varible that hold the refrince of the database 
    const dbRef = firebase.database().ref()
    //get the value of the data base
    dbRef.on('value', responce => {
      responce.val();
      
      //this is an object that hold all the data from firebase
      const data = responce.val();
      console.log( "everything", data)
     
     //dountFlavors
     //emty array to store the flavors in
      const flavors = [];
      console.log("flavors",flavors)

      //get the data.flavors from data 
      for (let flavor in data.flavors) {
        //and store them in a array
        flavors.push({
          flavor: flavor,
          Hex: flavor[flavor]
        })
      }

      //dountIcing
      //emty array to store the icing in
      const icing = [];
      console.log("icing", icing)

      //get the data.icing from data 
      for (let icing in data.icing) {
        //and store them in a array
        icing.push({
          icing: icing,
          Hex: icing[icing]
        })
      }

      //set state for both flavors and icing
      this.setState({
        flavors: flavors,
        icing: icing
      })
    })
  }

  
  
  //this is where things get print to page
  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <Donut/>
          <form type="submit">
            {this.state.flavors.map(flavor => {
              return (
                <Form flavor={flavor.flavor}/>
              )
            })}

            {this.state.icing.map(icing => {
              return (
                <Form icing={icing.icing} />
              )
            })}
            <button>next</button>
          </form>
        </main>
        <Footer/>
      </div>
    );
  }
}  




// use the contence of option array to be the displayed as radio buttons on the page
//create a listener for users input and store in a variable 
//take user input and compare to properties in firebase donut flavours 
//if exactly equal to firebase property get the value of the property and store in a variable
// target the SVG and change the colour with the variable equal to the user input (hex code)
//disable event default
// have a listener on the button (next) onClick emty option array  and replace with next set of options in the array


export default App;
