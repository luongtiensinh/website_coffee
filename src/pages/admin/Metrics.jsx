import React from 'react';

export default function Metrics() {
  const items = [
    'Đơn hàng', 'Doanh thu', 'Tiền mặt', 'Tài khoản khác',
    'Hủy / Trả bỏ', 'Bàn sử dụng 01/30', 'Màn hình thu ngân', 'Đặt bàn'
  ];

  return (
    <section className="metrics-grid">
      {items.map((label, i) => (
        <div className="metric-card" key={i}>
          <div className="metric-icon" />
          <div className="metric-label">{label}</div>
        </div>
      ))}
    </section>
  );
}
