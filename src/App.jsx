import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Demo from "./pages/Demo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang mặc định chuyển về login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} /> {/*  trang home */}
        <Route path="/demo" element={<Demo />} /> {/*  trang demo */}
      </Routes>
    </Router>
  );
}

export default App;
