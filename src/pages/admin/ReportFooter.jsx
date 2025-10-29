import React from 'react';

export default function ReportFooter() {
  return (
    <div className="report-footer">
      <button className="btn btn-red">Thoát</button>
      <div className="footer-controls">
        <button className="btn btn-white">Hôm nay</button>
        <button className="btn btn-white">Hôm qua</button>
        <button className="btn btn-white">7 ngày trước</button>
        <button className="btn btn-white">Lựa chọn khác</button>
      </div>
      <button className="btn btn-yellow">In</button>
    </div>
  );
}
