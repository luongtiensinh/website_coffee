import React from "react";
import "../styles/Actions.css";
const ActionsPanel = () => {
  return (
    <div className="actions">
      <button className="btn-blue">🔄 Chuyển bàn</button>
      <button className="btn-blue">✂️ Tách bàn</button>
      <button className="btn-blue">🖨️ Báo chế biến [F9]</button>
      <button className="btn-yellow">🧮 Tạm tính [F3]</button>
      <button className="btn-red">💳 Thanh toán [F4]</button>
    </div>
  );
};

export default ActionsPanel;
