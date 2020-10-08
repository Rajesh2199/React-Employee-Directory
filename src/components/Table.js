import React, {Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Table extends Component {
    render (){
        return (
            
            <div>
                <div class="container">
                    <input class="form-control mb-4" id="tableSearch" type="text" placeholder="Type something to search list items"></input>
                                         

                    <table class="table table-bordered table-striped">
                              <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Email</th>
                            </tr>
                                 </thead>
                        <tbody id="myTable">
                            <tr>
                                <td>John</td>
                                <td>Doe</td>
                                <td>john@example.com</td>
                                </tr>
                            <tr>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>mary@mail.com</td>
                            </tr>
                              <tr>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>july@greatstuff.com</td>
                            </tr>
                             <tr>
                                <td>Anja</td>
                                <td>Ravendale</td>
                                <td>a_r@test.com</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        )
    }
}


export default Table;