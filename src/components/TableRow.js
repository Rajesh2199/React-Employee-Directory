import React from 'react';




function TableRow(props) {
    return (
    <tr>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.email}</td>
    </tr>
    
    )
}





export default TableRow;