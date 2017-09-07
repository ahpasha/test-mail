import {OPEN_POPUP, CLOSE_POPUP, VALIDATE_POPUP} from '../../constants/popup'

const initialState = {
  isValid: false,
  isOpened: false,
  data: {
    phoneNumber: '',
    paySum: '',
    id: ''
  }
}

export default function popup(state = initialState, action) {
  switch (action.type) {
    case OPEN_POPUP:
      return { ...state, ...{data: action.payload, isOpened: true} };
    case CLOSE_POPUP:
      return { ...state, ...{isOpened: false, isValid:false, data: {id: '', phoneNumber: '', paySum: ''}} };
    case VALIDATE_POPUP:
      return { ...state, ...{isValid: action.payload} };
    default:
      return state;
  }
}