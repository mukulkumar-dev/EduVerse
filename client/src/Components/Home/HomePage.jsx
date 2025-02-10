import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const cat = [
    {
      name: "DSA",
      to: "/cat/dsa",
    },
    {
      name: "MERN",
      to: "/cat/mern-stack",
    },
    {
      name: "Next JS",
      to: "/cat/next-js",
    },
    {
      name: "Trending Topics",
      to: "/cat/trending-topics",
    },
  ];
  return (
    <div className="bg-gray-100">
      <header className="bg-blue-100 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className=" text-blue-600 text-4xl md:text-6xl font-bold mb-4">
            Welcome to EduVerse
          </h1>
          <p className=" text-black text-lg md:text-xl mb-8">
            Share your ideas, inspire others, and explore exciting stories from
            our community.
          </p>
          <a
            href="/signup"
            className="bg-white text-blue-600 font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition duration-300"
          >
            Get Started
          </a>
        </div>
      </header>

      <section className="py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-1/2 relative h-80 overflow-hidden">
            <img
              src="https://media.istockphoto.com/id/626669886/photo/blogging-blog-word-coder-coding-using-laptop.jpg?s=612x612&w=0&k=20&c=gX9o-kj9RohNBAT2n4wR6fldiTdvnpxZOsetFonpBJw="
              alt="Blogger Showcase 1"
              className="h-80 w-auto rounded-lg shadow-md"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Discover the World of EduVerse
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              EduVerse is the ultimate platform where ideas come to life. Share
              your thoughts, inspire your audience, and create a lasting impact
              with engaging stories. Join our community to start your blogging
              journey and connect with like-minded individuals.
            </p>
            <a
              href="/signup"
              className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Start EduVerse
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Explore Categories
          </h2>
          <div className="flex justify-center space-x-6">
            {cat.map((item, i) => (
              <a
                key={i}
                href={item.to}
                className="text-lg font-medium text-gray-700 px-4 py-2 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white hover:scale-105 transition duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
