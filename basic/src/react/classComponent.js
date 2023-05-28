import React from "react";
import PropTypes from 'prop-types';

class User extends React.Component {

  // constructor(props) {
  //   //super(props);
  //   this.state = {
  //     name: 'aa',
  //     isHot: false
  //   }
  //   // this.email = email;
  //   // this.username = username;
  // }
  state = {
    name: 'aa',
    isHot: false
  }
  static propTypes = {
    email: PropTypes.string,
    name: PropTypes.string
  }

  static defaultProps = {
    name: 'default'
  }


  changeWeather = () => {
    const { isHot } = this.state;
    this.setState({isHot: !isHot});
  }

  render() {
    console.log(this);
    const { isHot, name } = this.state;

    return (
      <>
        <p>{isHot ? "Hot" : "Cold"}</p>
        <button onClick={this.changeWeather}>Weather</button>
        <p>{name}</p>
        <p>{this.props.name}</p>
        <p>{this.props.email}</p>
      </>
    )
  }
}
export default User;