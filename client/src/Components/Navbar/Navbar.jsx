import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions} from '../../store/authReducer';
import axios from 'axios';
import { toast } from "react-toastify";

const Navbar = () => {
  const links = [
    { name: "Home", to: "/" },
    { name: "All Blogs", to: "/all-blogs" },
    { name: "Profile", to: "/profile" },
    { name: "Login", to: "/login" },
  ];

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    links.splice(2, 1);
  } else {
    links.splice(3, 1);
  }

  const dispatch= useDispatch();
  const backendLink= useSelector((state)=> state.prod.link);
  const history=useNavigate();
  const LogoutHandler = async ()=>{
      await axios.post(`${backendLink}/api/v1/logout`,{
      withcredentials:true,
    });
    dispatch(authActions.logout());
    // toast.succes(res.data.message);
    history("/");
  };

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
          {!isLoggedIn && (
            <Link
              to="/signup"
              className="bg-blue-100  font-semibold py-3 px-8 rounded-lg hover:bg-blue-200 transition duration-300"
            >
              Sign Up Now
            </Link>
          )}
          {isLoggedIn && (
            <Link
              to="/"
              className="bg-blue-100  font-semibold py-3 px-8 rounded-lg hover:bg-blue-200 transition duration-300"
              onClick={LogoutHandler}
            >
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
