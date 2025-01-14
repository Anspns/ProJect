import React, { useState } from "react";
import { ChevronRight, ChevronLeft, Search, Tag, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const mockNewsItems = [
  { id: 1, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 1", description: "เนื้อหาของข่าวสาร 1 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-01", category: "การประกวด" },
  { id: 2, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 2", description: "เนื้อหาของข่าวสาร 2 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-02", category: "ประชาสัมพันธ์" },
  { id: 3, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 3", description: "เนื้อหาของข่าวสาร 3 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-03", category: "ข่าวทั่วไป" },
  { id: 4, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 4", description: "เนื้อหาของข่าวสาร 4 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-04", category: "ประชาสัมพันธ์" },
  { id: 5, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 5", description: "เนื้อหาของข่าวสาร 5 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-05", category: "ประชาสัมพันธ์" },
  { id: 6, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 6", description: "เนื้อหาของข่าวสาร 6 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-06", category: "ข่าวทั่วไป" },
  { id: 7, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 7", description: "เนื้อหาของข่าวสาร 7 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-07", category: "การประกวด" },
  { id: 8, image: "https://dummyimage.com/300x200", title: "ข่าวสาร 8", description: "เนื้อหาของข่าวสาร 8 ที่สั้นกระชับและดึงดูดผู้อ่าน", date: "2024-12-08", category: "ข่าวทั่วไป" },
  
];

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("ทั้งหมด");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredNews = mockNewsItems.filter((news) =>
    (selectedCategory === "ทั้งหมด" || news.category === selectedCategory) &&
    news.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedNews = filteredNews.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* หัวข้อ */}
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-12 flex items-center justify-center space-x-2">
          <span>ข่าวสารทั้งหมด</span>
        </h1>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="ค้นหาข่าว..."
            className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* หมวดหมู่ */}
        <div className="flex justify-center space-x-4 mb-8">
          {["ทั้งหมด", "การประกวด", "ประชาสัมพันธ์", "ข่าวทั่วไป"].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
                selectedCategory === category
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              <Tag className="w-4 h-4" />
              <span>{category}</span>
            </button>
          ))}
        </div>

        {/* ข่าวสาร */}
        {paginatedNews.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedNews.map((news) => (
              <div
                key={news.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <Link to={`/news/${news.id}`}>
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-800 flex items-center space-x-2">
                      <Tag className="w-5 h-5 text-purple-600" />
                      <span>{news.title}</span>
                    </h3>
                    <p className="line-clamp-3 text-gray-600 mt-2">
                      {news.description}
                    </p>
                    <p className="text-gray-400 text-sm mt-4 flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{news.date}</span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-12">ไม่มีข่าวสารที่ค้นหา</p>
        )}

        {/* Pagination */}
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              currentPage === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>ย้อนกลับ</span>
          </button>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-purple-600 text-white hover:bg-purple-700"
            }`}
          >
            <span>ถัดไป</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
