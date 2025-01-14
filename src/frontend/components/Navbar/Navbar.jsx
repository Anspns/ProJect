import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-purple-900 text-white shadow-lg fixed w-full z-10">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* โลโก้ */}
        <div className="text-2xl font-bold hover:text-purple-300">
          <Link to="/">BettaCompetition</Link>
        </div>

        {/* Hamburger Menu */}
        {!isMenuOpen && (
          <button
            className="block lg:hidden focus:outline-none z-50"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        )}

        {/* เมนู */}
        <ul className="hidden lg:flex space-x-6 ml-auto">
          <li>
            <Link
              to="/"
              className="text-white hover:text-purple-300 font-medium transition duration-200"
            >
              แนะนำ
            </Link>
          </li>
          <li>
            <Link
              to="/news"
              className="text-white hover:text-purple-300 font-medium transition duration-200"
            >
              ข่าวสาร
            </Link>
          </li>
          <li>
            <Link
              to="/assessment"
              className="text-white hover:text-purple-300 font-medium transition duration-200"
            >
              ประเมินคุณภาพปลากัด
            </Link>
          </li>
          <li>
            <Link
              to="/competitions"
              className="text-white hover:text-purple-300 font-medium transition duration-200"
            >
              การประกวด
            </Link>
          </li>
          <li>
            <Link
              to="/history"
              className="text-white hover:text-purple-300 font-medium transition duration-200"
            >
              ประวัติการใช้งาน
            </Link>
          </li>
        </ul>

        {/* ปุ่มเข้าสู่ระบบ */}
        <div className="hidden lg:block ml-4">
          <Link
            to="/login"
            className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            เข้าสู่ระบบ
          </Link>
        </div>

        {/* เมนูเลื่อนสำหรับขนาดจอเล็ก */}
        {isMenuOpen && (
          <div
            className={`fixed top-0 right-0 h-full bg-purple-900 w-64 shadow-lg transform ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out lg:hidden z-40`}
          >
            {/* ปุ่มกากบาท */}
            <button
              className="absolute top-4 right-4 text-white focus:outline-none z-50"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul className="flex flex-col space-y-6 px-6 py-12">
              <li>
                <Link
                  to="/"
                  className="block text-white hover:text-purple-300 font-medium transition duration-200"
                  onClick={toggleMenu}
                >
                  แนะนำ
                </Link>
              </li>
              <li>
                <Link
                  to="/news"
                  className="block text-white hover:text-purple-300 font-medium transition duration-200"
                  onClick={toggleMenu}
                >
                  ข่าวสาร
                </Link>
              </li>
              <li>
                <Link
                  to="/assessment"
                  className="block text-white hover:text-purple-300 font-medium transition duration-200"
                  onClick={toggleMenu}
                >
                  ประเมินคุณภาพปลากัด
                </Link>
              </li>
              <li>
                <Link
                  to="/competitions"
                  className="block text-white hover:text-purple-300 font-medium transition duration-200"
                  onClick={toggleMenu}
                >
                  การประกวด
                </Link>
              </li>
              <li>
                <Link
                  to="/history"
                  className="block text-white hover:text-purple-300 font-medium transition duration-200"
                  onClick={toggleMenu}
                >
                  ประวัติการใช้งาน
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded transition duration-300 text-center"
                  onClick={toggleMenu}
                >
                  เข้าสู่ระบบ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
