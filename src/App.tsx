import React from 'react'
import { Suspense, useState } from 'react'
import { DotLoading } from 'antd-mobile'
import {
  RouterProvider,
  Route
} from 'react-router-dom'
import routes from './routes/index'
import './App.scss'

function App () {
  /* Suspense 是为了报错error的时候捕捉不到错误
     例如直接访问/index的时候
  */
  return (<Suspense fallback={ <DotLoading /> }>
    <RouterProvider router={routes}></RouterProvider>
  </Suspense>)
}

export default App
