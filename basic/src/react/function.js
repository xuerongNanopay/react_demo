import React from 'react';

export default class Function extends React.Component {

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

  saveFormData = (dataType) => {
    return (event) => {
      this.setState({[dataType]: event.target.value})
    }
  }

  render() {
    return (
      <>
        <p>controlled Component</p>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <span>username: </span>
          <input onChange={this.saveFormData('username')} type='text' name='username' placeholder='your name'/>
          <span>  password: </span>
          <input onChange={this.saveFormData('password')} type='password' name='password' placeholder='your password'/>
          <button>Sign In</button>
        </form>

      </>
    )
  }
}