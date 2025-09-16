import React, { useState } from 'react';
import './Home.css';

const tables = Array.from({ length: 30 }, (_, i) => `B.${i + 1}`);

const Home = () => {
  const [activeTab, setActiveTab] = useState('MANG VỀ');
  const [selectedTable, setSelectedTable] = useState('MANG VỀ');
  const [searchMenu, setSearchMenu] = useState('');
  
  return (
    <div className="home-container">
      
      {/* Header Search and Actions */}
      <div className="header">
        <div className="search-menu">
          <input 
            type="text" 
            placeholder="Tìm thực đơn - F1"
            value={searchMenu}
            onChange={(e) => setSearchMenu(e.target.value)}
          />
          <button className="keyboard-btn" title="Bàn phím">⌨️</button>
        </div>
        <button className="btn-mang-ve">MANG VỀ</button>
        <div className="buttons-abc">
          {['A', 'B', 'C', 'D'].map(letter => (
            <button key={letter} className={`btn-letter`}>{letter}</button>
          ))}
          <button className="btn-edit">✏️</button>
        </div>
        <div className="header-icons">
          <button title="Thoát">❌</button>
          <button title="Màn hình">🖥️</button>
          <button title="Cloud">☁️<span className="notification">0</span></button>
          <button title="Danh sách">📋</button>
          <button title="Tắt">⏻</button>
        </div>
      </div>

      <div className="main-content">

        {/* Left Side Menu & Bill */}
        <div className="left-side">
          <div className="channel-select">
            <select defaultValue="">
              <option value="">Kênh bán hàng</option>
            </select>
            <button className="icon-user">👤</button>
          </div>
          <div className="bill-header">
            <div>#</div>
            <div>TÊN HÀNG HÓA</div>
            <div>ĐVT</div>
            <div>SL</div>
            <div>ĐƠN GIÁ</div>
            <div>THÀNH TIỀN</div>
          </div>
          <div className="bill-empty">
            <div>Chưa có mặt hàng nào trong danh sách.</div>
            <small>Sau khi [F1] tìm thực đơn và [Enter] để chọn, bạn có thể đi chuyển nhanh xuống vị trí nhập số lượng bằng cách [Enter] thêm một lần nữa.</small>
            <img src="https://pos365.vn/images/logo-pos365-home.png" alt="POS365 Logo" className="pos-logo" />
          </div>
          
          <div className="bottom-panel">
            <select>
              <option>Giá niêm yết</option>
            </select>
            <button className="btn-note">✏️ Ghi chú</button>
            <button className="btn-book-table">📅 Đặt bàn</button>
            <div className="datetime">16/09/2025 22:32</div>
          </div>

          <div className="customer-search">
            <input type="text" placeholder="🔍 Tìm khách hàng" />
            <button className="btn-add">+</button>
          </div>

          <div className="summary">
            <div className="total">Tổng cộng<br /><span className="number">0</span></div>
            <div className="discount">
              Chiết khấu, VAT...<br />
              <input type="checkbox" checked readOnly /> 👍
            </div>
          </div>

          <div className="actions">
            <button className="btn-blue">🔄 Chuyển bàn</button>
            <button className="btn-blue">✂️ Tách bàn</button>
            <button className="btn-blue">🖨️ Báo chế biến [F9]</button>
            <button className="btn-yellow">🧮 Tạm tính [F3]</button>
            <button className="btn-red">💳 Thanh toán [F4]</button>
          </div>
        </div>

        {/* Right Side: Tables and Menu */}
        <div className="right-side">

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

          <div className="info-tip">
            <input type="checkbox" defaultChecked /> Bấm 2 lần vào bàn <b>để mở nhanh thực đơn!</b>
          </div>

          <div className="tables">
            {activeTab === 'MANG VỀ' 
              ? <button className={`table-btn active-table`}>MANG VỀ</button>
              : tables.map(table => (
                <button 
                  key={table} 
                  className={`table-btn ${selectedTable === table ? 'active-table' : ''}`}
                  onClick={() => setSelectedTable(table)}
                >
                  {table}
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
    