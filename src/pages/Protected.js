import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../Auth";

const Protected = ({ children }) => {
  const { isLogin } = useAuth();
  const location = useLocation();
  console.log("Protected :: ")  
  if (!isLogin) {
    return <Navigate to="../" state={{ path: location.pathname }}></Navigate>
  }
  return children;

};

export default Protected;
