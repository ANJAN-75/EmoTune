import { useContext,useState } from "react";
import {AuthContex} from "../auth.contex.jsx"
import {login,register} from "../services/auth.api.js"

export const UseAuth=()=>{
    const contex=useContext(AuthContex)
    const{user,setUser,loading,setLoading}=contex

    const handleLogin=async(userId,password)=>{
        setLoading(true)
        const response=await login(userId,password)
        setUser(response.user)
        setLoading(false)

    }
    const handleRegister=async(username,email,password)=>{
      setLoading(true)
      const response=await register(username,email,password)
      setUser(response.user)
      setLoading(false)
    }
    return {
    user,
    loading,
    handleLogin,
    handleRegister
  };
}