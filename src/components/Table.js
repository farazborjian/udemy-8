import React from 'react';

const Table = ({tableData}) => {
    


    return (
    <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Zip Code</th>
          </tr>
          </thead>
          <tbody>
        {tableData.map((user, id) => <tr key={id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.zipcode}</td>
            </tr>)}
        </tbody>
    </table>
    )
}

export default Table;