import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const links = [
    { name: "Dashboard", to: "/dashboard" },
    { name: "Liked Blogs", to: "/profile/liked-blogs" },
    { name: "Favorites", to: "/profile/favorites" },
  ];

  return (
    <div className="flex flex-col h-screen bg-blue-600 text-white fixed top-0 left-0 shadow-lg animate__animated animate__fadeInLeft pt-20">
      <div className="flex flex-col justify-between h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-center mb-6">Blogger</h1>
          <nav>
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="block py-3 px-4 mb-3 text-lg rounded-md hover:bg-blue-500 transition duration-300"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
