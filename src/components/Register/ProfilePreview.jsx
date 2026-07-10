import React from "react";

const ProfilePreview = ({ form }) => {

    return (

        <div className="profile-preview">

            <h2>Review Your Details</h2>

            <p>
                <strong>Name:</strong>{" "}
                {form.firstName} {form.lastName}
            </p>


            <p>
                <strong>Email:</strong>{" "}
                {form.email}
            </p>


            <p>
                <strong>Mobile:</strong>{" "}
                {form.mobile}
            </p>


            <p>
                <strong>Role:</strong>{" "}
                {form.role}
            </p>


            <p>
                <strong>Experience:</strong>{" "}
                {form.experience}
            </p>


            <p>
                <strong>Skills:</strong>{" "}
                {form.skills}
            </p>


            <p>
                <strong>GitHub:</strong>{" "}
                {form.github || "Not added"}
            </p>


            <p>
                <strong>LinkedIn:</strong>{" "}
                {form.linkedin || "Not added"}
            </p>


            <p>
                <strong>Bio:</strong>{" "}
                {form.bio || "Not added"}
            </p>

        </div>

    );
};

export default ProfilePreview;