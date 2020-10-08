import React, {Component } from 'react';
import './App.css';
import Welcome from '../src/components/index';
import Api from './utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';


function App()  {

    return (
       <div>
         <Welcome/>
         <Api/>
      </div>
    );
}



export default App;
