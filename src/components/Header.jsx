import React from "react";
import "../styles/Header.css";
const Header = ({ searchMenu, setSearchMenu, onExit, onCloudClick }) => {
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
        <button>⏻ </button>
      </div>
    </div>
  );
};

export default Header;
