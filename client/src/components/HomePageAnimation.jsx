import React, { useEffect } from "react";

export const HomePageAnimation = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      /* === HOMEPAGE ANIMATION STYLES === */

      /* Jumping Balls */
      @keyframes jumpBounce1 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-50px) scale(1.1);}50%{transform:translateY(-80px) scale(1.05);}75%{transform:translateY(-30px) scale(1.08);} }
      @keyframes jumpBounce2 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-40px) scale(1.1);}50%{transform:translateY(-65px) scale(1.05);}75%{transform:translateY(-25px) scale(1.08);} }
      @keyframes jumpBounce3 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-60px) scale(1.1);}50%{transform:translateY(-90px) scale(1.05);}75%{transform:translateY(-35px) scale(1.08);} }
      @keyframes jumpBounce4 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-45px) scale(1.1);}50%{transform:translateY(-70px) scale(1.05);}75%{transform:translateY(-28px) scale(1.08);} }
      @keyframes jumpBounce5 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-55px) scale(1.1);}50%{transform:translateY(-85px) scale(1.05);}75%{transform:translateY(-32px) scale(1.08);} }
      @keyframes jumpBounce6 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-48px) scale(1.1);}50%{transform:translateY(-75px) scale(1.05);}75%{transform:translateY(-30px) scale(1.08);} }
      @keyframes jumpBounce7 { 0%,100%{transform:translateY(0) scale(1);}25%{transform:translateY(-65px) scale(1.1);}50%{transform:translateY(-95px) scale(1.05);}75%{transform:translateY(-40px) scale(1.08);} }

      .animate-jumpBounce1 { animation: jumpBounce1 4s ease-in-out infinite; }
      .animate-jumpBounce2 { animation: jumpBounce2 3.5s ease-in-out infinite 0.5s; }
      .animate-jumpBounce3 { animation: jumpBounce3 4.5s ease-in-out infinite 1s; }
      .animate-jumpBounce4 { animation: jumpBounce4 3.8s ease-in-out infinite 1.5s; }
      .animate-jumpBounce5 { animation: jumpBounce5 4s ease-in-out infinite 1s; }
      .animate-jumpBounce6 { animation: jumpBounce6 3.7s ease-in-out infinite 1.2s; }
      .animate-jumpBounce7 { animation: jumpBounce7 4.2s ease-in-out infinite 2.1s; }

      /* Floating */
      @keyframes float { 0%,100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-10px) rotate(2deg); } }
      .animate-float { animation: float 6s ease-in-out infinite; }

      /* Shimmer */
      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }
      .animate-shimmer {
        background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.25) 50%, rgba(255,255,255,0.1) 75%);
        background-size: 200% 100%;
        animation: shimmer 4s infinite;
      }

      /* Morphing shapes */
      @keyframes morph {
        0%,100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
        50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      }
      .animate-morph { animation: morph 8s ease-in-out infinite; }

      /* Shooting stars */
      @keyframes shootingStar {
        0% { transform: translateX(0) translateY(0) rotate(45deg); opacity: 1; }
        100% { transform: translateX(300px) translateY(-300px) rotate(45deg); opacity: 0; }
      }
      .animate-shootingStar {
        animation: shootingStar 4s linear infinite;
      }

      /* Breathe (used for logo pulse) */
      @keyframes breathe { 0%,100% { transform: scale(1); } 50% { transform: scale(1.1); } }
      .animate-breathe { animation: breathe 5s ease-in-out infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return null;
};
