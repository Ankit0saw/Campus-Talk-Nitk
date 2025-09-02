export const LoginPageAnimation = `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInFromLeft {
          from { 
            opacity: 0; 
            transform: translateX(-30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }

        @keyframes slideInFromBottom {
          from { 
            opacity: 0; 
            transform: translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1.15); }
          50% { transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(2deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }

        /* Jumping Ball Animations */
        @keyframes jumpBounce1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-40px) scale(1.1); }
          50% { transform: translateY(-60px) scale(1.05); }
          75% { transform: translateY(-25px) scale(1.08); }
        }

        @keyframes jumpBounce2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-35px) scale(1.1); }
          50% { transform: translateY(-55px) scale(1.05); }
          75% { transform: translateY(-20px) scale(1.08); }
        }

        @keyframes jumpBounce3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-50px) scale(1.1); }
          50% { transform: translateY(-70px) scale(1.05); }
          75% { transform: translateY(-30px) scale(1.08); }
        }

        @keyframes jumpBounce4 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-45px) scale(1.1); }
          50% { transform: translateY(-65px) scale(1.05); }
          75% { transform: translateY(-28px) scale(1.08); }
        }

        @keyframes jumpBounce5 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-38px) scale(1.1); }
          50% { transform: translateY(-58px) scale(1.05); }
          75% { transform: translateY(-22px) scale(1.08); }
        }

        @keyframes jumpBounce6 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-42px) scale(1.1); }
          50% { transform: translateY(-62px) scale(1.05); }
          75% { transform: translateY(-26px) scale(1.08); }
        }

        /* Rotating Circle Animations */
        @keyframes rotateCircle1 {
          0% { transform: translate(0%, 0%) rotate(0deg); }
          100% { transform: translate(0%, 0%) rotate(360deg); }
        }

        @keyframes rotateCircle2 {
          0% { transform: translate(0%, 0%) rotate(0deg); }
          100% { transform: translate(0%, 0%) rotate(-360deg); }
        }

        @keyframes rotateCircle3 {
          0% { transform: translate(0%, 0%) rotate(0deg); }
          100% { transform: translate(0%, 0%) rotate(360deg); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.6s ease-out;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.6s ease-out;
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 0.6s ease-out;
        }

        .animate-breathe {
          animation: breathe 5s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 6s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-typewriter {
          overflow: hidden;
          border-right: 2px solid;
          white-space: nowrap;
          animation: typewriter 1s steps(10) 1s both;
        }

        /* Jumping Ball Animation Classes */
        .animate-jumpBounce1 {
          animation: jumpBounce1 3s ease-in-out infinite;
        }

        .animate-jumpBounce2 {
          animation: jumpBounce2 2.5s ease-in-out infinite 0.5s;
        }

        .animate-jumpBounce3 {
          animation: jumpBounce3 3.5s ease-in-out infinite 1s;
        }

        .animate-jumpBounce4 {
          animation: jumpBounce4 2.8s ease-in-out infinite 1.5s;
        }

        .animate-jumpBounce5 {
          animation: jumpBounce5 2.2s ease-in-out infinite 0.8s;
        }

        .animate-jumpBounce6 {
          animation: jumpBounce6 3.2s ease-in-out infinite 2s;
        }

        /* Rotating Circle Animation Classes */
        .animate-rotateCircle1 {
          animation: rotateCircle1 6s linear infinite;
        }

        .animate-rotateCircle2 {
          animation: rotateCircle2 8s linear infinite;
        }

        .animate-rotateCircle3 {
          animation: rotateCircle3 10s linear infinite;
        }

        .w-112 { width: 28rem; }
        .h-112 { height: 28rem; }
`;
