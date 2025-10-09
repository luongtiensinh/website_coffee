import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      // Đọc file để lưu vào localStorage
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem("userFile", reader.result); // Lưu file (CSV/ảnh) dưới dạng base64
      };

      if (uploadedFile.type.includes("image")) {
        reader.readAsDataURL(uploadedFile); // nếu là ảnh -> base64
      } else {
        reader.readAsText(uploadedFile); // nếu là csv/txt -> text
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      fileName: file ? file.name : null,
      registerTime: new Date().toLocaleString(),//lưu thoi gian dăng kí 
    };

    // Lưu thông tin đăng ký vào localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    console.log("Đăng ký:", userData);
    alert("Đăng ký thành công!");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Đăng ký</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="register-input"
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="register-input"
            required
          />
          <button type="submit" className="register-button">Đăng ký</button>
        </form>
        <p className="register-footer">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
