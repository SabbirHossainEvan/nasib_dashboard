import React, { useState } from "react";
import { Link } from "react-router";
import sideLogo from "../assets/Frame 2147229686.png"

const RecoverAccount = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Recovery email sent to:", email);
  };

  return (
    <div className="flex min-h-screen bg-[#0f172a] text-white font-sans">
      {/* Left Section: Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 md:px-24 lg:px-32">
        <div className="max-w-md w-full">
          <h2 className="text-3xl font-semibold mb-2">Recover Account</h2>
          <p className="text-gray-400 mb-8">
            Enter your email and we will send you a recovery code
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-md bg-[#161d31] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition duration-200"
                required
              />
            </div>
            <Link to={"/reset-password"}>
              <button
                type="submit"
                className="w-full py-3 px-4 rounded-md bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold uppercase tracking-wider hover:from-yellow-500 hover:to-yellow-700 transition duration-300 shadow-lg"
              >
                Send Recovery Email
              </button>
            </Link>
          </form>

          <div className="mt-8 flex justify-center">
            <Link to={"/"}>
              <button
                onClick={() => window.history.back()}
                className="flex items-center text-gray-400 hover:text-white transition duration-200"
              >
                <span className="mr-2 text-lg">‹</span> Back To Login
              </button>
            </Link>
          </div>
        </div>
      </div>


      <div className="hidden lg:flex w-1/2 bg-[#0b1120] items-center justify-center border-l border-gray-800">
        <div className="flex items-center space-x-4">
          <div className="text-[#c19505] flex items-center">
                    <img src={sideLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverAccount;
