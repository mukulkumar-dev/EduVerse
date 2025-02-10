import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import HomePage from "../Components/Home/HomePage";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="flex-grow">
        {/* <HomePage/> */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
