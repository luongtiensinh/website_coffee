import React from 'react';

export default function ChartArea() {
  return (
    <section className="chart-area">
      <div className="chart-header">
        <div>Doanh thu trong 7 ngày trước</div>
        <button className="small-blue">7b ngày trước</button>
      </div>
      <div className="chart-box">{/* Chart placeholder */}</div>
    </section>
  );
}
