import React from "react";

const ProfileImageSection = ({ authUser, selectedImg, setSelectedImg, assets }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white/5 lg:w-1/3">
      <div className="relative">
        <img
          className="w-32 h-32 rounded-full object-cover border-4 border-violet-400 shadow-lg"
          src={
            selectedImg
              ? URL.createObjectURL(selectedImg)
              : authUser?.profilePic || assets.avatar_icon
          }
          alt="Profile"
        />
        <label
          htmlFor="avatar"
          className="absolute bottom-0 right-0 bg-violet-600 hover:bg-violet-700 p-2 rounded-full cursor-pointer transition-colors"
        >
          <input
            onChange={(e) => setSelectedImg(e.target.files[0])}
            type="file"
            id="avatar"
            accept=".png, .jpg, .jpeg"
            hidden
          />
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </label>
      </div>
      <p className="text-center text-sm text-gray-400 mt-4">
        Click the + icon to upload new profile picture
      </p>
    </div>
  );
};

export default ProfileImageSection;
