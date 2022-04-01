import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContextProvider";

const PrivateRoute = ({ path, children }) => {
  const { login } = useContext(AuthContext);
  return login ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
