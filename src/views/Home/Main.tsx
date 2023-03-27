import Test from '@/components/test'
import { UserInfoType } from "@/store/types"
import { useDispatch, useSelector } from "react-redux";
import { SetUserInfoFun } from '@/store/actions/users/types'
import { Button } from 'antd-mobile'

const Home: React.FC<{ userInfo: UserInfoType, setUserInfo: SetUserInfoFun }> = (props) => {

  const { userInfo, setUserInfo } = props
   // 就可以直接使用 userInfo 和 setUserInfo
  const dispatch = useDispatch();
  const jump = () => {
    console.log('jump')
  }
  /*
    更多hooks或高级用法具体可参考下面文章
    https://juejin.cn/post/6857385078591488013
  */
  console.log(dispatch, 'dispatch')
  return (<div>Home
    <Test />
    <Button onClick={jump}>点击跳转新地址</Button>
  </div>)
}


export default Home