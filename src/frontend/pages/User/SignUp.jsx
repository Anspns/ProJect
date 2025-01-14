import React, { useState } from "react";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-red-200 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-purple-700">
          สร้างบัญชีของคุณ
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!formData.username || !formData.email || !formData.password) {
              setMessage("กรุณากรอกข้อมูลให้ครบถ้วน!");
              return;
            }
            setMessage("สมัครสมาชิกสำเร็จ!");
            setFormData({ username: "", email: "", password: "" });
          }}
        >
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">ชื่อผู้ใช้</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="กรอกชื่อผู้ใช้"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-gray-700">อีเมล</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="กรอกอีเมล"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 font-medium text-gray-700">รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="กรอกรหัสผ่าน"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition"
          >
            สมัครสมาชิก
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          มีบัญชีอยู่แล้ว?{" "}
          <a href="/login" className="text-purple-500 hover:underline">
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
