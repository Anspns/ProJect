module.exports = {
  content: [
    "./index.html", // เพิ่มไฟล์ HTML
    "./src/**/*.{js,jsx,ts,tsx}", // รวมไฟล์ใน src ทั้งหมด
  ],
  theme: {
    extend: {},
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
