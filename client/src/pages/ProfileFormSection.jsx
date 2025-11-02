import React from "react";

const ProfileFormSection = ({ 
  handleSubmit, error, fullName, setFullName, gender, setGender, courseTitle, setCourseTitle, course, setCourse, currentYear, setCurrentYear, dob, setDob, bio, setBio, showPasswordFields, setShowPasswordFields, password, setPassword, confirmPassword, setConfirmPassword, loading, navigate,
}) => {
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 flex-1">
      <h3 className="text-2xl font-semibold text-violet-400 mb-4">Update Profile</h3>

      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-300 px-4 py-2 rounded-md text-sm">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Full Name</label>
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
          <label className="block text-sm font-medium mb-1">Course Title</label>
          <select
            onChange={(e) => setCourseTitle(e.target.value)}
            value={courseTitle}
            required
            className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
           >
            <option value="" disabled>Select Course Title</option>
            <option value="MTech">MTech</option>
            <option value="BTech">BTech</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Course</label>
          <select
            onChange={(e) => setCourse(e.target.value)}
            value={course}
            className="w-full p-3 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500 bg-white/10 placeholder-gray-400"
          >
            <option value="" disabled>Select Course</option>
            <option value="CSE">Computer Science and Engineering (CSE)</option>
            <option value="ECE">Electronics and Communication Engineering (ECE)</option>
            <option value="EEE">Electrical and Electronics Engineering (EEE)</option>
            <option value="Civil">Civil Engineering</option>
            <option value="Mechanical">Mechanical Engineering</option>
            <option value="Chemical">Chemical Engineering</option>
            <option value="IT">Information Technology (IT)</option>
            <option value="MME">Metallurgical and Materials Engineering (MME)</option>
            <option value="Mining">Mining Engineering</option>
            <option value="VLSI">ECE (VLSI Design)</option>
            <option value="CDS">Computational and Data Science (CDS)</option>
            <option value="MCA">MCA - Master of Computer Applications</option>
            <option value="MBA">MBA - Master of Business Administration</option>
            <option value="PhD">Ph.D. / Research Scholar</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Current Year</label>
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
          <label className="block text-sm font-medium mb-1">Date of Birth</label>
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
              <label className="block text-sm font-medium mb-1">New Password</label>
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
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
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
  );
};

export default ProfileFormSection;
