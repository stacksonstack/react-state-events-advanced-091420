import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'

class BeyContainer extends React.Component{

  
  state = {

    api : beyArray
  }

  renderBey(props){
    return this.state.api.map((el) => <BeyCard bey={el} key={el.id} favorite={el.favorite} appClickHandler={props.appClickHandler}/>)
  }

  // renderBey(){
  //   return beyArray.map((el) => <BeyCard name={el.name} key={el.id}/>)
  // }
  render() {
    //console.log(this.renderBey.key)
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderBey(this.props)}
      </div>
    );
  }
}

export default BeyContainer;
