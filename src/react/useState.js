import React, { useState } from 'react';

const UseState = () => {

  const [ user, setUser ] = useState({
    name: 'xrw',
    age: 25,
    hobbies: ['soccer']
  })

  const addHobby = () => {
    setUser(pre => {
      // do not work because of same reference
      // pre.hobbies.push('baskball')
      // return pre;
      pre.hobbies.push('baskball')
      return {...pre, hobbies: pre.hobbies}
    })
  }

  return (
    <>
      <p>{user.name} -- {user.age} -- {user.hobbies.map(h => <span key={h}>{h}</span>)}</p>
      <button onClick={addHobby}>add hobby</button>
    </>
  )
}

export default UseState;