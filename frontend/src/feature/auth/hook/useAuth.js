import { useContext, useState,useEffect } from "react";
import { AuthContex } from "../auth.contex.jsx";
import { login, register,getMe,logOut } from "../services/auth.api.js";

export const UseAuth = () => {
  const contex = useContext(AuthContex);
  const { user, setUser, loading, setLoading } = contex;

  const handleLogin = async (userId, password) => {
    setLoading(true);
    const response = await login(userId, password);
    setUser(response.data);
    setLoading(false);
  };
  const handleRegister = async (username, email, password) => {
    setLoading(true);
    const response = await register(username, email, password);
    setUser(response.user);
    setLoading(false);
  };
  async function handleGetMe() {
        setLoading(true)
        const data = await getMe()
        console.log(data)
        setUser(data.data)
        setLoading(false)
    }

    async function handleLogout() {
        setLoading(true)
        const data = await logOut()
        setUser(null)
        setLoading(false)
    }

  useEffect(() => {
    handleGetMe();
  }, []);

  return {
    user,
    loading,
    handleLogin,
    handleRegister,

  };
};
