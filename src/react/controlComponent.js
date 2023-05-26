import React from 'react';

export default class Controlled extends React.Component {

  state = {
    username: '',
    password: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    console.log(this.password.value);
    console.log(this.username.value);

  }

  setUsername = (event) => {
    console.log('@', event.target.value);
    this.setState({username: event.target.value});
  }

  setUsername = (event) => {
    console.log('@', event.target.value);
    this.setState({username: event.target.value});
  }

  render() {
    return (
      <>
        <p>controlled Component</p>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <span>username: </span>
          <input onChange={this.setUsername} type='text' name='username' placeholder='your name'/>
          <span>  password: </span>
          <input type='password' name='password' placeholder='your password'/>
          <button>Sign In</button>
        </form>

      </>
    )
  }
}