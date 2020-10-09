import React from 'react';
import './App.css';
import Welcome from '../src/components/index';
import Search from '../src/components/Search';
import Table from '../src/components/Table'
import Api from './utils/API'
import 'bootstrap/dist/css/bootstrap.min.css';


function App()  {

    return (
       <div>
         <Welcome/>
         <Table/>
        
      </div>
    );
}



export default App;
