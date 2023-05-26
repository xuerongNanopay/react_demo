import React from 'react';

export default class LifeCycle extends React.Component {

  constructor(props) {
    super(props);
    console.log('constructor');

    this.state = {
      name: 'XRW',
      count: 1
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  getSnapshotBeforeUpdate(a, b) {
    console.log("getSnapshotBeforeUpdate: ", a, b);
    return "VVVV";
  }

  componentDidUpdate(a, b, c) {
    console.log('componentDidUpdate: ', a, b, c);
  }

  // This function will hard code state
  // Don't use it.
  // Using when the state is always equals to props
  static getDerivedStateFromProps(props) {
    console.log('getDrivedStateFromProps', props);
    return null;
  }

  addOne = () => {
    const { count } = this.state;
    this.setState({count: count+1})
  }

  render() {
    const { name, count } = this.state;
    return (
      <>
        <p>New Life Cycle</p>
        <p>Count: {count}</p>
        <button onClick={this.addOne}>Add one</button>
      </>
    )
  }


}