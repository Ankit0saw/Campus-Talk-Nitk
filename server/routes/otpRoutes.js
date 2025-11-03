import express from "express";
import nodemailer from "nodemailer";

const otpRouter = express.Router();
let otpStore = {}; // { email: otp }

// Send OTP route
otpRouter.post("/send-otp", async (req, res) => {
  console.log("call for otp-send routes");
  const { email } = req.body;
  if (!email) return res.status(400).json({ success: false, message: "Email required" });

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // Log to check if env vars are loaded
    console.log("MAIL_USER:", process.env.MAIL_USER ? "✓ Set" : "✗ Not Set");
    console.log("MAIL_PASS:", process.env.MAIL_PASS ? "✓ Set" : "✗ Not Set");

    // Verify transporter configuration
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.log('Transporter verification failed:', error);
          reject(error);
        } else {
          console.log('Transporter is ready to send emails');
          resolve(success);
        }
      });
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "Your OTP for Signup",
      text: `Your OTP is ${otp}`,
    });

    console.log("OTP sent successfully to:", email);
    return res.json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending OTP - Full error:", error);
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send OTP",
      error: error.message // Include error message in response (remove in production)
    });
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
