import React from "react";
import "./App.css";
import BeyContainer from './Containers/BeyContainer'
import Favorites from './Containers/Favorites'


class App extends React.Component {

  state = { 
    favorites: {}
  }
   appClickHandler = (bey) => {
    console.log(bey)
    this.setState({favorites: bey.favorite})
   }
   render (){
     
     return (
       <div className="container" >
         <BeyContainer appClickHandler = {this.appClickHandler}/>
         <Favorites favorites={this.state.favorites}/>
       </div>
     );
   }
  
  
  



  



};

export default App;
