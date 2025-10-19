import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { userInfo, loading } = use(AuthContext);
  const location = useLocation();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (userInfo) {
    return <>{children}</>;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
};

export default PrivateRoute;
