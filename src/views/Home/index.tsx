import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { UserInfoType } from '@/store/types'
import { setUserInfo } from '@/store/actions/users/index'
import { StateType } from '@/store/types'
import Main from './Main'

const mapStateToProps = (state: StateType) => ({
  userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setUserInfo: (userInfo: UserInfoType) => dispatch(setUserInfo(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
