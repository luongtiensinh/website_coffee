import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [fileData, setFileData] = useState(""); // lưu nội dung file (base64 hoặc text)

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);

      const reader = new FileReader();
      reader.onload = () => {
        setFileData(reader.result); // lưu nội dung file tạm
      };

      if (uploadedFile.type.includes("image")) {
        reader.readAsDataURL(uploadedFile);
      } else {
        reader.readAsText(uploadedFile);
      }
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
      fileName: file ? file.name : null,
      registerTime: new Date().toISOString().slice(0, 19).replace("T", " "),
    };

    try {
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      const message = await res.text();
      alert(message);
    } catch (err) {
      console.error("Lỗi khi gửi dữ liệu:", err);
      alert("Không thể kết nối đến server.");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const newUser = {
  //     username,
  //     email,
  //     password,
  //     fileName: file ? file.name : null,
  //     registerTime: new Date().toISOString().slice(0, 19).replace("T", " "),
  //   };

  //   try {
  //     const res = await fetch("http://localhost:5000/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(newUser),
  //     });

  //     const message = await res.text();
  //     alert(message);
  //   } catch (err) {
  //     console.error("Lỗi khi gửi dữ liệu:", err);
  //     alert("Không thể kết nối đến server.");
  //   }
  // };

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
          <button type="submit" className="register-button">
            Đăng ký
          </button>
        </form>
        <p className="register-footer">
          Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
