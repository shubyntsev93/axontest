import React from 'react';

function User(props) {
    return (
        <tr>
            <td>{props.user.first_name}</td>
            <td>{props.user.last_name}</td>
            <td>{props.user.dob}</td>
            <td>{props.user.location}</td>
            <td><button onClick={props.onDelete}>Remove</button></td>
        </tr>
    )
}

export default User;