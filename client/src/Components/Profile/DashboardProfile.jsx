import React, { useState } from "react";

const DashboardProfile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [imagePreview, setImagePreview] = useState(null);

  // Sample data for user profile
  const user = {
    name: "John Doe",
    bio: "A passionate web developer and tech enthusiast. Loves to explore new technologies and share knowledge with others through blogging.",
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle password update
  const handlePasswordUpdate = () => {
    if (password === confirmPassword) {
      alert("Password updated successfully!");
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
      <div className="max-w-4xl mx-auto bg-gray-200 p-6 rounded-lg shadow-lg mt-8 flex flex-col">
        {/* Profile Image Section */}
        <div className="flex justify-center">
          <div className="relative">
            <img
              src={
                imagePreview ||
                profileImage ||
                "https://t4.ftcdn.net/jpg/03/58/96/39/360_F_358963988_b3FQwLD5wWOmETSvBvLBsBLBtW2z4yUW.jpg"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 cursor-pointer transition-transform transform hover:scale-105"
            />
            <label
              htmlFor="file-input"
              className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
            >
              <i className="fas fa-camera"></i>
            </label>
            <input
              id="file-input"
              type="file"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>

        {/* Profile Heading Section */}
        <div className="mt-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-xl text-gray-600 mt-2">{user.bio}</p>
        </div>

        {/* Profile Form Section */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Update Profile
          </h2>

          <div className="mt-4">
            <label htmlFor="password" className="block text-gray-700">
              New Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your new password"
            />
          </div>

          <div className="mt-4">
            <label htmlFor="confirm-password" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              className="w-full p-3 mt-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm your new password"
            />
          </div>

          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePasswordUpdate}
              className="px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition duration-200"
            >
              Update Password
            </button>
          </div>
        </div>
      </div>
  );
};

export default DashboardProfile;
