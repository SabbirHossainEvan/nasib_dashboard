import React, { useState } from "react";
import { Eye, EyeOff, ChevronLeft } from "lucide-react";
import { Link } from "react-router";
import sideLogo from "../assets/Frame 2147229686.png";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    recoveryCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white">
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-20 lg:px-32">
        <div className="max-w-md w-full mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold mb-2">Recover Account</h2>
          <p className="text-gray-400 mb-8">
            Enter your email and we will send you a recovery code
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Recovery Code
              </label>
              <input
                type="text"
                name="recoveryCode"
                value={formData.recoveryCode}
                onChange={handleChange}
                placeholder="Recovery Code"
                className="w-full bg-[#111827] border border-gray-700 rounded-md py-3 px-4 focus:ring-2 focus:ring-yellow-500 outline-none transition"
              />
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-[#111827] border border-gray-700 rounded-md py-3 px-4 focus:ring-2 focus:ring-yellow-500 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-10 text-gray-500 hover:text-gray-300"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <div className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1.5">
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full bg-[#111827] border border-gray-700 rounded-md py-3 px-4 focus:ring-2 focus:ring-yellow-500 outline-none transition"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-10 text-gray-500 hover:text-gray-300"
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 hover:from-yellow-500 hover:to-yellow-700 text-black font-bold py-3 px-4 rounded-md transition shadow-lg mt-4"
            >
              SET NEW PASSWORD
            </button>
          </form>

          <Link to={"/"}>
            <button className="flex items-center justify-center w-full mt-8 text-gray-400 hover:text-white transition">
              <ChevronLeft size={20} />
              <span className="ml-1">Back To Login</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-[#0b1120] items-center justify-center border-l border-gray-800">
        <div className="flex items-center space-x-4">
          <img src={sideLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
