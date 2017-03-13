import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
 
  constructor (props) {
  super(props);
  this.state = {
    email: '',
    password: ''
  }
}

handleUserInput(e) {
  const name = e.target.name;
  const value = e.target.value;
  this.setState({[name]: value});
}

  render() {
    return (
      <form className="demoForm">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" name="email" value={this.state.email} onChange={(event) => this.handleUserInput(event)} />
        </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" name="password" value={this.state.password} onChange={(event) => this.handleUserInput(event)} />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign up
          </button>
      </form>
    )
  }
}
export default Form;