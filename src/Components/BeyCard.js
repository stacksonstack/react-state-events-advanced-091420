import React from "react";


class BeyCard extends React.Component{

  beyClickHandler = () => {  
    this.props.appClickHandler(this.props.bey)
  }
    render(){
      return (
        
        <div className="card">
          <h1 >{this.props.bey.name}</h1>
        <img src={this.props.bey.img} alt="beyonce" onClick={this.beyClickHandler} />
        </div>
      ); 
    }


}








export default BeyCard;
