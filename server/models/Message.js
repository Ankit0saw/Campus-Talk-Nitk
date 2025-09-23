import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    text: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        default: ""
    },
    video: {
        type: String,
        default: ""
    },
    emojis: {
        type: [String], // Store multiple emojis as an array of strings
        default: []
    },
    seen: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

const Message =mongoose.model("Message", messageSchema);

export default Message;