import React, {Component } from 'react';
import './App.css';
import Welcome from '../src/components/index';
import Search from '../src/components/Search'
import Api from './utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';


function App()  {

    return (
       <div>
         <Welcome/>
         <Search/>
         <Api/>
      </div>
    );
}



export default App;
