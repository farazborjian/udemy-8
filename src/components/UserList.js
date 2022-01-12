import React from 'react';

const UserList = props => {
    


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
        {props.users.map((user, id) => <tr key={id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.zipcode}</td>
            </tr>)}
        </tbody>
    </table>
    )
}

export default UserList;