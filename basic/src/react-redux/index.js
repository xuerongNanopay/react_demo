import store from './store'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { incrementByAmount } from './slice/CounterSlice'
import { addPeople  } from './slice/peopleSlice'

export default _ => {
  const count = useSelector((state) => {
    return state.counter.value
  })
  const peopleList = useSelector((state) => {
    return state.people.peopleList
  })
  const dispatch = useDispatch()

  const [name, setName] = useState("");

  return (
    <div>
      <h4>React Reduce</h4>
      <p>Count: {count}</p>
      <button className="btn btn-primary" onClick={ _ => dispatch(incrementByAmount(2))}>Add 2</button>
      {
        peopleList.map(people => (
          <p key={people.id}>{people.id} ------ {people.name}</p>
        ))
      }
      <input value={name} onChange={e => setName(e.target.value)} type='text' className='form-control' style={{width: '20%'}}/>
      <button className="btn btn-primary" onClick={ _ => dispatch(addPeople(name))}>Add People</button>
    </div>
  )
}