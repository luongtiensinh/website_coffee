import React, { useEffect, useState } from "react";
import "../styles/Demo.css";

function Demo() {
  const [user, setUser] = useState(null);
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    const savedFile = localStorage.getItem("userFile");

    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedFile) setFileContent(savedFile);
  }, []);

  const handleExport = () => {
    if (!user) return alert("Chưa có dữ liệu!");

    const header = ["Ten dang nhap", "Email", "Mat khau", "Ten file"];
    const row = [user.username, user.email, user.password, user.fileName || ""];
    const csv = [header, row].map((r) => r.join(",")).join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "user_data.csv";
    a.click();
  };

  if (!user) {
    return <p className="no-data"> Chưa có dữ liệu đăng ký.</p>;
  }

  return (
    <div className="demo-container">
      <img src="https://navigates.vn/wp-content/uploads/2023/06/logo-dai-hoc-kien-truc-da-nang.jpg" alt="Logo DAU" className="logo" />

      <h2>Thông tin người dùng</h2>
      <p><b>Tên đăng nhập:</b> {user.username}</p>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Mật khẩu:</b> {user.password}</p>
      <p><b>Tên file:</b> {user.fileName}</p>
      <p><b>Thời gian đăng ký : </b>{user.registerTime}</p>

      {fileContent && (
        <div className="file-section">
          {fileContent.startsWith("data:image") ? (
            <>
              <h3>Ảnh đã tải lên:</h3>
              <img src={fileContent} alt="Uploaded" className="uploaded-img" />
            </>
          ) : (
            <>
              <h3>Nội dung file:</h3>
              <pre className="file-preview">{fileContent}</pre>
            </>
          )}
        </div>
      )}

      <button className="export-btn" onClick={handleExport}>
         Xuất CSV
      </button>
    </div>
  );
}

export default Demo;
