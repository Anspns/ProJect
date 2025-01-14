import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState("");

  // ดึงข้อมูลจาก localStorage เมื่อโหลดหน้า
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("rememberMe"));
    if (savedData) {
      setFormData(savedData);
      setRememberMe(true);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setMessage("กรุณากรอกข้อมูลให้ครบถ้วน!");
      return;
    }

    // บันทึกหรือเคลียร์ข้อมูลใน localStorage
    if (rememberMe) {
      localStorage.setItem("rememberMe", JSON.stringify(formData));
    } else {
      localStorage.removeItem("rememberMe");
    }

    setMessage("เข้าสู่ระบบสำเร็จ!");
    console.log("Login Data:", formData);
    console.log("Remember Me:", rememberMe ? "ON" : "OFF");

    // คุณสามารถเพิ่มการเชื่อมต่อ API หรือการตรวจสอบที่นี่
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-red-200 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
          ยินดีต้อนรับ
        </h2>
        {message && (
          <div
            className={`mb-4 text-center ${
              message.includes("สำเร็จ") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">อีเมล</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="กรอกอีเมลของคุณ"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="กรอกรหัสผ่านของคุณ"
              required
            />
          </div>
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="rememberMe" className="text-gray-700 text-sm">
              จดจำรหัสผ่าน
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            เข้าสู่ระบบ
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ลืมรหัสผ่าน?{" "}
          <Link
            to="/forgot-password"
            className="text-purple-500 hover:underline"
          >
            กดที่นี่เพื่อรีเซ็ตรหัสผ่าน
          </Link>
        </p>
        <p className="mt-6 text-center text-sm text-gray-600">
          ยังไม่มีบัญชี?{" "}
          <Link to="/signup" className="text-purple-500 hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
