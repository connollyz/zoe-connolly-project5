import React, { Component } from 'react';
import firebase from './firebase.js';
import Header from './components/Header.js';
import Donut from './components/Donut.js';
import InputFlavor from './components/InputFlavor.js';
import InputIcing from './components/InputIcing.js';
import Footer from './components/Footer.js';
import './App.css';


//on componemt did mout store values in  these state
class App extends Component{
  constructor(){
    super();
    this.state={
      flavors:[],
      icing:[],
      step: 1,
      colours: null,
      userFlavor: "",
      userIcing: "",
    }
    this.handleChangeFlavor = this.handleChangeFlavor.bind(this);
    this.handleChangeIcing = this.handleChangeIcing.bind(this);
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
  
    
     //dountFlavors
     //emty array to store the flavors in
      const flavors = [];
      //get the data.flavors from data 
      for (let flavor in data.flavors) {
        //and store them in a array
        flavors.push({
          flavor: flavor,
          hex: data.flavors[flavor]
        })
      }
 
      // //dountIcing
      // //emty array to store the icing in
      const icings = [];
      //get the data.icing from data 
      for (let icing in data.icing) {
        //and store them in a array
        icings.push({
          newIcing: icing,
          hex: data.icing[icing]
        })
      }

      //set state for both flavors, icing, and sprinkles
      this.setState({
        flavors: flavors,
        icing: icings,
        flavorHex: "#f9c48c",
        icingHex: "#fffffb",  
      })
    })
  }
  

  //Flavor handle events
  handleSubmitFlavor = (event) => {
    event.preventDefault();
    this.setState({
      step:2,
    })
  }

  handleChangeFlavor(event) {
    //get the object that has the colours in it
    const colours = this.state.colours;
    //save the value of the users input
    const currentFlavor = event.target.value;
    //get the hex code form the local varible colours we made using brakit notation becouse curentFlavor is varible
    const flavorHex = colours.flavors[currentFlavor];
    this.setState({
      userFlavor: event.target.value,
      flavorHex : flavorHex
    })
  }

   //Icing handle events
  handleSubmitIcing = (event) => {
    event.preventDefault();
    this.setState({ 
      step: 1 ,
      flavorHex: "#f9c48c",
      icingHex: "#fffffb",  
      
    })    
  }

  handleChangeIcing(event) {
    //get the object that has the colours in it
    const colours = this.state.colours;
    //save the value of the users input
    const currentIcing = event.target.value;
    //get the hex code form the local varible colours we made using brakit notation becouse curentFlavor is varible
    const icingHex = colours.icing[currentIcing];
    this.setState({
      userIcing: event.target.value,
      icingHex : icingHex
    })
  }


  
  //this is where things get print to page
  render(){
    return (
      <div className="App">
        <Header/>
        <main>
          <div className="wrapper">
            <Donut flavorHex={this.state.flavorHex} icingHex={this.state.icingHex} /> 
          </div>
          <div className="textWrapper">
            {/* flavor form */}
            {this.state.step === 1 && <form className="clearfix" onSubmit={this.handleSubmitFlavor}>
              {this.state.flavors.map(flavor => {
                return (
                  <InputFlavor flavor={flavor.flavor} onChange={this.handleChangeFlavor}/>
                )
              })}
              <input type="submit" value="next"/>   
            </form>}

            
            {/* icing form */}
          {this.state.step === 2 && <form className="clearfix" onSubmit={this.handleSubmitIcing}>
              {this.state.icing.map(icing => {
                return (
                  <InputIcing icing={icing.newIcing} onChange={this.handleChangeIcing}/>
                )
              })} 
              <input type="submit" value="start over"/>
            </form>}
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}  

export default App;
