import React, { useContext, useState } from "react";
import assets from "../assets/assets.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { LoginPageAnimation, JumpingBalls, RotatingCircles } from "../components/LoginPageAnimation";

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

  // OTP states
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    // STEP 1: Send OTP after basic info
    if (currState === "Sign Up" && !isOtpSent && !isOtpVerified) {
      if (!email.endsWith("@nitk.edu.in")) {
        setError("Access Denied. Only @nitk.edu.in emails are allowed.");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/send-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (data.success) {
          setIsOtpSent(true);
        } else {
          setError("Failed to send OTP. Try again.");
        }
      } catch (err) {
        setError("Server error. Try again.");
      }
      return;
    }

    // STEP 2: Verify OTP
    if (currState === "Sign Up" && isOtpSent && !isOtpVerified) {
      try {
        const response = await fetch("http://localhost:5000/verify-otp", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, otp }),
        });
        const data = await response.json();
        if (data.success) {
          setIsOtpVerified(true);
          setIsDataSubmitted(true);
        } else {
          setError("Invalid OTP. Please try again.");
        }
      } catch (err) {
        setError("Server error. Try again.");
      }
      return;
    }

    // STEP 3: Complete signup after OTP verified
    setLoading(true);
    if (currState === "Sign Up" && isOtpVerified) {
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
      await login("login", { email, password });
    }
    setLoading(false);
  };

  const handleStateChange = (newState) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrState(newState);
      setIsDataSubmitted(false);
      setIsOtpSent(false);
      setIsOtpVerified(false);
      setIsTransitioning(false);
    }, 300);
  };

  return (
    <div
      className={`min-h-screen bg-cover bg-center flex items-center justify-center gap-8 sm:justify-evenly max-sm:flex-col backdrop-blur-2xl relative overflow-hidden animate-fadeIn transition-all duration-500 ${
        currState === "Login" ? "flex-row-reverse" : ""
      }`}
    >
      <JumpingBalls isTransitioning={isTransitioning} />

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

        {/* --- SIGN UP FIELDS --- */}
        {currState === "Sign Up" && !isDataSubmitted ? (
          <>
            {!isOtpSent && (
              <>
                <input
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  type="text"
                  placeholder="Full Name"
                  required
                  className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300"
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email Address"
                  required
                  className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  required
                  className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300"
                />
              </>
            )}

            {/* --- OTP input field --- */}
            {isOtpSent && !isOtpVerified && (
              <div className="flex flex-col gap-2">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  required
                  className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300"
                />
              </div>
            )}
          </>
        ) : currState === "Sign Up" && isDataSubmitted ? (
          <>
            {/* Other sign-up details after OTP verification */}
            <div className="flex gap-4">
              <input
                onChange={(e) => setRollNumber(e.target.value)}
                value={rollNumber}
                type="text"
                placeholder="Roll Number"
                required
                className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 w-1/2"
              />
              <select
                onChange={(e) => setCurrentYear(e.target.value)}
                value={currentYear}
                required
                className="p-2 border border-gray-500 rounded-md bg-white/10 text-gray-300 w-1/2"
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
                className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 w-1/2"
              />
              <input
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                type="text"
                placeholder="Course"
                required
                className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 w-1/2"
              />
            </div>

            <div className="flex gap-4">
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                required
                className="p-2 border border-gray-500 rounded-md bg-white/10 text-gray-300 w-1/2"
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
                className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 w-1/2"
              />
            </div>

            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              rows={2}
              placeholder="Provide Short bio..."
              required
              className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 resize-none w-full"
            />
          </>
        ) : (
          <>
            {/* LOGIN FORM */}
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email Address"
              required
              className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300"
            />
          </>
        )}

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <button
          type="submit"
          disabled={loading}
          className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer hover:from-purple-500 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {loading
            ? "Loading..."
            : currState === "Sign Up"
            ? !isOtpSent
              ? "Send OTP"
              : !isOtpVerified
              ? "Verify OTP"
              : "Create Account"
            : "Login Now"}
        </button>

        <div className="flex flex-col gap-2">
          {currState === "Sign Up" ? (
            <p className="text-sm text-gray-600">
              Already have an account?
              <span
                onClick={() => handleStateChange("Login")}
                className="font-medium text-violet-500 cursor-pointer hover:underline ml-1"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Create an account
              <span
                onClick={() => handleStateChange("Sign Up")}
                className="font-medium text-violet-500 cursor-pointer hover:underline ml-1"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>

      <LoginPageAnimation/>
    </div>
  );
};

export default LoginPage;
