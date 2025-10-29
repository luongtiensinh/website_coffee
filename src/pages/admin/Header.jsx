import React from 'react';

export default function Header({ tab, setTab }) {
  const navs = [
    { id: 'overview', label: 'Tổng quan' },
    { id: 'goods', label: 'Hàng hóa' },
    { id: 'branch', label: 'Chi nhánh' },
    { id: 'finance', label: 'Thu chi' },
    { id: 'reports', label: 'Báo cáo' },
  ];

  return (
    <header className="admin-header">
      <div className="admin-topbar">
        <nav className="nav-buttons">
          {navs.map(n => (
            <button
              key={n.id}
              className={`nav-btn ${tab === n.id ? 'active' : ''}`}
              onClick={() => setTab(n.id)}
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="header-icons">
          <div className="circle icon"></div>
          <div className="circle icon small"></div>
        </div>
      </div>
    </header>
  );
}
