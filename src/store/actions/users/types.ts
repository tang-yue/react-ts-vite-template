import { UserInfoType } from '../../types'

export interface SetUserInfoAction {
    type: string,
    data: UserInfoType
}

export type SetUserInfoFun = (data: UserInfoType) => SetUserInfoAction
