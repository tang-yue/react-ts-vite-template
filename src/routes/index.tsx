import { lazy } from 'react'
import { createHashRouter, createBrowserRouter } from 'react-router-dom'
// import Home from '../views/Home/index'
const Home = lazy(() => import('../views/Home/index'))
const lazyLoad = (moduleName: string) => {
  /* @vite-ignore */
  const Module = lazy(() => import(/* @vite-ignore */ `../views/${moduleName}/index.tsx`))
  return <Module />
}
const routes = createBrowserRouter([
  {
    // 听写任务
    path: '/index',
    element: <Home />
  },
])

export default routes