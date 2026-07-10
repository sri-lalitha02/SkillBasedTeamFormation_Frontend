import React from "react";
import "../styles/ProjectDetailsModal.css";

const ProjectDetailsModal = ({ project, onClose }) => {
  if (!project) return null;

  const createdDate = project.createdAt
    ? new Date(project.createdAt).toLocaleDateString()
    : "-";

  const deadline = project.deadline
    ? new Date(project.deadline).toLocaleDateString()
    : "Not Specified";

  return (
    <div className="projectModalOverlay" onClick={onClose}>
      <div
        className="projectModal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="projectModalHeader">
          <h2>{project.projectName}</h2>

          <button
            className="projectCloseBtn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        {/* Project Information */}
        <div className="projectSection">
          <h3>📂 Project Information</h3>

          <div className="projectInfoGrid">

            <div className="projectInfoCard">
              <span>Project Name</span>
              <h4>{project.projectName}</h4>
            </div>

            <div className="projectInfoCard">
              <span>Category</span>
              <h4>{project.category || "-"}</h4>
            </div>

            <div className="projectInfoCard">
              <span>Experience Level</span>
              <h4>{project.experienceLevel || "-"}</h4>
            </div>

            <div className="projectInfoCard">
              <span>Mode</span>
              <h4>{project.mode || "-"}</h4>
            </div>

            <div className="projectInfoCard">
              <span>Created On</span>
              <h4>{createdDate}</h4>
            </div>

            <div className="projectInfoCard">
              <span>Deadline</span>
              <h4>{deadline}</h4>
            </div>

          </div>
        </div>

        {/* Description */}
        <div className="projectSection">
          <h3>📝 Description</h3>

          <div className="projectDescriptionCard">
            {project.description}
          </div>
        </div>

        {/* Skills */}
        <div className="projectSection">
          <h3>🛠 Required Skills</h3>

          <div className="projectSkillCard">

            <div className="projectSkillContainer">

              {(project.requiredSkills || []).map((skill) => (
                <span
                  key={skill}
                  className="projectSkillBadge"
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="projectModalFooter">

          <button
            className="projectCloseModalBtn"
            onClick={onClose}
          >
            Close
          </button>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;