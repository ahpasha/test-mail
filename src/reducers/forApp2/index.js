const initialState = {
  count: 1,
  name: 'Daniel'
}
export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_COUNT':
      return {...state, ...action.payload};

    case 'SET_NAME':
      return {...state, ...action.payload};

    default:
      return state
  }
}