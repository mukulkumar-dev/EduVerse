import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "All Blogs", to: "/all-blogs" },
    { name: "Profile", to: "/profile" },
    { name: "Login", to: "/login" },
  ];

  return (
    <nav className="bg-blue-600 shadow-md flex flex-col">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-white font-bold text-2xl hover:text-gray-200"
          >
            EduVerse
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          {links.map((item, i) => (
            <Link
              key={i}
              to={item.to}
              className="text-white text-lg font-medium hover:text-gray-200 transition duration-200"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="/signup"
            className="bg-blue-100  font-semibold py-3 px-8 rounded-lg hover:bg-blue-200 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
