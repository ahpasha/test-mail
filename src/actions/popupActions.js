export function openPopup(data) {
  return {
    type: 'OPEN_POPUP',
    payload: data
  }
}

export function closePopup() {
  return {
    type: 'CLOSE_POPUP'
  }
}