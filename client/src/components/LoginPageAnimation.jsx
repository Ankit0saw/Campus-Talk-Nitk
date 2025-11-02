import React, { useEffect } from "react";

export const LoginPageAnimation = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes slideInFromLeft { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
      @keyframes slideInFromRight { from { opacity: 0; transform: translateX(30px); } to { opacity: 1; transform: translateX(0); } }
      @keyframes slideInFromBottom { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes breathe { 0%, 100% { transform: scale(1.15); } 50% { transform: scale(1.05); } }
      @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 33% { transform: translateY(-10px) rotate(2deg); } 66% { transform: translateY(5px) rotate(-1deg); } }
      @keyframes typewriter { from { width: 0; } to { width: 100%; } }

      @keyframes jumpBounce1 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-40px) scale(1.1);}50%{transform:translateY(-60px) scale(1.05);}75%{transform:translateY(-25px) scale(1.08);} }
      @keyframes jumpBounce2 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-35px) scale(1.1);}50%{transform:translateY(-55px) scale(1.05);}75%{transform:translateY(-20px) scale(1.08);} }
      @keyframes jumpBounce3 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-50px) scale(1.1);}50%{transform:translateY(-70px) scale(1.05);}75%{transform:translateY(-30px) scale(1.08);} }
      @keyframes jumpBounce4 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-45px) scale(1.1);}50%{transform:translateY(-65px) scale(1.05);}75%{transform:translateY(-28px) scale(1.08);} }
      @keyframes jumpBounce5 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-38px) scale(1.1);}50%{transform:translateY(-58px) scale(1.05);}75%{transform:translateY(-22px) scale(1.08);} }
      @keyframes jumpBounce6 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-42px) scale(1.1);}50%{transform:translateY(-62px) scale(1.05);}75%{transform:translateY(-26px) scale(1.08);} }

      @keyframes rotateCircle1 { 0%{transform:rotate(0);}100%{transform:rotate(360deg);} }
      @keyframes rotateCircle2 { 0%{transform:rotate(0);}100%{transform:rotate(-360deg);} }
      @keyframes rotateCircle3 { 0%{transform:rotate(0);}100%{transform:rotate(360deg);} }

      .animate-fadeIn { animation: fadeIn 0.8s ease-out; }
      .animate-slideInFromLeft { animation: slideInFromLeft 0.6s ease-out; }
      .animate-slideInFromRight { animation: slideInFromRight 0.6s ease-out; }
      .animate-slideInFromBottom { animation: slideInFromBottom 0.6s ease-out; }
      .animate-breathe { animation: breathe 5s ease-in-out infinite; }
      .animate-float { animation: float 6s ease-in-out infinite; }
      .animate-float-delayed { animation: float 6s ease-in-out infinite 2s; }
      .animate-float-slow { animation: float 8s ease-in-out infinite 1s; }
      .animate-typewriter { overflow:hidden; border-right:2px solid; white-space:nowrap; animation:typewriter 1s steps(10) 1s both; }

      .animate-jumpBounce1 { animation: jumpBounce1 3s ease-in-out infinite; }
      .animate-jumpBounce2 { animation: jumpBounce2 2.5s ease-in-out infinite 0.5s; }
      .animate-jumpBounce3 { animation: jumpBounce3 3.5s ease-in-out infinite 1s; }
      .animate-jumpBounce4 { animation: jumpBounce4 2.8s ease-in-out infinite 1.5s; }
      .animate-jumpBounce5 { animation: jumpBounce5 2.2s ease-in-out infinite 0.8s; }
      .animate-jumpBounce6 { animation: jumpBounce6 3.2s ease-in-out infinite 2s; }

      .animate-rotateCircle1 { animation: rotateCircle1 6s linear infinite; }
      .animate-rotateCircle2 { animation: rotateCircle2 8s linear infinite; }
      .animate-rotateCircle3 { animation: rotateCircle3 10s linear infinite; }

      .w-112 { width: 28rem; }
      .h-112 { height: 28rem; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <>
      <JumpingBalls />
    </>
  );
};

// 🌈 Floating Bouncing Balls
export const JumpingBalls = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 animate-jumpBounce1"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-50 animate-jumpBounce2"></div>
      <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-30 animate-jumpBounce3"></div>
      <div className="absolute top-60 right-1/3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-45 animate-jumpBounce4"></div>
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-35 animate-jumpBounce5"></div>
      <div className="absolute top-32 left-1/3 w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 animate-jumpBounce6"></div>

      {/* Small floating elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-violet-400 rounded-full opacity-40 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-20 w-4 h-4 bg-indigo-400 rounded-full opacity-20 animate-float-slow"></div>
      <div className="absolute top-60 left-1/2 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-3 h-3 bg-violet-300 rounded-full opacity-30 animate-ping"></div>
    </div>
  );
};

// 🔵 Rotating Circle Orbits
export const RotatingCircles = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-red-400/30 rounded-full animate-rotateCircle1">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-red-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-112 h-112 border-2 border-teal-400/25 rounded-full animate-rotateCircle2">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-teal-400 rounded-full"></div>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 border-2 border-blue-400/20 rounded-full animate-rotateCircle3">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  );
};
