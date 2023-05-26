import React from 'react';
import css from './TodoList.module.css'

class TodoList extends React.Component {

  state = {
    hobbys: [
      {
        value: 'text',
        isCheck: false
      },
      {
        value: 'code',
        isCheck: false
      },
      {
        value: 'sleep',
        isCheck: false
      },
    ]
  }

  checkAll = isCheckAll => {
    const { hobbys } = this.state;
    if ( isCheckAll ) {

    }
    const newHobbys = hobbys.map((h) => ( isCheckAll ? {...h, isCheck:true} : {...h, isCheck:false} ))
    this.setState({hobbys: newHobbys});
  }

  receiveInput = (value) => {
    const { hobbys } = this.state;
    hobbys.push({value: value, isCheck: false})
    this.setState({hobbys: hobbys});
  }

  clearTodo = () => {
    const { hobbys } = this.state;
    const newHobbys = hobbys.filter( h => h.isCheck === false );
    this.setState({hobbys: newHobbys});
  }

  render() {
    const { hobbys } = this.state
    const hobbysList = hobbys.map((hobby, index) => {
      return {
        hobby: hobby,
        checkboxCallBack: (isCheck) => {
          let { hobbys } = this.state;
          hobbys[index].isCheck = isCheck;
          this.setState({hobbys: hobbys, count: count});
        },
        deleteCallBack: _ => {
          this.setState({hobbys: [...hobbys.splice(0, index), ...hobbys.splice(1)]});

        }
      }
    })
    const summary = hobbys.length;
    const count = hobbys.reduce((acc, cur) => (cur.isCheck ? ++acc : acc), 0);
    return (
      <div style= {{width: '400px', height: '300px', backgroundColor: 'aqua' }} id='TodoList'>
        <InputHobby handleInput={this.receiveInput}/>
        <List items={hobbysList}/>
        <Footer finish={count} total={summary} clearTodo={this.clearTodo} checkAll={this.checkAll}/>
      </div>
    )
  }
}

const InputHobby = ({handleInput}) => {
  const keyUpOnEnter = e => {
    if ( e.code === 'Enter' ) {
      handleInput(e.target.value)
    }
  }
  return (
    <div>
      <input className={css.inputHobby} onKeyUp={keyUpOnEnter} type='text' placeholder='Input your hobby'/>
    </div>
  )
}

const List = ({items}) => {
  return (
    <ul style = {{listStyleType: 'none'}}>
      {
        //Change the key
        items.map((item, index) => {
          return <li key={index}><ListItem {...item} /></li>
        })
      }
    </ul>
  )
}

const ListItem = ({hobby, checkboxCallBack, deleteCallBack}) => {
  const checkboxCallBackWrapper = e => checkboxCallBack(e.target.checked)
  return (
    <div className={css.item} style={{position: 'relative', paddingTop: '5px', paddingBottom: '5px'}}>
      <input style={{marginRight: '10px'}} type="checkbox" onChange={checkboxCallBackWrapper} checked={hobby.isCheck}/> 
      {hobby.value} 
      <button style={{position: 'absolute', right: '10px'}} onClick={deleteCallBack}> Delete </button>
    </div>
  )
}

//const
const Footer = ({finish, total, clearTodo, checkAll}) => {
  const checkAllWrapper = e => checkAll(e.target.checked);
  return (
    <div>
      <input type="checkbox" onChange={checkAllWrapper} checked={total===finish && total !== 0 ? true : false}/>
      <span>  Finish {finish} / Total {total}</span>
      <button onClick={clearTodo}>Clear Todo</button>
    </div>
  )
}

export default TodoList;

