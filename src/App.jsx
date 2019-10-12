import React, {Component} from 'react';
import Table  from './components/table';
import Summary  from './components/summary';
import Form from './components/form';
const axios = require('axios');

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      form : {
        first_name: "",
        last_name: "",
        dob: "",
        location: ""
      }
    };
    this.getUsers();
  }

  getUsers() {
    axios.get('/users')
    .then((response) => {
      this.setState({
        users: response.data
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  deleteUser(id) {
    axios.delete(`/users/${id}`)
      .then(() => {
        let stateCopy = this.state.users.concat();
        let find = stateCopy.find(user => user.id === id);
        let index = stateCopy.indexOf(find)
        stateCopy.splice(index, 1);
        this.setState({users: stateCopy});
      })
      .catch((err) => {
        console.log(err);
      });
  }

  addUser(dataObj) {
    let {first_name, last_name, dob, location} = dataObj;
    let newUser = {
      first_name: first_name,
      last_name: last_name,
      dob: dob,
      location: location
    };
    axios.post('/users', newUser)
    .then(() => {   
      this.clearForm();
      this.getUsers();
    })
    .catch((err) => {
      console.log(err);
    });
  }

  clearForm() {
    document.getElementById("form").reset();
  }

  render() {
    const users = this.state.users;
    return (
      <div className="page-container">
        <h1>Table</h1>
        <Table
          users={users}
          onDelete={this.deleteUser.bind(this)}
        />
        <h1>Summary</h1>
        <Summary
          users={users}
        />
        <h1>Form</h1>
        <Form
          formState={this.state.form}
          onAdd={this.addUser.bind(this)}
        />
      </div>
    );
  }

}

export default App;
