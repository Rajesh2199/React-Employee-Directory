import React, {Component } from 'react';
import Api from '../utils/API'
import TableRow from '../components/TableRow'
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery"

// Enable user-search functionality in the table. 
$(document).ready(function(){
    $("#tableSearch").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });


  

var userData =[];

  // Custome table to add the user details.

class Table extends Component {
    data (){
     return Api.fetchUsers()
    }

        constructor(props){
        super(props)
        this.state = {
          items:[],
          loading:false
        }
           
      }
componentDidMount (){
    this.data()
    .then (
        users => {
            this.setState({
                items:users,
                 loading:true
        })
    })

}

    render (){
   

        if (this.state.items.length === 0 ){
            return null;
        }
        return (
            
            <div>
                <div className="container">
                    <input className="form-control mb-4" id="tableSearch" type="text" placeholder="Type something to search list items"></input>
                                         

                    <table className="table table-bordered table-striped">
                            <thead>
                            <tr>
                                
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                                <th>Picture</th>
                                
                            </tr>
                            </thead>
                        <tbody id="myTable">
                            <TableRow firstname={this.state.items[0].loginFirst} lastname = {this.state.items[0].loginLast} email = {this.state.items[0].email} picture = {this.state.items[0].image}/>
                          
                            <TableRow firstname = {this.state.items[1].loginFirst} lastname = {this.state.items[1].loginLast} email = {this.state.items[1].email} picture = {this.state.items[1].image}/>
                            
                            <TableRow firstname = {this.state.items[2].loginFirst} lastname = {this.state.items[2].loginLast} email = {this.state.items[2].email} picture = {this.state.items[2].image}/>
            
                            <TableRow firstname = {this.state.items[3].loginFirst} lastname = {this.state.items[3].loginLast} email = {this.state.items[3].email} picture = {this.state.items[3].image}/>

                            <TableRow firstname = {this.state.items[4].loginFirst} lastname = {this.state.items[4].loginLast} email = {this.state.items[4].email} picture = {this.state.items[4].image}/>

                            <TableRow firstname = {this.state.items[5].loginFirst} lastname = {this.state.items[5].loginLast} email = {this.state.items[5].email} picture = {this.state.items[5].image}/>

                            <TableRow firstname = {this.state.items[6].loginFirst} lastname = {this.state.items[6].loginLast} email = {this.state.items[6].email} picture = {this.state.items[6].image}/>
                            
                        </tbody>
                    </table>
                </div>
            </div> 
        )
    }
}


export default Table;