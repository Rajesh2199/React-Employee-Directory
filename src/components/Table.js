import React, {Component } from 'react';
import Api from '../utils/API'
import TableRow from '../components/TableRow'
import 'bootstrap/dist/css/bootstrap.min.css';



class Table extends Component {
    data (){
     return Api.fetchUsers()
    }

        constructor(props){
        super(props)
        this.state = {
          items:[],
          
        }
           
      }
      // Enable user-search functionality in the table. 
         handleSearch = event => {
        const filters = event.target.value;
        const filteredList = this.state.items.filter(item => {
          let values = Object.values(item).join("").toLowerCase();
          return values.indexOf(filters.toLowerCase()) !== -1;
       
        });
        
        this.setState({ items: filteredList });
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
        // Custome table to add the user details.
        return (
            
            <div>
                <div className="container">
                    <input className="form-control mb-4" onChange = {this.handleSearch} id="tableSearch" type="text" placeholder="Type something to search list items" ></input>
                                         

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
                            {this.state.items.map((items) =>
                             { return (
                                <TableRow firstname={items.loginFirst} lastname = {items.loginLast} email = {items.email} picture = {items.image}/>)

                             })
                             }
                            
                    </tbody>
                    </table>
                </div>
            </div> 
        )
    }
}


export default Table;