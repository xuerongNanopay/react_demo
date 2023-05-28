import React, { useState, useEffect, userMemo } from 'react';

const UseEffect = () => {
  const [ number, setNumber ] = useState(0);

  useEffect(() => {
    console.count("userEffect runs!")
    document.title = `You clicked ${number} times`

    console.count("component rendered!");
  }, [{aa: 1}])
  // useEffect(() => {
  //   console.count("userEffect runs!")
  //   document.title = `You clicked ${number} times`

  //   console.count("component rendered!");
  // }, [1])
  return(
    <div>
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber(pre => pre + 1)}>Increase</button>
    </div>
  )
}

export default UseEffect;