import React, { useState, useEffect } from 'react';
import { MessageCircle, Users, Shield, Zap, Globe, Heart, Star, Send, Video, Phone, Image, Smile, Lock, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Instant Messaging",
      description: "Lightning-fast message delivery with read receipts and typing indicators.",
      color: "from-purple-400 to-violet-600"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Calls",
      description: "Crystal clear HD video calls with screen sharing and recording capabilities.",
      color: "from-green-400 to-teal-600"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description: "Military-grade security ensures your conversations remain completely private.",
      color: "from-red-400 to-pink-600"
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Media Sharing",
      description: "Share photos, videos, documents, and files of any size instantly.",
      color: "from-yellow-400 to-orange-600"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Platform",
      description: "Seamlessly sync across all your devices - mobile, desktop, and web.",
      color: "from-cyan-400 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-cover bg-center backdrop-blur-xl overflow-hidden relative">
              {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Jumping Gradient Balls */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-30 animate-jumpBounce1 blur-sm"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full opacity-40 animate-jumpBounce2 blur-sm"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-br from-green-400 to-teal-400 rounded-full opacity-25 animate-jumpBounce3 blur-sm"></div>
        <div className="absolute top-60 right-1/3 w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-35 animate-jumpBounce4 blur-sm"></div>
        <div className="absolute bottom-20 right-10 w-18 h-18 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full opacity-30 animate-jumpBounce5 blur-sm"></div>
        <div className="absolute top-80 left-1/3 w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-35 animate-jumpBounce6 blur-sm"></div>
        <div className="absolute bottom-60 right-1/4 w-22 h-22 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-25 animate-jumpBounce7 blur-sm"></div>
        
        {/* Floating Message Bubbles with More Variety */}
        <div className="absolute top-32 left-1/4 w-8 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-7 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute top-96 right-20 w-6 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-96 left-16 w-9 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 animate-float-reverse"></div>
        
        {/* Pulsing Dots */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-16 left-16 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-pulse-medium"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse-fast"></div>
        <div className="absolute bottom-1/3 left-10 w-5 h-5 bg-yellow-400 rounded-full opacity-35 animate-pulse-ultra"></div>
        
        {/* Shooting Stars */}
        <div className="absolute top-24 left-0 w-32 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-shootingStar1"></div>
        <div className="absolute top-64 right-0 w-40 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-shootingStar2"></div>
        <div className="absolute bottom-48 left-0 w-28 h-0.5 bg-gradient-to-r from-transparent via-pink-400 to-transparent animate-shootingStar3"></div>
        
        {/* Morphing Shapes */}
        <div className="absolute top-36 left-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 animate-morph1 opacity-30"></div>
        <div className="absolute bottom-36 right-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 animate-morph2 opacity-25"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-44 right-32 text-purple-400 opacity-20 animate-floatIcon1 text-2xl">💬</div>
        <div className="absolute bottom-44 left-32 text-blue-400 opacity-25 animate-floatIcon2 text-xl">📱</div>
        <div className="absolute top-72 left-24 text-green-400 opacity-30 animate-floatIcon3 text-lg">🎯</div>
        <div className="absolute bottom-72 right-24 text-yellow-400 opacity-20 animate-floatIcon4 text-2xl">⚡</div>
      </div>

      {/* Hero Section */}
      <div className={`relative z-10 container mx-auto px-6 pt-16 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6 relative">
            <div className="relative">
              <MessageCircle className="w-20 h-20 text-purple-400 animate-breathe drop-shadow-2xl" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-pulse"></div>
            </div>
          </div>
          
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-violet-400 bg-clip-text text-transparent mb-6 animate-slideInFromBottom">
            CampusTalk-NITK
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slideInFromBottom animation-delay-200">
            Connect, communicate, and collaborate with the peers of your College. 
            Experience seamless conversations across all your devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInFromBottom animation-delay-400">
            <Link to="/login" className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-semibold transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Start Chatting Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
            
            <button className="px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105">
              Watch Demo
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slideInFromBottom animation-delay-600">
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group animate-statsPulse">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300 animate-countUp">10M+</div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Active Users</div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-110 hover:-rotate-1 group animate-statsPulse animation-delay-200">
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300 animate-countUp">99.9%</div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Uptime</div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group animate-statsPulse animation-delay-400">
            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300 animate-countUp">1B+</div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">Messages Sent</div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 animate-slideInFromBottom">
            Powerful Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative p-8 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 cursor-pointer group animate-slideInFromBottom overflow-hidden ${
                  activeFeature === index ? 'transform scale-105' : 'hover:transform hover:scale-105 hover:rotate-1'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradientWave`}></div>
                
                {/* Floating particles inside card */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-particleFloat1"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-particleFloat2"></div>
                <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-particleFloat3"></div>
                
                <div className={`relative z-10 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-iconBounce shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="relative z-10 text-xl font-semibold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-500 animate-textShimmer">
                  {feature.title}
                </h3>
                
                <p className="relative z-10 text-gray-400 group-hover:text-gray-200 transition-colors duration-500">
                  {feature.description}
                </p>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Features Bar */}
        <div className="relative bg-white/5 backdrop-blur-md rounded-2xl p-6 mb-20 animate-slideInFromBottom animation-delay-800 overflow-hidden group hover:bg-white/8 transition-all duration-500">
          {/* Animated background wave */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 animate-waveFlow opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          
          <div className="relative z-10 flex flex-wrap justify-center items-center gap-6">
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 animate-featureBob animation-delay-100">
              <Phone className="w-5 h-5 text-green-400 animate-phoneRing" />
              <span>Voice Calls</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 animate-featureBob animation-delay-200">
              <Smile className="w-5 h-5 text-yellow-400 animate-emojiWiggle" />
              <span>Custom Emojis</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 animate-featureBob animation-delay-300">
              <Lock className="w-5 h-5 text-red-400 animate-lockShake" />
              <span>Private Chats</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 animate-featureBob animation-delay-400">
              <Bell className="w-5 h-5 text-purple-400 animate-bellRing" />
              <span>Smart Notifications</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-110 animate-featureBob animation-delay-500">
              <Star className="w-5 h-5 text-orange-400 animate-starTwinkle" />
              <span>Message Reactions</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center pb-16 animate-slideInFromBottom animation-delay-1000">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Communication?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust ChatVibe for their daily conversations. 
            Start your journey today - it's completely free!
          </p>
          
          <button className="group px-10 py-5 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-bold text-lg transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl hover:shadow-2xl relative overflow-hidden">
            <span className="relative z-10 flex items-center gap-3">
              <Heart className="w-6 h-6" />
              Get Started Free
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>
      </div>

      <style jsx>{`
              @keyframes jumpBounce6 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-48px) scale(1.1); }
          50% { transform: translateY(-75px) scale(1.05); }
          75% { transform: translateY(-30px) scale(1.08); }
        }

        @keyframes jumpBounce7 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-65px) scale(1.1); }
          50% { transform: translateY(-95px) scale(1.05); }
          75% { transform: translateY(-40px) scale(1.08); }
        }

        @keyframes shootingStar1 {
          0% { transform: translateX(-100px) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) rotate(45deg); opacity: 0; }
        }

        @keyframes shootingStar2 {
          0% { transform: translateX(100px) rotate(-45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(calc(-100vw - 100px)) rotate(-45deg); opacity: 0; }
        }

        @keyframes shootingStar3 {
          0% { transform: translateX(-100px) rotate(30deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(calc(100vw + 100px)) rotate(30deg); opacity: 0; }
        }

        @keyframes morph1 {
          0%, 100% { border-radius: 50%; transform: rotate(0deg) scale(1); }
          25% { border-radius: 20%; transform: rotate(90deg) scale(1.2); }
          50% { border-radius: 0%; transform: rotate(180deg) scale(0.8); }
          75% { border-radius: 30%; transform: rotate(270deg) scale(1.1); }
        }

        @keyframes morph2 {
          0%, 100% { border-radius: 0%; transform: rotate(0deg) scale(1); }
          25% { border-radius: 50%; transform: rotate(-90deg) scale(1.3); }
          50% { border-radius: 20%; transform: rotate(-180deg) scale(0.7); }
          75% { border-radius: 40%; transform: rotate(-270deg) scale(1.2); }
        }

        @keyframes floatIcon1 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-20px) rotate(10deg) scale(1.1); }
          66% { transform: translateY(10px) rotate(-5deg) scale(0.9); }
        }

        @keyframes floatIcon2 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-15px) rotate(-8deg) scale(1.2); }
          66% { transform: translateY(8px) rotate(12deg) scale(0.8); }
        }

        @keyframes floatIcon3 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-25px) rotate(15deg) scale(1.1); }
          66% { transform: translateY(12px) rotate(-10deg) scale(0.9); }
        }

        @keyframes floatIcon4 {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          33% { transform: translateY(-18px) rotate(-12deg) scale(1.3); }
          66% { transform: translateY(9px) rotate(8deg) scale(0.7); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }

        @keyframes pulse-medium {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.9; transform: scale(1.3); }
        }

        @keyframes pulse-fast {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }

        @keyframes pulse-ultra {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(3deg); }
          66% { transform: translateY(12px) rotate(-2deg); }
        }

        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(15px) rotate(-4deg); }
          66% { transform: translateY(-8px) rotate(2deg); }
        }

        @keyframes gradientWave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes particleFloat1 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          33% { transform: translateY(-10px) translateX(5px); opacity: 0.7; }
          66% { transform: translateY(-5px) translateX(-3px); opacity: 0.5; }
        }

        @keyframes particleFloat2 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.4; }
          50% { transform: translateY(-8px) translateX(-4px); opacity: 0.8; }
        }

        @keyframes particleFloat3 {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          25% { transform: translateY(-6px) translateX(3px); opacity: 0.6; }
          75% { transform: translateY(-3px) translateX(-2px); opacity: 0.4; }
        }

        @keyframes iconBounce {
          0%, 100% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.05) rotate(2deg); }
        }

        @keyframes textShimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes countUp {
          0% { transform: translateY(20px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }

        @keyframes statsPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        @keyframes waveFlow {
          0% { transform: translateX(-100%) skewX(45deg); }
          100% { transform: translateX(200%) skewX(45deg); }
        }

        @keyframes featureBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        @keyframes phoneRing {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-10deg) scale(1.1); }
          75% { transform: rotate(10deg) scale(1.1); }
        }

        @keyframes emojiWiggle {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-15deg) scale(1.2); }
          50% { transform: rotate(0deg) scale(1.1); }
          75% { transform: rotate(15deg) scale(1.2); }
        }

        @keyframes lockShake {
          0%, 100% { transform: translateX(0px); }
          25% { transform: translateX(-2px); }
          75% { transform: translateX(2px); }
        }

        @keyframes bellRing {
          0%, 100% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(-20deg) scale(1.1); }
          75% { transform: rotate(20deg) scale(1.1); }
        }

        @keyframes starTwinkle {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
          50% { transform: scale(1.3) rotate(180deg); opacity: 0.7; }
        }

        @keyframes rotateCircle3 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }
        @keyframes jumpBounce1 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-50px) scale(1.1); }
          50% { transform: translateY(-80px) scale(1.05); }
          75% { transform: translateY(-30px) scale(1.08); }
        }

        @keyframes jumpBounce2 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-40px) scale(1.1); }
          50% { transform: translateY(-65px) scale(1.05); }
          75% { transform: translateY(-25px) scale(1.08); }
        }

        @keyframes jumpBounce3 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-60px) scale(1.1); }
          50% { transform: translateY(-90px) scale(1.05); }
          75% { transform: translateY(-35px) scale(1.08); }
        }

        @keyframes jumpBounce4 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-45px) scale(1.1); }
          50% { transform: translateY(-70px) scale(1.05); }
          75% { transform: translateY(-28px) scale(1.08); }
        }

        @keyframes jumpBounce5 {
          0%, 100% { transform: translateY(0px) scale(1); }
          25% { transform: translateY(-55px) scale(1.1); }
          50% { transform: translateY(-85px) scale(1.05); }
          75% { transform: translateY(-32px) scale(1.08); }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(8px) rotate(-1deg); }
        }

        @keyframes slideInFromBottom {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes rotateCircle1 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes rotateCircle2 {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(-360deg); }
        }

        .animate-jumpBounce1 {
          animation: jumpBounce1 4s ease-in-out infinite;
        }

        .animate-jumpBounce2 {
          animation: jumpBounce2 3.5s ease-in-out infinite 0.5s;
        }

        .animate-jumpBounce3 {
          animation: jumpBounce3 4.5s ease-in-out infinite 1s;
        }

        .animate-jumpBounce4 {
          animation: jumpBounce4 3.8s ease-in-out infinite 1.5s;
        }

        .animate-jumpBounce6 {
          animation: jumpBounce6 3.7s ease-in-out infinite 1.2s;
        }

        .animate-jumpBounce7 {
          animation: jumpBounce7 4.2s ease-in-out infinite 2.1s;
        }

        .animate-shootingStar1 {
          animation: shootingStar1 8s linear infinite;
        }

        .animate-shootingStar2 {
          animation: shootingStar2 12s linear infinite 4s;
        }

        .animate-shootingStar3 {
          animation: shootingStar3 10s linear infinite 7s;
        }

        .animate-morph1 {
          animation: morph1 6s ease-in-out infinite;
        }

        .animate-morph2 {
          animation: morph2 8s ease-in-out infinite 2s;
        }

        .animate-floatIcon1 {
          animation: floatIcon1 5s ease-in-out infinite;
        }

        .animate-floatIcon2 {
          animation: floatIcon2 6s ease-in-out infinite 1s;
        }

        .animate-floatIcon3 {
          animation: floatIcon3 4s ease-in-out infinite 2s;
        }

        .animate-floatIcon4 {
          animation: floatIcon4 7s ease-in-out infinite 0.5s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 3s ease-in-out infinite 1s;
        }

        .animate-pulse-fast {
          animation: pulse-fast 2s ease-in-out infinite 0.5s;
        }

        .animate-pulse-ultra {
          animation: pulse-ultra 5s ease-in-out infinite 2s;
        }

        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }

        .animate-float-reverse {
          animation: float-reverse 9s ease-in-out infinite 3s;
        }

        .animate-gradientWave {
          animation: gradientWave 3s linear infinite;
        }

        .animate-particleFloat1 {
          animation: particleFloat1 8s ease-in-out infinite;
        }

        .animate-particleFloat2 {
          animation: particleFloat2 6s ease-in-out infinite 2s;
        }

        .animate-particleFloat3 {
          animation: particleFloat3 7s ease-in-out infinite 1s;
        }

        .animate-iconBounce {
          animation: iconBounce 4s ease-in-out infinite;
        }

        .animate-textShimmer {
          animation: textShimmer 2s linear infinite;
          background-size: 200% auto;
        }

        .animate-countUp {
          animation: countUp 1s ease-out;
        }

        .animate-statsPulse {
          animation: statsPulse 3s ease-in-out infinite;
        }

        .animate-waveFlow {
          animation: waveFlow 4s ease-in-out infinite;
        }

        .animate-featureBob {
          animation: featureBob 2s ease-in-out infinite;
        }

        .animate-phoneRing {
          animation: phoneRing 2s ease-in-out infinite;
        }

        .animate-emojiWiggle {
          animation: emojiWiggle 3s ease-in-out infinite;
        }

        .animate-lockShake {
          animation: lockShake 1s ease-in-out infinite;
        }

        .animate-bellRing {
          animation: bellRing 2s ease-in-out infinite;
        }

        .animate-starTwinkle {
          animation: starTwinkle 2s ease-in-out infinite;
        }

        .animate-rotateCircle3 {
          animation: rotateCircle3 25s linear infinite;
        }

        .animate-breathe {
          animation: breathe 6s ease-in-out infinite;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float 8s ease-in-out infinite 3s;
        }

        .animate-slideInFromBottom {
          animation: slideInFromBottom 0.8s ease-out;
        }

        .animate-rotateCircle1 {
          animation: rotateCircle1 15s linear infinite;
        }

        .animate-rotateCircle2 {
          animation: rotateCircle2 20s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-400 {
          animation-delay: 400ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-800 {
          animation-delay: 800ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .w-128 { width: 32rem; }
        .h-128 { height: 32rem; }
        .w-144 { width: 36rem; }
        .h-144 { height: 36rem; }
        .w-18 { width: 4.5rem; }
        .h-18 { height: 4.5rem; }
        .w-22 { width: 5.5rem; }
        .h-22 { height: 5.5rem; }
      `}</style>
    </div>
  );
};

export default HomePage;