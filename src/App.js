
import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  state={
    Person :{ fullName:"Amine zaidi",
    Bio:"technicien superieur en electronique industrielle diplomé en institut supérieure gestion industriel",
    imgSrc:'/amine.jpg',
    Profession:"technicien superieur",
    
  },
  booleanShows: true,
  count: 0,
   } 

   handelShow = () => {
    this.setState({ booleanShows:!this.state.booleanShows })}
  increment = () => {
  this.setState({ count: this.state.count + 1 });
    };
  componentDidMount(){
  console.log("componentDidMount")
  setInterval(this.increment, 1000);
  
    }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.handelShow}>{this.state.booleanShows?"Hide":"Show"} </button>{
        this.state.booleanShows &&(<div className='profile-card '>
      <h1 className='name'>{this.state.Person.fullName}</h1>
      <h2 className='txt'>{this.state.Person.Bio}</h2>
      <img className='image' src={this.state.Person.imgSrc} alt="" />
      <h4 className='proffesion'>{this.state.Person.Profession}</h4>
      <h1>Time:{this.state.count}</h1>
      </div>)}
      </div>
    )
  }

}

