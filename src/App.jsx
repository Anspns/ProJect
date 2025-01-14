import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./frontend/components/Navbar/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Router>
      {/* Navbar ที่จะแสดงในทุกหน้า */}
      <Navbar />

      {/* เนื้อหาแต่ละหน้า */}
      <div className="pt-16">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;

