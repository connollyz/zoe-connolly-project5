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
      sprinkles: [],
      step: 1,
      userFlavor: "",
      userIcing: "",
      userSprinkles: "",
      colours: null
    }
    this.handleChangeFlavor=this.handleChangeFlavor.bind(this);
    this.handleChangeIcing = this.handleChangeIcing.bind(this);
    this.handleChangeSprinkles = this.handleChangeSprinkles.bind(this)

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
      this.setState({
        colours: data
      })
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


  //Flavor handle events
  handleSubmitFlavor = (event) => {
    event.preventDefault();
    this.setState({
      step:2,
    })
    console.log("userflavor",event.nativeEvent) 
  }

  handleChangeFlavor(event) {
    this.setState({
      userFlavor: event.target.value,
    })
    console.log("this works", event.target.value)
  }

   //Icing handle events
  handleSubmitIcing = (event) => {
    event.preventDefault();
    this.setState({ 
      step: 3 ,
      userIcing: event.target.value,
    })    
  }

  handleChangeIcing(event) {
    this.setState({
      userIcing: event.target.value,
    })
    console.log("this works", event.target.value)
  }

  //Sprinkles handle event
  handleSubmitSprinkles= (event) => {
    event.preventDefault();
    this.setState({
        userSprinkles: event.target.value,
      })
  }

  handleChangeSprinkles(event) {
    this.setState({
      userSprinkles: event.target.value,
    })
    console.log(event.target.value)
  }
  
  
  //this is where things get print to page
  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <Donut/> 
          {/* flavor form */}
          {this.state.step === 1 && <form className="FlavorForm" onSubmit={this.handleSubmitFlavor}>
            {this.state.flavors.map(flavor => {
              return (
                <InputFlavor flavor={flavor.flavor} onChange={this.handleChangeFlavor}/>
              )
            })}
            <input type="submit" value="next"/>   
          </form>}

          
          {/* icing form */}
          {this.state.step === 2 && <form className="IcingForm" onSubmit={this.handleSubmitIcing}>
            {this.state.icing.map(icing => {
              return (
                <InputIcing icing={icing.newIcing} onChange={this.handleChangeIcing}/>
              )
            })} 
            <input type="submit" value="next" />
          </form>  }

            {/* sprinkles form */}
          {this.state.step === 3 && 
            <form className="SprinklesForm" onSubmit={this.handleSubmitSprinkles}>
                {this.state.sprinkles.map(sprinkle => {
                  return (
                    <InputSprinkles sprinkle={sprinkle.sprinkle} onChange={this.handleChangeSprinkles}/>
                  )
                })}
                <input type="submit" value="done" />
              </form>
          }
           

          
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
