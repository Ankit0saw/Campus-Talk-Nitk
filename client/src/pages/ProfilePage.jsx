import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import assets from "../assets/assets";
import { AuthContext } from "../../context/AuthContext";
import ProfileImageSection from "./ProfileImageSection";
import ProfileFormSection from "./ProfileFormSection";

const ProfilePage = () => {
  const { authUser, updateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  // State for all editable fields
  const [selectedImg, setSelectedImg] = useState(null);
  const [fullName, setFullName] = useState(authUser.fullName || "");
  const [bio, setBio] = useState(authUser.bio || "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState(authUser.dob ? new Date(authUser.dob).toISOString().split("T")[0] : "");
  const [gender, setGender] = useState(authUser.gender || "");
  const [courseTitle, setCourseTitle] = useState(authUser.courseTitle || "");
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

      if (fullName.trim() && fullName !== authUser.fullName)
        updateData.fullName = fullName.trim();

      if (bio.trim() && bio !== authUser.bio) 
        updateData.bio = bio.trim();

      if (password.trim()) 
        updateData.password = password;

      if (
        dob && dob !==
          (authUser.dob
            ? new Date(authUser.dob).toISOString().split("T")[0]
            : "")
      )
        updateData.dob = dob;

      if (gender && gender !== authUser.gender) 
        updateData.gender = gender;

      if (courseTitle.trim() && courseTitle !== authUser.courseTitle)
        updateData.courseTitle = courseTitle.trim();

      if (course.trim() && course !== authUser.course)
        updateData.course = course.trim();
      
      if (currentYear && currentYear !== authUser.currentYear)
        updateData.currentYear = currentYear;

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
        <ProfileImageSection
          authUser={authUser}
          selectedImg={selectedImg}
          setSelectedImg={setSelectedImg}
          assets={assets}
        />
        <ProfileFormSection
          {...{
            handleSubmit,
            error,
            fullName,
            setFullName,
            gender,
            setGender,
            courseTitle,
            setCourseTitle,
            course,
            setCourse,
            currentYear,
            setCurrentYear,
            dob,
            setDob,
            bio,
            setBio,
            showPasswordFields,
            setShowPasswordFields,
            password,
            setPassword,
            confirmPassword,
            setConfirmPassword,
            loading,
            navigate,
          }}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
