import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const Signup = () => {
  const history = useNavigate();
  const backendLink = useSelector((state) => state.prod.link);
  const [Inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const SubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${backendLink}/api/v1/signup`,
        Inputs,
        {
          withCrendentails: true,
        }
      );
      console.log(res);
      // toast.succes(res.data.message);
      history("/login");
    } catch (error) {
      toast.error(error.response.data.error);
    } finally{
      setInputs ({
        username:"",
        email:"",
        password:"",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="hidden lg:block">
          <img
            src="https://st2.depositphotos.com/1607243/9059/i/450/depositphotos_90594560-stock-photo-man-working-on-laptop-with.jpg"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-8 lg:p-12 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome! New EduVerse
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              Create an account to read the awesome blog!
            </p>
          </div>

          <form onSubmit={SubmitHandler}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                name="username"
                required
                onChange={change}
                value={Inputs.username}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                onChange={change}
                value={Inputs.email}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                onChange={change}
                value={Inputs.password}
                placeholder="Create a password"
                className="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 hover:text-blue-800">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
