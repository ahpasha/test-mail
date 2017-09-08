import { combineReducers } from 'redux'
import popup from './popup';
import transitions from './transactionsList'
export default combineReducers({
  popup,
  transitions
})