import { lazy } from 'react'
import {
  createHashRouter,
  createBrowserRouter,
  Navigate
} from 'react-router-dom'
// import Home from '../views/Home/index'
const Home = lazy(() => import('../views/Home/index'))

// 包裹了一层 lazy 函数
const lazyLoad = (moduleName: string) => {
  const Module = lazy(() => import(/* @vite-ignore */ `../views/${moduleName}/index.tsx`))
  return <Module />
}
const routes = createHashRouter([
  {
    path: '/',
    element: <Navigate replace to="/index" />
  },
  {
    path: '/index',
    element: <Home />
  },
])

export default routes