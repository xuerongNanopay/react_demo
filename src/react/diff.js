import React from 'react';

export default class Person extends React.Component {
  state = {
    persons: [
      {id: 1, name: 'mansi', age: 18},
      {id: 2, name: 'xrw', age: 19}
    ]
  }

  add = () => {
    const { persons } = this.state
    const newPersion = { id: persons.length+ 1, name: 'nsf', age: 20}
    this.setState({persons: [newPersion, ...persons]})
  }

  // Why key is important?
  // let react know how to compare
  // using primary key for the key, so that the dom will also bind in the same record
  // transaction.id
  render() {
    return (
      <>
        <div>
          <button onClick={this.add}> add a person</button>
          <ul>
            {
              this.state.persons.map((person, index) => (
                <li key={person.id}>{person.name} --- {person.age} <input type='text'/></li>
              ))
            }
          </ul>
        </div>
      </>
    )
  }
}