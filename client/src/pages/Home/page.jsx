import React from "react";
import HomePage from "../../Components/Home/HomePage";
import RecentBlogs from '../../Components/Home/RecentBlogs';

const Home = () => {
  return <div className="flex-grow flex-1 bg-gray-100">
    <HomePage/>
    <RecentBlogs/>
  </div>;
};

export default Home;
