import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext.jsx";
import assets from "../assets/assets.js";

const LoginPageAuthForm = ({ currState, setCurrState, isDataSubmitted, setIsDataSubmitted, isTransitioning, handleStateChange}) => {
  const { login } = useContext(AuthContext);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [course, setCourse] = useState("");
  const [currentYear, setCurrentYear] = useState("");
  const [dobType, setDobType] = useState("date");
  const [dob, setDob] = useState("");
  const [profilePic, setProfilePic] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // OTP
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setError("");

    if (currState === "Sign Up" && !isOtpSent && !isOtpVerified) {
      if (!email.endsWith("@nitk.edu.in")) {
        setError("Access Denied. Only @nitk.edu.in emails are allowed.");
        return;
      }

      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/otp/send-otp`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
        const data = await response.json();
        if (data.success) setIsOtpSent(true);
        else setError("Failed to send OTP. Try again.");
      } catch (err) {
        setError("Server error. Try again.");
      }
      return;
    }

    if (currState === "Sign Up" && isOtpSent && !isOtpVerified) {
      try {
        const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/otp/verify-otp`, {
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

    setLoading(true);
    if (currState === "Sign Up" && isOtpVerified) {
      const signupData = { fullName, email, password, bio, gender, rollNumber, courseTitle, course, currentYear, dob };
      await login("signup", signupData);
    } else if (currState === "Login") {
      await login("login", { email, password });
    }
    setLoading(false);
  };

  return (
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

      {/* --- SIGN UP --- */}
      {currState === "Sign Up" && !isDataSubmitted ? (
        <>
          {!isOtpSent && (
            <>
              <input onChange={(e) => setFullName(e.target.value)} value={fullName} type="text" placeholder="Full Name" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300" />
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300" />
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300" />
            </>
          )}
          {isOtpSent && !isOtpVerified && (
            <div className="flex flex-col gap-2">
              <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="Enter OTP" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300" />
            </div>
          )}
        </>
      ) : currState === "Sign Up" && isDataSubmitted ? (
        <>
          <div className="flex gap-4">
            <input onChange={(e) => setRollNumber(e.target.value)} value={rollNumber} type="text" placeholder="Roll Number" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 w-1/2" />
            <select onChange={(e) => setCurrentYear(e.target.value)} value={currentYear} required className="p-2 border border-gray-500 rounded-md bg-white/10 text-gray-300 w-1/2">
              <option value="" disabled>Select Current Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
            </select>
          </div>

          <div className="flex gap-4">
            <select onChange={(e) => setCourseTitle(e.target.value)} value={courseTitle} required className="p-2 border border-gray-500 rounded-md bg-white/10 text-gray-300 w-1/2" >
              <option value="" disabled selected>Select Course Title</option>
              <option value="MTech">MTech</option>
              <option value="BTech">BTech</option>
              <option value="UG">UG</option>
              <option value="PG">PG</option>
            </select>
            
            <select onChange={(e) => setCourse(e.target.value)} value={course} type="text" placeholder="Course Enrolled" required className="p-2 border border-gray-500 rounded-md bg-white/10 text-gray-300 w-1/2" >
              <option value="" disabled selected>Select Course</option>
              <option value="CSE">Computer Science and Engineering (CSE)</option>
              <option value="ECE">Electronics and Communication Engineering (ECE)</option>
              <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
              <option value="Civil">Civil Engineering</option>
              <option value="Mechanical">Mechanical Engineering</option>
              <option value="Chemical">Chemical Engineering</option>
              <option value="IT">Information Technology (IT)</option>
              <option value="MME">Metallurgical and Materials Engineering (MME)</option>
              <option value="Mining">Mining Engineering</option>
              <option value="VLSI">ECE (VLSI Design)</option>
              <option value="CDS">Computational and Data Science (CDS)</option>
              <option value="MCA">MCA - Master of Computer Applications</option>
              <option value="MBA">MBA - Master of Business Administration</option>
              <option value="PhD">Ph.D. / Research Scholar</option>
            </select>
          </div>

          <div className="flex gap-4">
            <select onChange={(e) => setGender(e.target.value)} value={gender} required className="p-2 border border-gray-500 rounded-md bg-white/10 text-gray-300 w-1/2">
              <option value="" disabled selected>Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Can't Say">Can't Say</option>
            </select>
            <input onChange={(e) => setDob(e.target.value)} value={dob} type={dobType} onFocus={() => setDobType("date")} onBlur={() => (dob === "" ? setDobType("text") : null)} placeholder="Date of Birth" className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 w-1/2" />
          </div>

          <textarea onChange={(e) => setBio(e.target.value)} value={bio} rows={2} placeholder="Provide Short bio..." required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300 resize-none w-full" />
        </>
      ) : (
        <>
          <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email Address" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300" />
          <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required className="p-2 border border-gray-500 rounded-md bg-white/10 placeholder-gray-300" />
        </>
      )}

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

      <button type="submit" disabled={loading} className="py-3 bg-gradient-to-r from-purple-400 to-violet-600 text-white rounded-md cursor-pointer hover:from-purple-500 hover:to-violet-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
        {loading ? "Loading..." : currState === "Sign Up" ? (!isOtpSent ? "Send OTP" : !isOtpVerified ? "Verify OTP" : "Create Account") : "Login Now"}
      </button>

      <div className="flex flex-col gap-2">
        {currState === "Sign Up" ? (
          <p className="text-sm text-gray-600">
            Already have an account?
            <span onClick={() => handleStateChange("Login")} className="font-medium text-violet-500 cursor-pointer hover:underline ml-1">Login here</span>
          </p>
        ) : (
          <p className="text-sm text-gray-600">
            Create an account
            <span onClick={() => handleStateChange("Sign Up")} className="font-medium text-violet-500 cursor-pointer hover:underline ml-1">Click here</span>
          </p>
        )}
      </div>
    </form>
  );
};

export default LoginPageAuthForm;
