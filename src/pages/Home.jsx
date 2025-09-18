
import React, { useState } from "react";
import Header from "../components/Header";
import Bill from "../components/Bill";
import ActionsPanel from "../components/ActionsPanel";
import TablesGrid from "../components/TablesGrid";
import Tabs from "../components/Tabs";
import '../styles/Home.css';


function generateTables(total) {
  return Array.from({ length: total }, (_, i) => `B.${i + 1}`);
}

const Home = () => {
  const [activeTab, setActiveTab] = useState("MANG VỀ");
  const [selectedTable, setSelectedTable] = useState("MANG VỀ");
  const [searchMenu, setSearchMenu] = useState("");
  const tables = generateTables(30);

  const handleExit = () => alert("Bạn muốn thoát?");
  const handleCloudClick = () => alert("Cloud clicked!");

  return (
    <div className="home-container">
      <Header 
        searchMenu={searchMenu} 
        setSearchMenu={setSearchMenu}
        onExit={handleExit}
        onCloudClick={handleCloudClick}
      />

      <div className="main-content">
        {/* Left Side */}
        <div className="left-side">
          <Bill />
          <ActionsPanel />
        </div>

        {/* Right Side */}
        <div className="right-side">
          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="info-tip">
            <input type="checkbox" defaultChecked /> 
            Bấm 2 lần vào bàn <b>để mở nhanh thực đơn!</b>
          </div>
          {activeTab === "MANG VỀ" ? (
            <button className="table-btn active-table">MANG VỀ</button>
          ) : (
            <TablesGrid
              tables={tables}
              selectedTable={selectedTable}
              setSelectedTable={setSelectedTable}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
