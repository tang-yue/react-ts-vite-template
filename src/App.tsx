import { useState } from 'react'
import { useRoutes } from "react-router-dom"
import {
  createHashRouter,
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom'
import routes from './routes/index'

// import routes from './routes'
import './App.scss'

function App() {
  // const [route, setRoute] = useState(routes)
  // const element = useRoutes(route)

  return (<div className="App">
    <RouterProvider router={routes}></RouterProvider>
  </div>)
}

export default App
