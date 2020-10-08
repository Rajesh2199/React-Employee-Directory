import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Welcome extends Component {
    render (){
        return (
            
            <div>
                <div className = "jumbotron bg-info text-white"> Welcome to the User Directory.</div>
                     <h1 className ="lead">Here is the list of the current employees.</h1>
               
            </div>
        )
    }
}


export default Welcome;