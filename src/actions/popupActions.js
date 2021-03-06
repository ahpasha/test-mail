import {OPEN_POPUP, CLOSE_POPUP, VALIDATE_POPUP} from '../constants/popup'
export function openPopup(data) {
  return {
    type: OPEN_POPUP,
    payload: data
  }
}

export function closePopup() {
  return {
    type: CLOSE_POPUP
  }
}

export function validatePopup(isValid) {
  return {
    type: VALIDATE_POPUP,
    payload: isValid
  }
}