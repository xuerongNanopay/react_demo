import React from 'react';

export default class Controlled extends React.Component {

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);

    console.log(this.password.value);
    console.log(this.username.value);

  }

  render() {
    return (
      <>
        <p>UnControlled Component</p>
        <br/>
        <form action="http://www.google.com" onSubmit={this.handleSubmit}>
          <span>username: </span>
          <input ref={c => this.username = c} type='text' name='username' placeholder='your name'/>
          <span>  password: </span>
          <input ref={c => this.password = c} type='password' name='password' placeholder='your password'/>
          <button>Sign In</button>
        </form>

      </>
    )
  }
}