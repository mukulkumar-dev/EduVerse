import React from "react";
import BlogCard from "../Blog Card/BlogCard";
import { Link } from "react-router-dom";

const RecentBlogs = () => {
  const data = [
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTiSQy2DWNq-2uNUBjEPtbVbTfbWJJxY4Y0zMdURiY_6pId3DdlG2WHDNLi8Y54tJqChY&usqp=CAU",
      title: "NPM",
      description:
        "NPM (Node Package Manager) is the default package manager for Node.js. It is used to install, manage, and share JavaScript packages (modules) in both frontend and backend development.",
    },
    {
      img: "https://images.prismic.io/loco-blogs/79328284-f97b-489f-924c-eb3b17e34b56_image2.png?auto=compress%2Cformat&rect=0%2C0%2C1999%2C1124&w=3840&fit=max",
      title: "MERN",
      description:
        "MERN is a JavaScript-based full-stack development framework used to build modern web applications. It consists of four key technologies:",
    },
    {
      img: "https://learnloner.com/wp-content/uploads/2024/01/DSA.png",
      title: "DSA JAVA",
      description:
        "Data Structures and Algorithms (DSA) are fundamental concepts for solving complex computational problems efficiently. Java is a widely used language for DSA due to its object-oriented nature, rich standard libraries, and garbage collection.",
    },
  ];

  return (
    <>
      <div className="bg-gray-100 py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Recent Blogs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.map((items, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition duration-300"
              >
                <BlogCard items={items} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="bg-blue-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Join Our EduVerse Community
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Start your blogging journey today and connect with like-minded
            individuals.
          </p>
          <Link
            to="/signup"
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default RecentBlogs;
