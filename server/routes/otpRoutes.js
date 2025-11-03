import express from "express";
import nodemailer from "nodemailer";

const otpRouter = express.Router();
let otpStore = {}; // { email: otp }

// Send OTP route
otpRouter.post("/send-otp", async (req, res) => {
  console.log("📧 Starting OTP send process...");
  const { email } = req.body;
  
  if (!email) {
    console.log("❌ No email provided");
    return res.status(400).json({ success: false, message: "Email required" });
  }

  console.log("📨 Email received:", email);

  const otp = Math.floor(100000 + Math.random() * 900000);
  otpStore[email] = otp;
  console.log("🔢 OTP generated and stored");

  try {
    // Check environment variables
    console.log("🔍 Checking environment variables...");
    console.log("MAIL_USER:", process.env.MAIL_USER ? "✓ Set" : "✗ Not Set");
    console.log("MAIL_PASS:", process.env.MAIL_PASS ? "✓ Set (length: " + process.env.MAIL_PASS?.length + ")" : "✗ Not Set");

    // Try port 587 first (better for cloud deployments)
    console.log("⚙️ Configuring transporter (Port 587 with TLS)...");
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
      tls: {
        rejectUnauthorized: false
      }
    });

    // Verify transporter configuration
    console.log("🔄 Verifying transporter connection...");
    await new Promise((resolve, reject) => {
      transporter.verify((error, success) => {
        if (error) {
          console.error('❌ Transporter verification failed:', error);
          console.error('Error details:', {
            name: error.name,
            message: error.message,
            code: error.code,
            command: error.command
          });
          reject(error);
        } else {
          console.log('✅ Transporter verified successfully');
          resolve(success);
        }
      });
    });

    // Send the email
    console.log("📤 Sending email to:", email);
    const info = await transporter.sendMail({
      from: `"NITK Portal" <${process.env.MAIL_USER}>`,
      to: email,
      subject: "Your OTP for Signup - NITK Portal",
      text: `Your OTP for signup is: ${otp}\n\nThis OTP is valid for 10 minutes.\n\nIf you didn't request this, please ignore this email.`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Your OTP for Signup</h2>
          <p>Your OTP is: <strong style="font-size: 24px; color: #8b5cf6;">${otp}</strong></p>
          <p>This OTP is valid for 10 minutes.</p>
          <p style="color: #666; font-size: 12px;">If you didn't request this, please ignore this email.</p>
        </div>
      `
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
    
    return res.json({ 
      success: true, 
      message: "OTP sent successfully" 
    });
    
  } catch (error) {
    console.error("❌ ERROR sending OTP:");
    console.error("Error Type:", error.constructor.name);
    console.error("Error Name:", error.name);
    console.error("Error Message:", error.message);
    console.error("Error Code:", error.code);
    console.error("Error Command:", error.command);
    console.error("Full Error:", error);
    
    return res.status(500).json({ 
      success: false, 
      message: "Failed to send OTP. Please try again.",
      errorDetails: process.env.NODE_ENV === 'development' ? error.message : undefined
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
