import React, {Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


class Api extends Component {

      constructor(props){
        super(props)
        this.state = {
          items:[],
          loading:false
        }

      }



componentDidMount() {
  fetch('https://randomuser.me/api/?results=5')
  .then((response)=> response.json())
  .then((response)=> {
    this.setState({
      items:response.results,
      loading:true
    })
  })
  }


  render(){
    
    var {items, loading} = this.state
    if(!loading){
      return (
        
        <div>Users are loading..........</div>
      )
    }

    else {
    return (
       <div className = "App">
          {items.map(items => (
        <img src ={items.picture.medium} alt = "Name" />
      ))}
       </div> 
    )};
  }
}



export default Api;

