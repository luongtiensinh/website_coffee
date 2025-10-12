import React from "react";
import "../styles/Bill.css";
const Bill = () => {
  return (
    <>
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
        <small>
          Sau khi [F1] tìm thực đơn và [Enter] để chọn, bạn có thể đi chuyển
          nhanh xuống vị trí nhập số lượng bằng cách [Enter] thêm một lần nữa.
        </small>
        
      </div>
    </>
  );
};

export default Bill;
