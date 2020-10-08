import React, {Component } from 'react';
import './App.css';
import Welcome from '../src/components/index';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

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
         <Welcome/>
          {items.map(items => (
        <img src ={items.picture.medium} alt = "Name"/>
        //<h3>{items.name.first}</h3>
      ))}
      
      
        
       </div>
        
        
    )
  }
}
}


export default App;
