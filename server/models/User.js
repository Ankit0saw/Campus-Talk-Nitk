import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: { 
        type: String, 
        unique: true, 
        required: true 
    },
    rollNumber: { 
        type: String, 
        unique: true, 
        sparse: true 
    },
    fullName: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true, 
        minlength: 5
    },
    profilePic: { 
        type: String, 
        default: "" 
    },
    status: { 
        type: String, 
        enum: ['online', 'offline'], 
        default: 'offline' 
    },
    bio: { 
        type: String 
    },
    dob: { 
        type: Date, 
        required: false 
    },
    department: { 
        type: String, 
        required: true 
    },
    course: { 
        type: String, 
        required: true 
    },
    currentYear: { 
        type: Number, 
        required: true 
    },
    isVerified: { 
        type: Boolean, 
        default: false 
    },
  }, {timestamps: true}
);

const User = mongoose.model("User", userSchema);

export default User;
