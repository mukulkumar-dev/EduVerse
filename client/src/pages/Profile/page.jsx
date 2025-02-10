import React from 'react'
import Sidebar from '../../Components/Profile/Sidebar'
import DashboardProfile from '../../Components/Profile/DashboardProfile';
import { Outlet } from 'react-router-dom';

const page = () => {
  return (
    <div className="">
      <div className="w-1/6">
        {/* <Sidebar /> */}
      </div>
      <DashboardProfile />
      <div className=" m-10 max-h-auto w-5/6">
        <Outlet />
      </div>
    </div>
  );
}

export default page