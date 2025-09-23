import cloudinary from "../library/cloudinary.js";
import { generateToken } from "../library/utils.js";
import User from "../models/User.js";
import bcrypt from "bcryptjs"

//Signup a new user
export const signup =async (req, res)=>{
    const {fullName, email, password, bio, rollNumber, department, course, currentYear} = req.body;

    try {
        if(!fullName || !email || !password || !bio || !rollNumber || !department || !course || !currentYear){
            return res.json({success: false, message: "Missing required Student Details"})
        }

        const user = await User.findOne({email});
        if(user){
            return res.json({success: false, message: "Account already exists"})
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            fullName, 
            email, 
            password: hashedPassword, 
            bio,
            rollNumber,
            department,
            course,
            currentYear
        });

        const token = generateToken(newUser._id);

        res.json({success: true, userData: newUser, token, message: "Account created Successfully"})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// Controller to login a user
export const login = async(req, res) =>{
    try {
         const {email, password} = req.body;
         const userData = await User.findOne({email})

         const isPasswordCorrect = await bcrypt.compare(password, userData.password);

         if(!isPasswordCorrect){
            return res.json({success: false, message: "Invalid Credentials"})
         }

        const token = generateToken(userData._id)

        res.json({success: true, userData, token, message: "Login Successful"})

    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}

// Controller to check if user is authenticated
export const checkAuth = (req, res)=>{
    res.json({success: true, user: req.user});
}

// Controller to update user profile details
export const updateProfile = async (req, res)=>{
    try {
        const {profilePic, bio, fullName, password, dob, department, course, currentYear} = req.body;
        const userId = req.user._id;

        const updates = {};
        if (fullName) updates.fullName = fullName;
        if (bio) updates.bio = bio;
        if (dob) updates.dob = dob;
        if (department) updates.department = department;
        if (course) updates.course = course;
        if (currentYear) updates.currentYear = currentYear;

        if (password) {
            const salt = await bcrypt.genSalt(10);
            updates.password = await bcrypt.hash(password, salt);
        }

        if (profilePic) {
            const upload = await cloudinary.uploader.upload(profilePic);
            updates.profilePic = upload.secure_url;
        }

         // Check if there are any updates to apply
        if (Object.keys(updates).length === 0) {
            return res.json({ success: false, message: "No valid fields to update." });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, updates, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found." });
        }
        res.json({ success: true, user: updatedUser, message: "Profile updated successfully." });
    } catch (error) {
        console.log(error.message)
        res.json({success: false, message: error.message})
    }
}