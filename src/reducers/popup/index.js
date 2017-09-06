const initialState = {
  isValid: false,
  isOpened: false,
  data: {
    phoneNumber: 3333333333,
    paySum: 10
  }
}

export default function popup(state = initialState, action) {
  switch (action.type) {
    case 'OPEN_POPUP':
      return { ...state, ...action.payload, ...{isOpened: true} };
    case 'CLOSE_POPUP':
      return { ...state, ...{isOpened: false, data: {phoneNumber: null, paySum: null}} };
    default:
      return state;
  } }