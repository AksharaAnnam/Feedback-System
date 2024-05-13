
import React, { createContext, useState, useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from './login.js';
import {HomePage} from './home.js';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [uname, setUname] = useState('');
  const [role, setRole] = useState('');

  const login = () => {
    setIsLoggedIn(true);
  }

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, uname, setUname, role, setRole, login, logout }}>
      {children}
      <h1>Uname</h1>{uname}
      {typeof(uname)}
      <Routes>
      <Route path="/" component={HomePage} />
      <Route path="/login" component={Login}/>
    </Routes>
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
