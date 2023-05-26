import React from 'react';

export default class Event extends React.Component {

  myRef = React.createRef()
  myRef2= React.createRef()

  state = {isHot: true}

  showData = () => {
    console.log(this.myRef.current.value)
  }

  showData2 = (event) => {
    alert(event.target.value);

  }



  render() {
    const { isHot } = this.state;
    return (
      <div>
        <input ref={this.myRef} type="text" placeholder='click and show'/>
        <button onClick={this.showData}>Click Me</button>&nbsp;
        {/* <input ref={this.myRef2} onBlur={this.showData2} type="text" placeholder='lose focus'/> */}
        <input onBlur={this.showData2} type="text" placeholder='lose focus'/>
      </div>
    )
  }
}