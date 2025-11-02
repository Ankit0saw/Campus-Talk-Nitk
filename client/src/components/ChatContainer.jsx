import React, { useContext } from "react";
import { ChatContext } from "../../context/ChatContext";
import assets from "../assets/assets";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";

const ChatContainer = () => {
  const { selectedUser } = useContext(ChatContext);

  return selectedUser ? (
    <div className="h-full overflow-scroll relative backdrop-blur-lg">
      <ChatHeader />
      <ChatBody />
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center gap-2 text-gray-500 bg-white/10 max-md:hidden">
      <img src={assets.logo_icon} alt="" className="max-w-16" />
      <p className="text-lg font-medium text-white">Chat anytime, anywhere</p>
    </div>
  );
};

export default ChatContainer;
