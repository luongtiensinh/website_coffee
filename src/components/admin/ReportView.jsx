import React from 'react';

export default function ReportView() {
  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="report-container">
      <div className="report-card">
        <h2>Tổng kết cuối ngày</h2>
        <div className="report-time">Thời gian : {time} , Ngày {date}</div>

        <div className="report-table-wrap">
          <table className="report-table">
            <thead>
              <tr>
                <th>Tổng kết</th>
                <th>Số tiền</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Số đơn</td><td className="right">1</td></tr>
              <tr><td>Chiết khấu</td><td className="right">0</td></tr>
              <tr><td>Tổng doanh thu</td><td className="right">60000</td></tr>
              <tr><td>Phương thức thanh toán</td><td></td></tr>
              <tr><td>Tiền mặt</td><td className="right">0</td></tr>
              <tr><td>chuyển khoản</td><td className="right">60000</td></tr>
              <tr className="spacer"><td></td><td></td></tr>
              <tr className="total"><td>Thực Thu</td><td className="right">60000</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
