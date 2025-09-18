import React from "react";
import "../styles/Tabs.css"; 

const Tabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="tabs">
      <button 
        className={`tab ${activeTab === 'MANG VỀ' ? 'active' : ''}`}
        onClick={() => setActiveTab('MANG VỀ')}
      >
        ⚙️ PHÒNG / BÀN [0/30]<br /><b>MANG VỀ</b>
      </button>
      <button 
        className={`tab ${activeTab === 'THỰC ĐƠN' ? 'active' : ''}`}
        onClick={() => setActiveTab('THỰC ĐƠN')}
      >
        🍴 THỰC ĐƠN<br />Tất cả
      </button>
    </div>
  );
};

export default Tabs;
