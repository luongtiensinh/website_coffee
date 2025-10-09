import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css"; // import file css

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // hook để điều hướng

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Đăng nhập:", { username, password });

    // Kiểm tra tài khoản từ localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser && storedUser.username === username && storedUser.password === password) {
      // navigate("/demo"); // điều hướng sang trang demo
      navigate("/Home")
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Đăng nhập:", { username, password });
  //   // TODO: gọi API backend để xác thực
  // };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-title">Đăng nhập</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-button">Đăng nhập</button>
        </form>
        <p className="login-footer">
          Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
