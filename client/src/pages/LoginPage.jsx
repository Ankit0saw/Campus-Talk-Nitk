import React, { useContext, useState, useEffect } from "react";
import assets from "../assets/assets.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { LoginPageAnimation } from "../components/LoginPageAnimation.js";
import {
  JumpingBalls,
  RotatingCircles,
} from "../components/LoginPageBackground.jsx";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");

  const [gender, setGender] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [department, setDepartment] = useState("");
  const [course, setCourse] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [dobType, setDobType] = useState("date");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    if (currState === "Sign Up" && !isDataSubmitted) {
      if (!email.endsWith("@nitk.edu.in")) {
        setError("Access Denied. Only @nitk.edu.in emails are allowed.");
        return;
      }
      setIsDataSubmitted(true);
      return;
    }

    setLoading(true);

    // Simulate login function
    if (currState === "Sign Up") {
      const signupData = {
        fullName,
        email,
        password,
        bio,
        gender,
        rollNumber,
        department,
        course,
        currentYear,
        dob,
      };

      await login("signup", signupData);
    } else if (currState === "Login") {
      // Login logic
      await login("login", { email, password });
    }

    setLoading(false);
  };

  const handleStateChange = (newState) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrState(newState);
      setIsDataSubmitted(false);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl relative overflow-hidden animate-fadeIn transition-all duration-500 ${
        currState === "Login" ? "flex-row-reverse" : ""
      }`}
    >
      {/* The background animations from their own component */}
      <JumpingBalls isTransitioning={isTransitioning} />

      {/* Left side - Logo with Rotating Circles */}
      <div className="relative">
        <RotatingCircles isTransitioning={isTransitioning} />
        <img
          src={assets.logo}
          alt="logo"
          className={`w-[min(30vw,250px)] animate-breathe drop-shadow-2xl transition-all duration-500 relative z-10 ${
            isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        />
      </div>

      {/* Right side */}
      <form
        onSubmit={onSubmitHandler}
        className={`border-2 bg-white/8 text-white border-gray-500 p-6 flex flex-col gap-6 rounded-lg shadow-lg backdrop-blur-md hover:shadow-2xl transition-all duration-500 ${
          isTransitioning ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <h2 className="font-medium text-2xl flex justify-between items-center">
          <span>{currState}</span>
          {isDataSubmitted && (
            <img
              onClick={() => setIsDataSubmitted(false)}
              src={assets.arrow_icon}
              alt="back"
              className="w-5 cursor-pointer hover:scale-110 transition-transform duration-200"
            />
          )}
        </h2>

        {currState === "Sign Up" && !isDataSubmitted ? (
          <>
            <input
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
              type="text"
              placeholder="Full Name"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              autoComplete="new-password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300"
            />
          </>
        ) : currState === "Sign Up" && isDataSubmitted ? (
          <>
            <div className="flex gap-4">
              <input
                onChange={(e) => setRollNumber(e.target.value)}
                value={rollNumber}
                type="text"
                placeholder="Roll Number"
                required
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300 w-1/2"
              />
              <select
                onChange={(e) => setCurrentYear(e.target.value)}
                value={currentYear}
                required
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300 text-gray-300 w-1/2"
              >
                <option value="" disabled>
                  Select Current Year
                </option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>

            <div className="flex gap-4">
              <input
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                type="text"
                placeholder="Department"
                required
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300 w-1/2"
              />
              <input
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                type="text"
                placeholder="Course"
                required
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300 w-1/2"
              />
            </div>

            <div className="flex gap-4">
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300 text-gray-300 w-1/2"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Can't Say">Can't Say</option>
              </select>
              <input
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                type={dobType}
                onFocus={() => setDobType("date")}
                onBlur={() => (dob === "" ? setDobType("text") : null)}
                placeholder="Date of Birth"
                required
                className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 flex-grow w-1/2 bg-white/10 placeholder-gray-300"
              />
            </div>

            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={2}
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300 resize-none w-full"
              placeholder="Provide Short bio..."
              required
            />
          </>
        ) : (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              autoComplete="email"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              className="p-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 focus:scale-105 bg-white/10 placeholder-gray-300"
            />
          </>
        )}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer hover:from-purple-500 hover:to-violet-700 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
        >
          <span className="relative z-10">
            {loading
              ? "Loading..."
              : currState === "Sign Up"
              ? isDataSubmitted
                ? "Create Account"
                : "Next"
              : "Login Now"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-violet-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
        </button>

        {currState === "Sign Up" && !isDataSubmitted && (
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <input
              type="checkbox"
              required
              className="transform hover:scale-110 transition-transform duration-200 accent-purple-500"
            />
            <p>Agree to the terms of use & privacy policy.</p>
          </div>
        )}

        <div className="flex flex-col gap-2">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?
              <span
                onClick={() => handleStateChange("Login")}
                className="font-medium text-violet-500 cursor-pointer hover:text-violet-400 transition-colors duration-200 hover:underline ml-1"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account
              <span
                onClick={() => handleStateChange("Sign Up")}
                className="font-medium text-violet-500 cursor-pointer hover:text-violet-400 transition-colors duration-200 hover:underline ml-1"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>

      <style>
        {`
        ${LoginPageAnimation}
      `}
      </style>
    </div>
  );
};

export default LoginPage;
