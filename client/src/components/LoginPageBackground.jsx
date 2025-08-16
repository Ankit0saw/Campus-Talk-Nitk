import React from 'react';

export const JumpingBalls = () => {
  return (
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-40 animate-jumpBounce1"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-50 animate-jumpBounce2"></div>
        <div className="absolute bottom-40 left-20 w-16 h-16 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-30 animate-jumpBounce3"></div>
        <div className="absolute top-60 right-1/3 w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-45 animate-jumpBounce4"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-35 animate-jumpBounce5"></div>
        <div className="absolute top-32 left-1/3 w-9 h-9 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-40 animate-jumpBounce6"></div>
        
        {/* Original small floating elements */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-purple-400 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-violet-400 rounded-full opacity-40 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-indigo-400 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-60 left-1/2 w-2 h-2 bg-purple-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-violet-300 rounded-full opacity-30 animate-ping"></div>
      </div>
  )
}

export const RotatingCircles = ({ isTransitioning }) => {
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
  )
}