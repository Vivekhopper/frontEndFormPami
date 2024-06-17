import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Forgot from "./components/Forgot";
import ResetPassword from "./components/ResetPassword";
import Dashboard from "./components/Dashboard";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/resetPassword/:token" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />

        </Routes>
    </BrowserRouter>
  );
}
export default App;
