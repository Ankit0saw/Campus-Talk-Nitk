import express from "express";
import "dotenv/config";
import cors from "cors";
import http from "http";
import { connectDB } from "./library/db.js";
import userRouter from "./routes/userRoutes.js";
import messageRouter from "./routes/messageRoutes.js";
import { Server } from "socket.io";
import bodyParser from "body-parser";
import otpRouter from "./routes/otpRoutes.js";


// Create Express app and HTTP server
const app = express();
const server = http.createServer(app);

// Cors Setup
app.use(
  cors({
    origin: ["https://campus-talk.onrender.com", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "token"],
    credentials: true,
  })
);

// Middleware setup
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

// Initialize socket.io server
export const io = new Server(server, {
  cors: { origin: "*" },
});

// Store online users
export const userSocketMap = {}; // {userId: socketId }

// Socket.io connection handler
io.on("connection", (socket) => {
  const userId = socket.handshake.query.userId;
  console.log("User Connected", userId);

  if (userId) {
    userSocketMap[userId] = socket.id;
  }

  // Emit online users to all connected clients
  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User Disconnected", userId);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

// Routes setup
app.use("/api/status", (req, res) => res.send("Server is live"));
app.use("/api/auth", userRouter);
app.use("/api/messages", messageRouter);
app.use("/api/otp", otpRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, "0.0.0.0", () => {
  // Connect to Database after server starts
  connectDB();
  console.log(`Server is running on PORT:  ${PORT}`);
});
