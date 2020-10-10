import React from 'react';




function TableRow(props) {
    return (
    <tr>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.email}</td>
        <td>
        <img src = {props.picture} alt ="pic" ></img>
        </td>
         </tr>
    
    )
}





export default TableRow;