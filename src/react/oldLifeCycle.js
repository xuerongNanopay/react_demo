import React from 'react';
import ReactDOM from 'react-dom/client';

export default class OldLifeCycle extends React.Component {


  state = {
    count: 0
  }

  // death = () => {
  //   //ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  // }

  //Start
  constructor(props) {
    console.log("constructor");
    super(props)
  }
  // do render
  componentDidMount() {
    console.log("componentDidMount")
  }
  //end


  //start
  shouldComponentUpdate(a, b, c) {
    console.log("shouldComponentUpdate", a, b, c);
    return true;
  }
  // do render
  componentDidUpdate() {
    console.log("componentDidUpdate")
  }
  //end


  // Not use in React 18
  // getDerivedStateFromProps() {
  //   console.log("getDerivedStateFromProps");
  // }

  add = () => {
    const { count } = this.state
    this.setState({count: count+1})
  }

  render() {
    console.log("render")
    const { count } = this.state
    return (
      <>
        <div>
          <h2>Sum: {count}</h2>
          <button onClick={this.add}>+1</button>
        </div>
      </>
    )
  }

  // render() {
  //   console.log('aa')
  //   return (
  //     <>
  //       <div>
  //         <h2 style={{opacity: this.state.opacity}}>React Life cycle</h2>
  //         <button onClick={this.death}>Click</button>
  //       </div>
  //     </>
  //   )
  // }
}