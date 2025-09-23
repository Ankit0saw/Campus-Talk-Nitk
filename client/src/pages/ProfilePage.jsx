import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // State for all editable fields
  const [selectedImg, setSelectedImg] = useState(null);
  const [fullName, setFullName] = useState(authUser.fullName || "");
  const [bio, setBio] = useState(authUser.bio || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState(
    authUser.dob ? new Date(authUser.dob).toISOString().split("T")[0] : ""
  );
  const [gender, setGender] = useState(authUser.gender || "");
  const [department, setDepartment] = useState(authUser.department || "");
  const [course, setCourse] = useState(authUser.course || "");
  const [currentYear, setCurrentYear] = useState(authUser.currentYear || "");

  // UI state
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Password validation
    if (password && password !== confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    if (password && password.length < 5) {
      setError("Password must be at least 5 characters long");
      setLoading(false);
      return;
    }

    try {
      const updateData = {};

      // Only include fields that have values or have changed
      if (fullName.trim() && fullName !== authUser.fullName) {
        updateData.fullName = fullName.trim();
      }

      if (bio.trim() && bio !== authUser.bio) {
        updateData.bio = bio.trim();
      }

      if (password.trim()) {
        updateData.password = password;
      }

      if (
        dob &&
        dob !==
          (authUser.dob
            ? new Date(authUser.dob).toISOString().split("T")[0]
            : "")
      ) {
        updateData.dob = dob;
      }

      if (gender && gender !== authUser.gender) {
        updateData.gender = gender;
      }

      if (department.trim() && department !== authUser.department) {
        updateData.department = department.trim();
      }

      if (course.trim() && course !== authUser.course) {
        updateData.course = course.trim();
      }

      if (currentYear && currentYear !== authUser.currentYear) {
        updateData.currentYear = currentYear;
      }

      // Handle profile picture
      if (selectedImg) {
        const reader = new FileReader();
        reader.readAsDataURL(selectedImg);
        reader.onload = async () => {
          const base64Image = reader.result;
          updateData.profilePic = base64Image;
          await updateProfile(updateData);
          navigate("/chat");
        };
        return;
      }

      // If no image selected, update other fields
      if (Object.keys(updateData).length > 0) {
        await updateProfile(updateData);
        navigate("/chat");
      } else {
        setError("No changes detected");
        setLoading(false);
      }
    } catch (error) {
      setError("Failed to update profile. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-no-repeat flex items-center justify-center p-4">
      <div className="w-full max-w-4xl backdrop-blur-2xl text-gray-300 border-2 border-gray-600 flex max-lg:flex-col rounded-lg overflow-hidden">
        {/* Profile Image Section */}
        <div className="flex flex-col items-center justify-center p-8 bg-white/5 lg:w-1/3">
          <div className="relative">
            <img
              className="w-32 h-32 rounded-full object-cover border-4 border-violet-400 shadow-lg"
              src={
                selectedImg
                  ? URL.createObjectURL(selectedImg)
                  : authUser?.profilePic || assets.avatar_icon
              }
              alt="Profile"
            />
            <label
              htmlFor="avatar"
              className="absolute bottom-0 right-0 bg-violet-600 hover:bg-violet-700 p-2 rounded-full cursor-pointer transition-colors"
            >
              <input
                onChange={(e) => setSelectedImg(e.target.files[0])}
                type="file"
                id="avatar"
                accept=".png, .jpg, .jpeg"
                hidden
              />
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </label>
          </div>
          <p className="text-center text-sm text-gray-400 mt-4">
            Click the + icon to upload new profile picture
          </p>
        </div>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 p-8 flex-1"
        >
          <h3 className="text-2xl font-semibold text-violet-400 mb-4">
            Update Profile
          </h3>

          {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* Basic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
                type="text"
                placeholder="Your Full Name"
                className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Gender</label>
              <select
                onChange={(e) => setGender(e.target.value)}
                value={gender}
                className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 text-gray-300"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Can't Say">Can't Say</option>
              </select>
            </div>
          </div>

          {/* Academic Info */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Department
              </label>
              <input
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
                type="text"
                placeholder="Your Department"
                className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Course</label>
              <input
                onChange={(e) => setCourse(e.target.value)}
                value={course}
                type="text"
                placeholder="Your Course"
                className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Current Year
              </label>
              <select
                onChange={(e) => setCurrentYear(e.target.value)}
                value={currentYear}
                className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 text-gray-300"
              >
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>
                <option value="5">5th Year</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Date of Birth
              </label>
              <input
                onChange={(e) => setDob(e.target.value)}
                value={dob}
                type="date"
                className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <label className="block text-sm font-medium mb-1">Bio</label>
            <textarea
              onChange={(e) => setBio(e.target.value)}
              value={bio}
              placeholder="Write about yourself..."
              rows={3}
              className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400 resize-none"
            />
          </div>

          {/* Password Section */}
          <div className="border-t border-gray-600 pt-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-medium">Change Password</h4>
              <button
                type="button"
                onClick={() => setShowPasswordFields(!showPasswordFields)}
                className="text-violet-400 hover:text-violet-300 text-sm underline"
              >
                {showPasswordFields ? "Cancel" : "Update Password"}
              </button>
            </div>

            {showPasswordFields && (
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    New Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Enter new password"
                    minLength="5"
                    className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    value={confirmPassword}
                    type="password"
                    placeholder="Confirm new password"
                    minLength="5"
                    className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-gradient-to-r from-purple-400 to-violet-600 hover:from-purple-500 hover:to-violet-700 text-white p-3 rounded-md text-lg cursor-pointer transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Updating..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/chat")}
              className="px-6 py-3 border border-gray-500 text-gray-300 rounded-md hover:bg-white/10 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
