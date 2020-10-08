import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
    render (){
        return (
            
            <div>
                <h1 className = "jumbotron bg-info text-white" style = {{textAlign : "center"}}> Welcome to the User Directory.</h1>
                <h2 style = {{textAlign : "center"}} >Here is the list of the current employees.</h2>
               
            </div>
        )
    }
}


export default Welcome;