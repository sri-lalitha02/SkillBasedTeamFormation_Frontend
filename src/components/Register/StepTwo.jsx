import React from "react";

const StepTwo = ({
  form,
  handleChange,
  errors
}) => {

  return (
    <div className="step-container">

      <h2 className="step-title">
        Professional Information
      </h2>


      <div className="row">

        <div className="field">

          <label>Experience *</label>

          <select
            name="experience"
            value={form.experience}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>

          {errors.experience && (
            <span className="error">
              {errors.experience}
            </span>
          )}

        </div>


        <div className="field">

          <label>Preferred Role *</label>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Frontend Developer">
              Frontend Developer
            </option>

            <option value="Backend Developer">
              Backend Developer
            </option>

            <option value="Full Stack Developer">
              Full Stack Developer
            </option>

            <option value="AI/ML Engineer">
              AI/ML Engineer
            </option>

            <option value="DevOps">
              DevOps
            </option>

            <option value="Other">
              Other
            </option>

          </select>


          {errors.role && (
            <span className="error">
              {errors.role}
            </span>
          )}

        </div>

      </div>


      <div className="row">

        <div className="field">

          <label>Skills *</label>

          <input
            type="text"
            name="skills"
            value={form.skills}
            placeholder="React, Node.js, MongoDB"
            onChange={handleChange}
          />


          {errors.skills && (
            <span className="error">
              {errors.skills}
            </span>
          )}

        </div>



        <div className="field">

          <label>Gender *</label>

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >

            <option value="">
              Select Gender
            </option>

            <option value="Male">
              Male
            </option>

            <option value="Female">
              Female
            </option>

          </select>


          {errors.gender && (
            <span className="error">
              {errors.gender}
            </span>
          )}

        </div>


      </div>


    </div>
  );
};


export default StepTwo;