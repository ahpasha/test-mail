import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import app2 from './forApp2';
import popup from './popup';
import transitions from './hisoryList'
export default combineReducers({
  page,
  user,
  app2,
  popup,
  transitions
})