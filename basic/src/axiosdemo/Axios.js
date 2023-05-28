import React from 'react';
import axios from 'axios'

const Axios = () => {
  const loadTransaction = () => {
    console.log("loadTransaction");
    axios.get('http://localhost:3000/api1/transaction').then(
      response => {
        console.log('success: ', response.data);
      },
      error => {
        console.log('error: ', error);
      }
    )
  }
  return (
    <div>
      <button onClick={loadTransaction}>Click Me For AXIOS call</button>
    </div>
  )
}

export default Axios;