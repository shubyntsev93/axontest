import React, { Component } from 'react';

class Form extends Component {
    constructor (props) {
        super(props);
        this.state = {
            form: this.props.formState
        };
    }

    handleChange(event) {
        const target = event.target;
        const targetName = target.name;
        let stateCopy = Object.assign({}, this.state.form);
        stateCopy[targetName] = target.value;
        this.setState({
            form: stateCopy
        });
    }

    addUser() {
        this.props.onAdd.call(this, this.state.form);
        this.setState({
            form : {
              first_name: "",
              last_name: "",
              dob: "",
              location: ""
            }
        })
    }

    toggleBtn() {
        for (let key in this.state.form) {
            if(this.state.form[key].length === 0) {
                return true;
            }
        }
        return false;
    }

    render() {
        const disabled = this.toggleBtn();
        return(
            <form id="form">
                <p>First name: <input name="first_name" onChange={this.handleChange.bind(this)}/></p>
                <p>Last name: <input name="last_name" onChange={this.handleChange.bind(this)}/></p>
                <p>Date of birth: <input name="dob" type="date" onChange={this.handleChange.bind(this)}/></p>
                <p>Location: <input name="location" onChange={this.handleChange.bind(this)}/></p>
                <p><button id="button" type='button' onClick={this.addUser.bind(this)} disabled={disabled}>Add user</button></p>
            </form>
        )
    }

}

export default Form;