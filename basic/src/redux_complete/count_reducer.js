const INITIAL_VALUE = 0
const countReducer = (preState = INITIAL_VALUE, action) => {
  const { type, data } = action;
  switch( type ) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}

export default countReducer;