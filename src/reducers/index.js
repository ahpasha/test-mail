import { combineReducers } from 'redux'
import page from './page'
import user from './user'
import app2 from './forApp2';
export default combineReducers({
  page,
  user,
  app2
})