import React, { useState } from "react";
import { Link } from "react-router";
import sideLogo from "../assets/Frame 2147229686.png";

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Registering user:", formData);
  };

  return (
    <div className="flex min-h-screen w-full bg-[#0f172a] text-white font-sans">
      {/* Left Section - Form */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 px-8 md:px-24 lg:px-32 bg-[#1e293b]">
        <div className="max-w-md w-full mx-auto">
          <h2 className="text-3xl font-semibold mb-2">Create your account</h2>
          <p className="text-gray-400 mb-8">
            Already have an account?{" "}
            <Link to={"/"}>
              <span className="text-yellow-500 cursor-pointer hover:underline font-medium">
                Login
              </span>
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username/Email */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Username or Email
              </label>
              <input
                type="text"
                name="identifier"
                placeholder="Username or Email"
                value={formData.identifier}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>

            {/* New Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                New Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button
                type="button"
                className="absolute right-4 top-11 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-[#0f172a] border border-gray-700 focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button
                type="button"
                className="absolute right-4 top-11 text-gray-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                  />
                </svg>
              </button>
            </div>

            <p className="text-xs text-gray-500">
              Password must be at least 7 characters
            </p>

            <div className="flex items-start space-x-3 py-2">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                className="mt-1 w-4 h-4 rounded border-gray-700 bg-[#0f172a] accent-yellow-500"
                required
              />
              <label className="text-[11px] leading-relaxed text-gray-400">
                I am 18+ and have read and accept the{" "}
                <span className="text-gray-300 underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-gray-300 underline cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>

            <Link to={"/dashboard"}>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-md hover:from-yellow-500 hover:to-yellow-700 transition-all shadow-lg uppercase tracking-wider"
              >
                Play Now
              </button>
            </Link>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#1e293b] text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button className="flex items-center justify-center w-max mx-auto px-8 py-2 bg-[#2d3748] rounded-md hover:bg-[#3d4859] border border-gray-600 transition-colors">
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
              alt="G"
              className="w-5 h-5 mr-3"
            />
            <span className="text-sm font-medium">Google</span>
          </button>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-center w-1/2 bg-[#0a101d]">
        <div className="flex items-center space-x-6">
          <img src={sideLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RegisterSection;
