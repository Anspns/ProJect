import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";
import { Link } from "react-router-dom";

const posters = [
  { id: 1, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 1" },
  { id: 2, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 2" },
  { id: 3, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 3" },
  { id: 4, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 4" },
  { id: 5, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 5" },
  { id: 6, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 6" },
  { id: 7, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 7" },
  { id: 8, image: "https://dummyimage.com/800x400", title: "โปสเตอร์ 8" },
];

const newsItems = [
  { id: 1, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 1", description: "คำอธิบายของข่าวสาร 1", date: "2024-12-01" },
  { id: 2, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 2", description: "คำอธิบายของข่าวสาร 2", date: "2024-12-02" },
  { id: 3, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 3", description: "คำอธิบายของข่าวสาร 3", date: "2024-12-03" },
  { id: 4, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 4", description: "คำอธิบายของข่าวสาร 4", date: "2024-12-04" },
  { id: 5, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 5", description: "คำอธิบายของข่าวสาร 5", date: "2024-12-05" },
  { id: 6, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 6", description: "คำอธิบายของข่าวสาร 6", date: "2024-12-06" },
  { id: 7, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 7", description: "คำอธิบายของข่าวสาร 7", date: "2024-12-07" },
  { id: 8, image: "https://dummyimage.com/150x75", title: "ข่าวสาร 8", description: "คำอธิบายของข่าวสาร 8", date: "2024-12-08" },
];

const HomePage = () => {
  const [currentPosterIndex, setCurrentPosterIndex] = useState(0);
  const autoSlideRef = useRef(null);

  const startAutoSlide = () => {
    autoSlideRef.current = setInterval(() => {
      setCurrentPosterIndex((prev) => (prev + 1) % posters.length);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, []);

  const handleUserInteraction = () => {
    clearInterval(autoSlideRef.current);
    startAutoSlide();
  };

  const nextPoster = () => {
    setCurrentPosterIndex((prev) => (prev + 1) % posters.length);
    handleUserInteraction();
  };

  const prevPoster = () => {
    setCurrentPosterIndex((prev) => (prev - 1 + posters.length) % posters.length);
    handleUserInteraction();
  };

  return (
    <main className="bg-gradient-to-br from-purple-100 to-pink-50 py-12 md:py-14">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Poster */}
        <section aria-labelledby="poster-section" className="relative">
          <div className="relative flex items-center justify-center mt-8">
            <button
              onClick={prevPoster}
              className="absolute left-0 z-20 bg-purple-300 hover:bg-purple-400 text-white shadow-md p-3 rounded-full transition-transform duration-300 transform hover:scale-110"
              aria-label="เลื่อนไปยังโปสเตอร์ก่อนหน้า"
            >
              <ChevronLeft />
            </button>

            <div className="w-full max-w-screen-xl relative overflow-hidden rounded-xl shadow-lg">
              <div
                className="flex transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateX(-${currentPosterIndex * 100}%)`,
                }}
              >
                {posters.map((poster) => (
                  <div
                    key={poster.id}
                    className="w-full flex-shrink-0 transition-all duration-700 ease-in-out"
                  >
                    <Link to={`/project/${poster.id}`}>
                      <img
                        src={poster.image}
                        alt={poster.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={nextPoster}
              className="absolute right-0 z-20 bg-purple-300 hover:bg-purple-400 text-white shadow-md p-3 rounded-full transition-transform duration-300 transform hover:scale-110"
              aria-label="เลื่อนไปยังโปสเตอร์ถัดไป"
            >
              <ChevronRight />
            </button>
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-6">
            {posters.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPosterIndex(index);
                  handleUserInteraction();
                }}
                className={`w-3 h-3 mx-1.5 rounded-full ${
                  index === currentPosterIndex
                    ? "bg-purple-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`ไปยังโปสเตอร์ ${index + 1}`}
              />
            ))}
          </div>
        </section>

        {/* Section: News */}
        <section aria-labelledby="news-section" className="mt-12">
          <h2 id="news-section" className="text-3xl font-bold text-center mb-8 text-purple-700">
            ข่าวสารแนะนำ
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newsItems.map((news) => (
              <article key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <Link to={`/news/${news.id}`}>
                  <img src={news.image} alt={news.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 flex items-center space-x-2">
                      <Tag className="w-5 h-5 text-purple-600" />
                      <span>{news.title}</span>
                    </h3>
                    <p className="line-clamp-3 text-gray-600 text-sm">{news.description}</p>
                    <time className="text-gray-400 text-xs mt-2 block">{news.date}</time>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
