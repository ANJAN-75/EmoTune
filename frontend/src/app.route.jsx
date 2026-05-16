import {createBrowserRouter} from "react-router"
import FaceExpression from "./feature/expression/Facialexpression"
import Login from "./feature/auth/pages/Login"
import Register from "./feature/auth/pages/Register"
import Protected from "./feature/auth/components/protected"

export const router=createBrowserRouter([
    {
        path:"/",
        element:<Protected><h1 style={{color:"white"}}>Home</h1></Protected>
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

