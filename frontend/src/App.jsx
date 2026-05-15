import React from 'react'
import { RouterProvider } from 'react-router'
import {router} from "./app.route"
// import FaceExpression from './feature/expression/Facialexpression'
// import Login from './pages/auth/login'


const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App