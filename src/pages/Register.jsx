import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";

import StepOne from "../components/Register/StepOne";
import StepTwo from "../components/Register/StepTwo";
import StepThree from "../components/Register/StepThree";

import ProgressBar from "../components/Register/ProgressBar";
import ProfilePreview from "../components/Register/ProfilePreview";


import "../styles/Register.css";

import hero_processed from "../assets/images/MainImage_processed.png";
import Search from "../assets/images/Search.png";
import buildYourTeam from "../assets/images/BuildYourTeam.png";
import achieveGoals from "../assets/images/achieveGoals.png";

import { toast } from "react-toastify";
import { registerUser } from "../services/authService";


export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    gender: "",
    experience: "",
    role: "",
    skills: "",
    github: "",
    linkedin: "",
    portfolio: "",
    bio: ""
  });


  const [errors, setErrors] = useState({});
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [agree, setAgree] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsRead, setTermsRead] = useState(false);

  const validateField = (name, value) => {

    let error = "";

    if (name === "firstName") {
      if (!value) error = "First name is required";
    }

    if (name === "lastName") {
      if (!value) error = "Last name is required";
    }

    if (name === "email") {
      if (!value) error = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(value))
        error = "Invalid email";
    }

    if (name === "mobile") {
      if (!value) error = "Mobile is required";
      else if (!/^[0-9]{10}$/.test(value))
        error = "Must be 10 digits";
    }

    if (name === "password") {
      if (!value) error = "Password required";
      else if (value.length < 6)
        error = "Min 6 characters";
    }

    if (name === "confirmPassword") {
      if (!value) error = "Confirm password required";
      else if (value !== form.password)
        error = "Passwords not match";
    }

    if (name === "gender") {
      if (!value) error = "Gender is required";
    }

    if (name === "skills") {
      if (!value) error = "Skills required";
    }

    if (name === "experience") {

      if (!value)

        error = "Experience is required";

    }

    if (name === "role") {

      if (!value)

        error = "Role is required";

    }

    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));

    return error;

  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));

    validateField(name, value);
  };

  const nextStep = () => {

    if (step === 1) {

      const firstNameError = validateField("firstName", form.firstName);
      const lastNameError = validateField("lastName", form.lastName);
      const emailError = validateField("email", form.email);
      const mobileError = validateField("mobile", form.mobile);
      const passwordError = validateField("password", form.password);
      const confirmPasswordError = validateField(
        "confirmPassword",
        form.confirmPassword
      );

      if (
        firstNameError ||
        lastNameError ||
        emailError ||
        mobileError ||
        passwordError ||
        confirmPasswordError
      ) {
        return;
      }

    }

    if (step === 2) {

      const experienceError = validateField("experience", form.experience);
      const roleError = validateField("role", form.role);
      const skillsError = validateField("skills", form.skills);
      const genderError = validateField("gender", form.gender);

      if (
        experienceError ||
        roleError ||
        skillsError ||
        genderError
      ) {
        return;
      }
    }

    setStep(step + 1);

  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    let newErrors = {};

    Object.keys(form).forEach((key) => {
      const error = validateField(key, form[key]);

      if (error) {
        newErrors[key] = error;
      }
    });

    setErrors(newErrors);

    if (Object.values(newErrors).some(err => err)) {
      setLoading(false);
      return;
    }

    if (!agree) {
      toast.error("Please accept Terms & Conditions");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        password: form.password,
        role: form.role,
        skills: form.skills.split(",").map(s => s.trim()),
        github: form.github,
        linkedin: form.linkedin,
        portfolio: form.portfolio,
        bio: form.bio,
        gender: form.gender,
        experience: form.experience,
        mobile: form.mobile
      };

      await registerUser(payload);
      toast.success("Registration Successful 🚀");

      navigate("/login");
    }
    catch (error) {
      toast.error(
        error.response?.data?.message || "Registration failed"
      );
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <div className="register-page">

        {/* CONTENT */}
        <div className="register-content">

          {/* LEFT SIDE */}
          <div className="left-panel">

            <div className="left-title">
              <h1>Create Your Account and Start Your Journey</h1>
              <p> Join thousands of students and professionals who are building amazing projects together based on skills and passion.</p>
            </div>

            <div className="hero-box">
              <img src={hero_processed} alt="hero" />
            </div>

            <div className="why-section">
              <h2>Why Join SkillBasedTeam ?</h2>

              <div className="feature-card">
                <img src={Search} alt="" />
                <div>
                  <h3>Find Right People</h3>
                  <p>Find teammates based on skills.</p>
                </div>
              </div>

              <div className="feature-card">
                <img src={buildYourTeam} alt="" />
                <div>
                  <h3>Build Your Team</h3>
                  <p>Build a strong project team for your project.</p>
                </div>
              </div>

              <div className="feature-card">
                <img src={achieveGoals} alt="" />
                <div>
                  <h3>Achieve Goals</h3>
                  <p>Collaborate and bring your ideas to life.</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="right-panel">

            <form className="form-card" onSubmit={handleSubmit}>

              <h1>Create Your Account</h1>
              <p>Fill your details to get started</p>

               <ProgressBar step={step} />

              {step === 1 && (
                <StepOne
                  form={form}
                  handleChange={handleChange}
                  errors={errors}
                  showPassword={showPassword}
                  setShowPassword={setShowPassword}
                  showConfirmPassword={showConfirmPassword}
                  setShowConfirmPassword={setShowConfirmPassword}
                />
              )}

              {step === 2 && (
                <StepTwo
                  form={form}
                  handleChange={handleChange}
                  errors={errors}
                />
              )}

              {step === 3 && (
                <>
                <StepThree
                  form={form}
                  handleChange={handleChange}
                />
                 <ProfilePreview form={form} />
                 </>
              )}

              <div className="step-buttons">

                {step > 1 && (
                  <button
                    type="button"
                    className="prev-btn"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </button>
                )}

                {step < 3 && (
                  <button
                    type="button"
                    className="next-btn"
                    onClick={nextStep}
                  >
                    Next
                  </button>
                )}

              </div>

              {/* TERMS */}
              <div className="terms">
                <input
                  type="checkbox"
                  checked={agree}
                  disabled={!termsRead}
                  onChange={() => setAgree(!agree)}
                />

                <span
                  className="terms-link"
                  onClick={() => setShowTerms(true)}
                >
                  Terms & Conditions
                </span>
              </div>

              {/* BUTTON */}
              {step === 3 && (
                <button
                  type="submit"
                  className="create-btn"
                  disabled={loading}
                >
                  {loading ? "Creating Account..." : "Create Account"}
                </button>
              )}
              {/* TERMS MODAL */}
              {showTerms && (
                <div className="modal-overlay">
                  <div className="terms-modal">

                    <h2>Terms & Conditions</h2>

                    <div className="terms-content">

                      <p>
                        Welcome to SkillBasedTeam. By creating an account, you agree to the
                        following terms:
                      </p>

                      <ol>
                        <li>Provide accurate and truthful information.</li>
                        <li>Do not create fake or duplicate accounts.</li>
                        <li>Respect all members of the platform.</li>
                        <li>Do not upload harmful or illegal content.</li>
                        <li>Your account may be suspended for violating these rules.</li>
                        <li>Your personal information will only be used for platform functionality.</li>
                        <li>We may update these Terms & Conditions from time to time.</li>

                      </ol>

                    </div>

                    <button
                      type="button"
                      className="close-btn"
                      onClick={() => {
                        setTermsRead(true);
                        setShowTerms(false);
                      }}
                    >
                      I Have Read & Close
                    </button>

                  </div>
                </div>
              )}

              <div className="login-text">
                Already have an account? <Link to="/login">Login here</Link>
              </div>

            </form>

          </div>

        </div>

        {/* FOOTER */}
        <footer className="register-footer">
          © 2026 SkillBasedTeam | All Rights Reserved
        </footer>

      </div>
    </>
  );
}