import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainLayout from './Layout/MainLayout'
import Home from './pages/Home/page'
import OtherLayout from './Layout/OtherLayout';
import Login from './pages/Login/page'
import Signup from './pages/Signup/page'
import AllBlogs from './pages/All Blogs/page';
import Profile from './pages/Profile/page';
import DashboardProfile from './Components/Profile/DashboardProfile';
import LinkedBlogs from './Components/Profile/LinkedBlogs';
import Favorites from './Components/Profile/Favorites';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <Router>
      <ToastContainer/>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route path="/all-blogs" element={<AllBlogs />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route index element={<DashboardProfile />}></Route>
          <Route path="/dashboard" element={<DashboardProfile/>}></Route>
          <Route path="/profile/liked-blogs" element={<LinkedBlogs />}></Route>
          <Route path="/profile/favorites" element={<Favorites />}></Route>
        </Route>
        <Route element={<OtherLayout />}>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App