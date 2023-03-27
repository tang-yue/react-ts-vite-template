
import { SET_USER_INFO } from '../../actions/users/actionType'
import { SetUserInfoAction } from '../../actions/users/types'
import { UserInfoType } from "../../types"

const initialState: UserInfoType = {
  id: 0
}

export function userInfo(state = initialState, action: SetUserInfoAction) {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export function SetUserInfo(state = initialState, action: SetUserInfoAction) {
  switch (action.type) {
    case '4445':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}
