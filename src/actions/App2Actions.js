export function setCount(count) {
  return {
    type: 'SET_COUNT',
    payload: {
      count: count
    }
  }
}

export function setName(name) {
  return ((dispatch) => {
    dispatch({
      type: 'SET_NAME',
      payload: {
        name: 'loading'
      }
    });

    setTimeout(()=> {
      dispatch({
        type: 'SET_NAME',
        payload: {
          name: name
        }
      });
    }, 3000)
  })

}