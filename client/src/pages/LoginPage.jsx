import React, { useContext, useState } from "react";
import assets from "../assets/assets.js";
import { AuthContext } from "../../context/AuthContext.jsx";
import { LoginPageAnimation, JumpingBalls, RotatingCircles } from "../components/LoginPageAnimation";
import LoginPageAuthForm from "./LoginPageAuthForm.jsx";

const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign Up");
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

      <LoginPageAuthForm
        currState={currState}
        setCurrState={setCurrState}
        isDataSubmitted={isDataSubmitted}
        setIsDataSubmitted={setIsDataSubmitted}
        isTransitioning={isTransitioning}
        handleStateChange={handleStateChange}
      />

      <LoginPageAnimation />
    </div>
  );
};

export default LoginPage;
