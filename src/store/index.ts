import { combineReducers, legacy_createStore as createStore } from 'redux'
import { userInfo, SetUserInfo } from './reducers/users'

const rootReducer = combineReducers({
  userInfo,
  SetUserInfo
})

export default createStore(rootReducer)
