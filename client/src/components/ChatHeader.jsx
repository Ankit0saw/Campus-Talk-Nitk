import React, { useContext } from "react";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";
import { ChatContext } from "../../context/ChatContext";

const ChatHeader = () => {
  const { selectedUser, setSelectedUser } = useContext(ChatContext);
  const { onlineUsers } = useContext(AuthContext);

  if (!selectedUser) return null;

  return (
    <div className="flex items-center gap-3 py-3 mx-4 border-b border-stone-500">
      <img
        src={selectedUser.profilePic || assets.avatar_icon}
        alt=""
        className="w-8 rounded-full"
      />
      <p className="flex-1 text-lg text-white flex items-center gap-2">
        {selectedUser.fullName}
        {onlineUsers.includes(selectedUser._id) && (
          <span className="w-2 h-2 rounded-full bg-green-500"></span>
        )}
      </p>
      <img
        onClick={() => setSelectedUser(null)}
        src={assets.arrow_icon}
        alt=""
        className="md:hidden max-w-7 cursor-pointer"
      />
      <img src={assets.help_icon} alt="" className="max-md:hidden max-w-5" />
    </div>
  );
};

export default ChatHeader;
