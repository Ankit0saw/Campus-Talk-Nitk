import express from "express";
import nodemailer from "nodemailer";

const otpRouter = express.Router();
let otpStore = {}; // { email: otp }

// Send OTP route
otpRouter.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email required" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  try {
    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,       // SSL port
      secure: true,  // must be true for port 465
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Verify transporter configuration
    transporter.verify((error, success) => {
      if (error) {
        console.log('Transporter verification failed:', error);
      } else {
        console.log('Transporter is ready to send emails');
      }
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "Your OTP for Signup",
      text: `Your OTP is ${otp}`,
    });

    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// Verify OTP route
otpRouter.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] && otpStore[email] == otp) {
    delete otpStore[email];
    return res.json({ success: true, message: "OTP verified successfully" });
  }

  return res.status(400).json({ success: false, message: "Invalid or expired OTP" });
});

export default otpRouter;
