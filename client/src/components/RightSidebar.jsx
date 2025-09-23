import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";

const RightSidebar = () => {
  const { selectedUser, messages } = useContext(ChatContext);
  const { logout, onlineUsers } = useContext(AuthContext);
  const [msgFiles, setMsgFiles] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  // Get all the images from the messages and set them to state
  useEffect(() => {
    setMsgFiles(
      messages
        .filter((msg) => msg.image || msg.video)
        .map((msg) => msg.image || msg.video)
    );
  }, [messages]);

  // Reset expanded state when selected user changes
  useEffect(() => {
    setIsExpanded(false);
  }, [selectedUser]);

  // Format date function
  const formatDate = (dateString) => {
    if (!dateString) return "Not specified";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    selectedUser && (
      <div
        className={`bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll ${
          selectedUser ? "max-md:hidden" : ""
        } pb-20`}
      >
        {/* User Basic Info */}
        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt=""
            className="w-20 aspect-[1/1] rounded-full"
          />
          <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
            {onlineUsers.includes(selectedUser._id) && (
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
            )}
            {selectedUser.fullName}
          </h1>
          <p className="px-10 mx-auto text-center text-gray-300">
            {selectedUser.bio || "No bio available"}
          </p>

          {/* Expand/Collapse Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-2 flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors cursor-pointer text-sm"
          >
            <span>{isExpanded ? "Show Less" : "View Details"}</span>
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Expanded User Details */}
        <div
          className={`px-5 transition-all duration-300 overflow-hidden ${
            isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2">
            <h3 className="text-sm font-medium text-violet-400 mb-3">
              User Details
            </h3>

            <div className="space-y-2 text-xs">
              {/* Full Name */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Full Name:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.fullName}
                </span>
              </div>

              {/* Email */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Email:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.email}
                </span>
              </div>

              {/* Roll Number */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Roll Number:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.rollNumber || "Not specified"}
                </span>
              </div>

              {/* Gender */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Gender:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.gender || "Not specified"}
                </span>
              </div>

              {/* Date of Birth */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">
                  Date of Birth:
                </span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {formatDate(selectedUser.dob)}
                </span>
              </div>

              {/* Department */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Department:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.department || "Not specified"}
                </span>
              </div>

              {/* Course */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Course:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.course || "Not specified"}
                </span>
              </div>

              {/* Current Year */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Current Year:</span>
                <span className="text-gray-200 text-right flex-1 ml-2">
                  {selectedUser.currentYear
                    ? `${selectedUser.currentYear}${
                        selectedUser.currentYear === 1
                          ? "st"
                          : selectedUser.currentYear === 2
                          ? "nd"
                          : selectedUser.currentYear === 3
                          ? "rd"
                          : "th"
                      } Year`
                    : "Not specified"}
                </span>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Status:</span>
                <span
                  className={`text-right flex-1 ml-2 ${
                    onlineUsers.includes(selectedUser._id)
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {onlineUsers.includes(selectedUser._id)
                    ? "Online"
                    : "Offline"}
                </span>
              </div>

              {/* Is Verified */}
              <div className="flex items-center justify-between">
                <span className="text-gray-400 font-medium">Verified:</span>
                <span
                  className={`text-right flex-1 ml-2 ${
                    selectedUser.isVerified
                      ? "text-green-400"
                      : "text-orange-400"
                  }`}
                >
                  {selectedUser.isVerified ? "Verified" : "Pending"}
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#ffffff50] my-4" />

        {/* Media Section */}
        <div className="px-5 text-xs">
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm font-medium">Shared Media</p>
            <span className="text-gray-400 text-xs">({msgFiles.length})</span>
          </div>

          {msgFiles.length > 0 ? (
            <div className="mt-2 max-h-[200px] overflow-y-scroll grid grid-cols-2 gap-2 opacity-80">
              {msgFiles.map((url, index) => (
                <div
                  key={index}
                  onClick={() => window.open(url)}
                  className="cursor-pointer rounded hover:opacity-100 transition-opacity"
                >
                  {url.includes("data:video") || url.endsWith(".mp4") ? (
                    <video
                      src={url}
                      className="h-20 w-full object-cover rounded-md"
                    />
                  ) : (
                    <img
                      src={url}
                      alt="Shared media"
                      className="h-20 w-full object-cover rounded-md"
                    />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-gray-400">
              <svg
                className="w-12 h-12 mx-auto mb-2 opacity-50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p>No media shared yet</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="fixed bottom-0 right-0 p-2">
          <div className="flex lg:flex-row sm:flex-col md:gap-y-2 items-center justify-center gap-x-4">
            <button
              onClick={() => navigate("/profile")}
              className="bg-gradient-to-r from-purple-400 to-violet-600 hover:from-purple-500 hover:to-violet-700 text-white border-none font-light py-2 px-8 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              Profile
            </button>
            <button
              onClick={() => logout()}
              className="bg-gradient-to-r from-red-400 to-red-600 hover:from-red-500 hover:to-red-700 text-white border-none font-light py-2 px-8 rounded-full cursor-pointer transition-all duration-300 transform hover:scale-105"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RightSidebar;
