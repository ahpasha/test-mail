export function removeTransaction(id) {
  return {
    type: 'REMOVE_TRANSACTION',
    payload: id
  }
}

export function editTransaction(data) {
  return {
    type: 'EDIT_TRANSACTION',
    payload: data
  }
}

export function addTransaction(data) {
  return {
    type: 'ADD_TRANSACTION',
    payload: data
  }
}

export function clearTransactions() {
  return {
    type: 'CLEAR_TRANSACTION'
  }
}