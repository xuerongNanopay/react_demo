//import { Provider, useSelector, useDispatch } from 'react-redux'
import store from './store'
import { useState } from 'react'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from './count_action'

const ReduxComplete = () => {
  const [ count, setCount ] = useState(store.getState());
  const [ value, setValue ] = useState(1);

  store.subscribe(_ => {
    setCount(store.getState())
  })

  const pickValue = (e) => {
    setValue(Number.parseInt(e.target.value))  
  }

  const increment = _ => {
    store.dispatch(createIncrementAction(value))
  }
  const decrement = _ => {
    store.dispatch(createDecrementAction(value))
  }
  const incrementIfOdd = _ => {
    if ( count % 2 !== 0 ) {
      store.dispatch(createIncrementAction(value))
    }
  }
  const incrementAsync = _ => {
    store.dispatch(createIncrementAsyncAction(value), 500)
  }

  return (
    <div>
      <p className="me-3">This is Redux: State control</p>
      <div className="container justify-content-center">
        <p className="row"> Current count: {count} </p>
        <p className="row"> Choose value: {value}</p>
        <select onChange={pickValue} className="form-select w-25 row mb-1" aria-label="Default select example">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div className="row">
        <button type="button" onClick={increment} className="btn btn-primary col me-2">+</button>
        <button type="button" onClick={decrement} className="btn btn-primary col me-2">-</button>
        <button type="button" onClick={incrementIfOdd} className="btn btn-primary col me-2">add in even</button>
        <button type="button" onClick={incrementAsync} className="btn btn-primary col me-2">asyc add</button>
        </div>
      </div>
    </div>
  )
}

export default ReduxAdvance