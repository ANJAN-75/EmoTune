import {createBrowserRouter} from "react-router"
import FaceExpression from "./feature/expression/Facialexpression"
import Login from "./feature/auth/pages/Login"
import Register from "./feature/auth/pages/Register"

export const router=createBrowserRouter([
    {
        path:"/",
        element:<h1>Home</h1>,
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Register/>
    }
])

