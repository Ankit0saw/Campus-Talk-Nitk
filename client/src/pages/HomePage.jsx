import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Users,
  Shield,
  Zap,
  Globe,
  Heart,
  Star,
  Send,
  Video,
  Phone,
  Image,
  Smile,
  Lock,
  Bell,
} from "lucide-react";
import { HomePageAnimation } from "../components/HomePageAnimation";

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
      description:
        "Lightning-fast message delivery with read receipts and typing indicators.",
      color: "from-purple-400 to-violet-600",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Calls",
      description:
        "Crystal clear HD video calls with screen sharing and recording capabilities.",
      color: "from-green-400 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "End-to-End Encryption",
      description:
        "Military-grade security ensures your conversations remain completely private.",
      color: "from-red-400 to-pink-600",
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Media Sharing",
      description:
        "Share photos, videos, documents, and files of any size instantly.",
      color: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Platform",
      description:
        "Seamlessly sync across all your devices - mobile, desktop, and web.",
      color: "from-cyan-400 to-blue-600",
    },
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

        {/* Floating Message Bubbles */}
        <div className="absolute top-32 left-1/4 w-8 h-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full opacity-20 animate-float"></div>
        <div className="absolute bottom-32 right-1/4 w-10 h-7 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full opacity-25 animate-float-delayed"></div>
        <div className="absolute top-96 right-20 w-6 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-30 animate-float-slow"></div>
        <div className="absolute bottom-96 left-16 w-9 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-20 animate-float-reverse"></div>

        {/* Pulsing Dots */}
        <div className="absolute top-16 right-16 w-4 h-4 bg-purple-400 rounded-full opacity-40 animate-pulse-slow"></div>
        <div className="absolute bottom-16 left-16 w-3 h-3 bg-blue-400 rounded-full opacity-50 animate-pulse-medium"></div>
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse-fast"></div>
        <div className="absolute bottom-1/3 left-10 w-5 h-5 bg-yellow-400 rounded-full opacity-35 animate-pulse-ultra"></div>

        {/* Morphing Shapes */}
        <div className="absolute top-36 left-1/2 w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 animate-morph1 opacity-30"></div>
        <div className="absolute bottom-36 right-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 animate-morph2 opacity-25"></div>

        {/* Floating Icons */}
        <div className="absolute top-44 right-32 text-purple-400 opacity-20 animate-floatIcon1 text-2xl">
          💬
        </div>
        <div className="absolute bottom-44 left-32 text-blue-400 opacity-25 animate-floatIcon2 text-xl">
          📱
        </div>
        <div className="absolute top-72 left-24 text-green-400 opacity-30 animate-floatIcon3 text-lg">
          🎯
        </div>
        <div className="absolute bottom-72 right-24 text-yellow-400 opacity-20 animate-floatIcon4 text-2xl">
          ⚡
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 container mx-auto px-6 pt-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
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
            Connect, communicate, and collaborate with the peers of your
            College. Experience seamless conversations across all your devices.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideInFromBottom animation-delay-400">
            <a
              href="/login"
              className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-violet-600 text-white rounded-full font-semibold transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Send className="w-5 h-5" />
                Start Chatting Now
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 animate-slideInFromBottom animation-delay-600">
          <div className="relative text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group animate-statsPulse">
            <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors duration-300 animate-countUp">
              10M+
            </div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Active Users
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-110 hover:-rotate-1 group animate-statsPulse animation-delay-200">
            <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors duration-300 animate-countUp">
              99.9%
            </div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Uptime
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="relative text-center p-6 bg-white/5 backdrop-blur-md rounded-2xl hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-110 hover:rotate-1 group animate-statsPulse animation-delay-400">
            <div className="text-3xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors duration-300 animate-countUp">
              1B+
            </div>
            <div className="text-gray-300 group-hover:text-white transition-colors duration-300">
              Messages Sent
            </div>
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
                  activeFeature === index
                    ? "transform scale-105"
                    : "hover:transform hover:scale-105 hover:rotate-1"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Animated background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 animate-gradientWave`}
                ></div>

                {/* Floating particles inside card */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/30 rounded-full animate-particleFloat1"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-white/40 rounded-full animate-particleFloat2"></div>
                <div className="absolute top-1/2 right-4 w-1.5 h-1.5 bg-white/20 rounded-full animate-particleFloat3"></div>

                <div
                  className={`relative z-10 w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 animate-iconBounce shadow-lg`}
                >
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
      </div>

      {/* Load animations */}
      <HomePageAnimation />
    </div>
  );
};

export default HomePage;
