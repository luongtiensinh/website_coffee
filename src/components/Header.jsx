import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ searchMenu, setSearchMenu, onExit, onCloudClick }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  const handleSettingClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogin = () => {
    navigate("/login");
    setShowDropdown(false);
  };

  const handleRegister = () => {
    navigate("/register");
    setShowDropdown(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
    setShowDropdown(false);
  };

  const handleAdmin = () => {
    navigate("/admin");
    setShowDropdown(false);
  };

  return (
    <div className="header">
      <div className="search-menu">
        <input
          type="text"
          placeholder="Tìm thực đơn - F1"
          value={searchMenu}
          onChange={(e) => setSearchMenu(e.target.value)}
        />
        <button className="keyboard-btn">⌨️</button>
      </div>
      <button className="btn-mang-ve">MANG VỀ</button>
      <div className="buttons-abc">
        {["A", "B", "C", "D"].map(letter => (
          <button key={letter} className="btn-letter">{letter}</button>
        ))}
        <button className="btn-edit">✏️</button>
      </div>
      <div className="header-icons">
        <button onClick={onExit}>❌</button>
        <button>🖥️</button>
        <button onClick={onCloudClick}>
          ☁️<span className="notification">0</span>
        </button>
        <button>📋</button>
        <div className="setting-container">
          <button onClick={handleSettingClick}>⏻ Setting</button>
          {showDropdown && (
            <div className="dropdown-menu">
              <button onClick={handleLogin}>Đăng nhập</button>
              <button onClick={handleRegister}>Đăng ký</button>
              <button onClick={handleLogout}>Đăng xuất</button>
              <button onClick={handleAdmin}>Trang quản lý</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
