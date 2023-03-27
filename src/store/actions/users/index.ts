import { SET_USER_INFO } from './actionType'
import { SetUserInfoFun } from './types'

export const setUserInfo: SetUserInfoFun = (data) => ({ type: SET_USER_INFO, data })
