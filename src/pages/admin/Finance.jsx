import React from 'react';

export default function Finance() {
  return (
    <div className="finance-root">
      <aside className="finance-sidebar">
        <h4>Lọc theo tài khoản</h4>
        <div className="filter-list">
          <button className="filter-btn">Tiền mặt</button>
          <button className="filter-btn">Chuyển khoản</button>
          <button className="filter-btn">Tất cả</button>
        </div>
      </aside>

      <section className="finance-content">
        <div className="summary-row">
          <div className="summary-card">Tổng doanh thu</div>
          <div className="summary-card">Tổng chi</div>
          <div className="summary-card">Chi phí</div>
        </div>

        <div className="finance-body">
          {/* Placeholder area for lists/charts/table */}
        </div>
      </section>
    </div>
  );
}
