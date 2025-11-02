import React, { useContext, useEffect, useRef, useState } from "react";
import assets from "../assets/assets";
import { ChatContext } from "../../context/ChatContext";
import { AuthContext } from "../../context/AuthContext";
import { formatMessageTime } from "../library/utils";
import toast from "react-hot-toast";

const ChatBody = () => {
  const { messages, selectedUser, sendMessage, getMessages } =
    useContext(ChatContext);
  const { authUser } = useContext(AuthContext);

  const [input, setInput] = useState("");
  const [uploadingFile, setUploadingFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const scrollEnd = useRef();

  useEffect(() => {
    if (selectedUser) getMessages(selectedUser._id);
  }, [selectedUser]);

  useEffect(() => {
    if (scrollEnd.current && messages)
      scrollEnd.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    await sendMessage({ text: input.trim() });
    setInput("");
  };

  const handleFileSelection = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    setUploadingFile(file);
    setUploadProgress(0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 5;
      setUploadProgress(progress);
      if (progress >= 90) clearInterval(interval);
    }, 200);

    reader.onloadend = async () => {
      let messageData = {};
      if (file.type.startsWith("image/"))
        messageData = { image: reader.result };
      else if (file.type.startsWith("video/"))
        messageData = { video: reader.result };
      else return toast.error("Unsupported file type.");

      await sendMessage(messageData);
      setUploadProgress(100);
      setUploadingFile(null);
      setUploadProgress(0);
      e.target.value = "";
    };
    reader.readAsDataURL(file);
  };

  if (!selectedUser) return null;

  return (
    <>
      {/* Chat area */}
      <div className="flex flex-col h-[calc(100%-120px)] overflow-y-scroll p-3 pb-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 justify-end ${
              msg.senderId !== authUser._id && "flex-row-reverse"
            }`}
          >
            {msg.image ? (
              <img
                src={msg.image}
                alt=""
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : msg.video ? (
              <video
                src={msg.video}
                controls
                className="max-w-[230px] border border-gray-700 rounded-lg overflow-hidden mb-8"
              />
            ) : (
              <p
                className={`p-2 max-w-[200px] md:text-sm font-light rounded-lg mb-8 break-all bg-violet-500/30 text-white ${
                  msg.senderId === authUser._id
                    ? "rounded-br-none"
                    : "rounded-bl-none"
                }`}
              >
                {msg.text}
              </p>
            )}

            <div className="text-center text-xs">
              <img
                src={
                  msg.senderId === authUser._id
                    ? authUser?.profilePic || assets.avatar_icon
                    : selectedUser?.profilePic || assets.avatar_icon
                }
                alt=""
                className="w-7 rounded-full"
              />
              <p className="text-gray-500">
                {formatMessageTime(msg.createdAt)}
              </p>
            </div>
          </div>
        ))}

        {uploadingFile && (
          <div className="flex items-end gap-2 justify-end">
            <div className="p-2 max-w-[230px] border border-gray-700 rounded-lg bg-gray-800 text-white flex flex-col items-center animate-pulse">
              <p className="text-sm mb-2">
                Sending{" "}
                {uploadingFile.type.startsWith("image") ? "Image" : "Video"}...
              </p>
              <div className="w-full bg-gray-600 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-violet-500 h-2 transition-all duration-700 ease-in-out"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div ref={scrollEnd}></div>
      </div>

      {/* Input area */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3">
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            onKeyDown={(e) => e.key === "Enter" && handleSendMessage(e)}
            type="text"
            placeholder="Type your message here..."
            className="flex-1 text-sm p-3 border-none outline-none text-white placeholder-gray-400"
          />
          <input
            onChange={handleFileSelection}
            type="file"
            id="file-upload"
            accept="image/*,video/*"
            hidden
          />
          <label htmlFor="file-upload">
            <img
              src={assets.gallery_icon}
              alt=""
              className="w-5 mr-2 cursor-pointer"
            />
          </label>
        </div>
        <img
          onClick={handleSendMessage}
          src={assets.send_button}
          alt=""
          className="w-7 cursor-pointer"
        />
      </div>
    </>
  );
};

export default ChatBody;
