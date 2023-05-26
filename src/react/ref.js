import React from 'react';

export default class Demo extends React.Component {
  
  myRef = React.createRef()

  state = {isHot: true}

  showData = () => {
    //console.log(this.refs.input)
    //console.log(this.input1)
    console.log(this.myRef.current.value)
  }

  changeWeather = () => {
    const { isHot } = this.state
    this.setState({isHot: !isHot})
  }

  saveInput = element => {
    this.input1 = element;
  }


  render() {
    const { isHot } = this.state;
    return (
      <div>
        <h2>Weather: {isHot ? "Hot" : "Cold"}</h2>
        {/* <input ref={(a) => {this.input1 = a; console.log('@')}} type="text" placeholder='click and show'/> */}
        {/* <input ref={this.saveInput} type="text" placeholder='click and show'/> */}
        <input ref={this.myRef} type="text" placeholder='click and show'/>
        <button onClick={this.showData}>Click Me</button>&nbsp;
        <button onClick={this.changeWeather}>Change Weather</button>&nbsp;
        <input ref={(a) => this.input2 = a} onBlur={this.showData2} type="text" placeholder='lose focus'/>
      </div>
    )
  }
}