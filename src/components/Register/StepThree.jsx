import React from "react";

const StepThree = ({
  form,
  handleChange
}) => {

  return (
    <div className="step-container">

      <h2 className="step-title">
        Profile & Social Links
      </h2>


      {/* GitHub + LinkedIn */}
      <div className="row">

        <div className="field">

          <label>GitHub</label>

          <input
            type="url"
            name="github"
            placeholder="https://github.com/username"
            value={form.github}
            onChange={handleChange}
          />

        </div>


        <div className="field">

          <label>LinkedIn</label>

          <input
            type="url"
            name="linkedin"
            placeholder="https://linkedin.com/in/username"
            value={form.linkedin}
            onChange={handleChange}
          />

        </div>

      </div>



      {/* Portfolio + Bio */}
      <div className="row">

        <div className="field">

          <label>Portfolio</label>

          <input
            type="url"
            name="portfolio"
            placeholder="https://yourportfolio.com"
            value={form.portfolio}
            onChange={handleChange}
          />

        </div>



        <div className="field">

          <label>Bio</label>

          <textarea
            name="bio"
            rows="4"
            placeholder="Tell us about yourself..."
            value={form.bio}
            onChange={handleChange}
          />

        </div>


      </div>


    </div>
  );
};


export default StepThree;