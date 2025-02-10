import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Blogger</h2>
            <p className="text-sm text-gray-300">
              Blogger is your one-stop platform for sharing ideas, thoughts, and
              stories. Join our community to connect with like-minded
              individuals and share your passion for writing.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-gray-100 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/all-blogs"
                  className="text-gray-300 hover:text-gray-100 transition"
                >
                  All Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-300 hover:text-gray-100 transition"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-gray-100 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p className="text-sm text-gray-300 mb-2">
              Email:{" "}
              <a
                href="mailto:support@blogger.com"
                className="hover:text-gray-100"
              >
                support@blogger.com
              </a>
            </p>
            <p className="text-sm text-gray-300 mb-2">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-gray-100">
                +1 234 567 890
              </a>
            </p>
            <p className="text-sm text-gray-300">
              Address: 123 Blogger Street, New York, NY
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <i className="fab fa-facebook-f"></i> Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm text-gray-300 mt-6">
          © {new Date().getFullYear()} Blogger. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
