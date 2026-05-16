import React from "react";
import { UseAuth } from "../hook/useAuth";
import { Navigate } from "react-router";

const Protected = ({ children }) => {
  const { loading, user } = UseAuth();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!user) {
    return <Navigate to="/login"/>;
  }

  return children;
};

export default Protected;