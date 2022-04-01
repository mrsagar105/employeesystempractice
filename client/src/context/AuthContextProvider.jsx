import React, { createContext, useState } from "react";

export const AuthContext = createContext({
  handleLogin: () => {},
  handleLogout: () => {},
  token: "",
  email: "",
  id: "",
  login: Boolean,
});

const AuthContextProvider = ({ children }) => {
  const nobleUser = JSON.parse(localStorage.getItem("nobelUser"));
  const [login, setLogin] = useState(nobleUser);

  const [token, setToken] = useState(nobleUser?.token || "");
  const [email, setEmail] = useState(nobleUser?.email || "");
  const [id, setID] = useState(nobleUser?.id || "");

  const handleLogin = (token, email, id) => {
    setLogin(true);
    setToken(token);
    setEmail(email);
    setID(id);

    const nobleUser = { token, email, id };
    localStorage.setItem("nobleUser", JSON.stringify(nobleUser));
  };

  const handleLogout = () => {
    setLogin(false);
    setToken("");
    setEmail("");
    setID("");
    localStorage.removeItem("nobleUser");
  };

  const value = {
    handleLogin,
    handleLogout,
    token,
    login,
    email,
    id,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
