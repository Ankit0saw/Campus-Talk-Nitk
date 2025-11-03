import User from "../models/User.js";
import jwt from "jsonwebtoken";

// Middleware to protect routes
export const protectRoute = async (req, res, next)=>{
    try {
        const token = req.headers.token || req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Unauthorized, token missing" });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.json({success: false, message: "User not found"})
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Auth error: ",error.message);
        res.status(401).json({success: false, message: error.message});
    }
}