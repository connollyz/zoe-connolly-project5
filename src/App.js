import React, { Component } from 'react';
import firebase from './firebase.js';
import Header from './components/Header.js';
import Donut from './components/Donut.js';
import InputFlavor from './components/InputFlavor.js';
import InputIcing from './components/InputIcing.js';
import InputSprinkles from './components/InputSprinkles.js';
import Footer from './components/Footer.js';
import './App.css';


//on componemt did mout store values in state
class App extends Component{
  constructor(){
    super();
    this.state={
      //Have a state with an emty array (option array)
      flavors:[],
      icing:[],
      sprinkles: []
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
      // console.log("flavors",flavors)

      //get the data.flavors from data 
      for (let flavor in data.flavors) {
        //and store them in a array
        flavors.push({
          flavor: flavor,
          hex: data.flavors[flavor]
        })
      }
      console.log("flavors",flavors)


      // //dountIcing
      // //emty array to store the icing in
      const icings = [];
      // console.log("icing", icings)

      //get the data.icing from data 
      for (let icing in data.icing) {
        //and store them in a array
        icings.push({
          newIcing: icing,
          hex: data.icing[icing]
        })
      }
      console.log("icing",icings)


      // dountsprinkles
      //emty array to store the sprinkles in
      const sprinkles = [];
      // console.log("sprinkles",sprinkles)

      //get the data.sprinkles from data 
      for (let sprinkle in data.sprinkles) {
        //and store them in a array
        sprinkles.push({
          sprinkle: sprinkle,
          hex: data.sprinkles[sprinkle]
        })
      }
      console.log("sprinkels", sprinkles)


      //set state for both flavors, icing, and sprinkles
      this.setState({
        flavors: flavors,
        icing: icings,
        sprinkles: sprinkles    
      })
    })
  }


  //Flavor handle submit
  handleSubmitFlavor = (event) => {
    event.preventDefault();
  }

   //Icing handle submit
  handleSubmitIcing = (event) => {
    event.preventDefault();
  }

  //Sprinkles handle submit
  handleSubmitSprinkles= (event) => {
    event.preventDefault();
  }
  
  
  //this is where things get print to page
  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <Donut/> 
          {/* flavor form */}
          <form onSubmit={this.handleFlavor}>
            {this.state.flavors.map(flavor => {
              return (
                <InputFlavor flavor={flavor.flavor} handleFlavor={this.handleSubmitFlavor} />
              )
            })}
            <input type="submit" value="submit"/>   
          </form>

          
          {/* icing form */}
          <form onSubmit={this.handleIcing}>
            {this.state.icing.map(icing => {
              return (
                <InputIcing icing={icing.newIcing} handleIcing={this.handleSubmitIcing}/>
              )
            })} 
            <input type="submit" value="submit" />
          </form>  

            {/* sprinkles form */}
            <form onSubmit={this.handleSubmitSprinkles}>
              {this.state.sprinkles.map(sprinkle => {
                return (
                  <InputSprinkles sprinkle={sprinkle.sprinkle} handleSprinkles={this.handleSubmitSprinkles} />
                )
              })}
              <input type="submit" value="submit" />
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
