import express from "express";
import mysql from "mysql2";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 🔌 Kết nối MySQL
const db = mysql.createConnection({
    host: "localhost",     // Máy chủ MySQL
    user: "root",          // Tài khoản mặc định (hoặc tài khoản của bạn)
    password: "123456789",          // Mật khẩu (nếu có, điền vào)
    database: "react_users" // Tên database bạn đã tạo trong MySQL Workbench
});

db.connect((err) => {
    if (err) {
        console.error(" Lỗi kết nối MySQL:", err);
    } else {
        console.log(" Kết nối MySQL thành công!");
    }
});

// 🧩 API: thêm người dùng mới
app.post("/register", (req, res) => {
    const { username, email, password, fileName, registerTime } = req.body;
    const sql = "INSERT INTO users (username, email, password, fileName, registerTime) VALUES (?, ?, ?, ?, ?)";
    db.query(sql, [username, email, password, fileName, registerTime], (err, result) => {
        if (err) {
            console.error(" Lỗi khi thêm user:", err);
            res.status(500).send("Lỗi server");
        } else {
            res.send(" Thêm người dùng thành công!");
        }
    });
});

// 🧩 API: lấy danh sách người dùng
app.get("/users", (req, res) => {
    const sql = "SELECT * FROM users";
    db.query(sql, (err, results) => {
        if (err) {
            console.error(" Lỗi khi lấy dữ liệu:", err);
            res.status(500).send("Lỗi server");
        } else {
            res.json(results);
        }
    });
});

// 🧩 API: đăng nhập
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error(" Lỗi khi đăng nhập:", err);
            res.status(500).send("Lỗi server");
        } else if (results.length > 0) {
            res.json({ success: true, user: results[0] });
        } else {
            res.status(401).json({ success: false, message: "Sai tài khoản hoặc mật khẩu!" });
        }
    });
});

//  Khởi động server
app.listen(5000, () => {
    console.log(" Server đang chạy ở cổng 5000");
});
