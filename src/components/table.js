import React, {Component} from 'react';
import User from './user'

class Table extends Component {

  renderUsers() {
    return (
      this.props.users.map(user => {
        return (
          <User
            user={user}
            key={user.id}
            onDelete={this.props.onDelete.bind(this, user.id)}
          />
        )
      })
    )
  }

  render() {
    return (
      <table>
        <thead>
          <tr>
            <td>First Name</td>
            <td>Last Name</td>
            <td>DOB</td>
            <td>Location</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {this.renderUsers()}
        </tbody>
      </table>
    );
  }

}

export default Table;
