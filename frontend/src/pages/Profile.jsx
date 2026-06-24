import React, { useState } from "react";

function Profile() {

  const email = localStorage.getItem("email");
  const role = localStorage.getItem("role");
  const resume = localStorage.getItem("resumeFileName");

  const [skills, setSkills] = useState(
    localStorage.getItem("skills") || ""
  );

  const saveSkills = () => {

    localStorage.setItem(
      "skills",
      skills
    );

    alert("Skills Saved Successfully");
  };

  const viewResume = () => {

    if (resume) {

      window.open(
        `https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/uploads/${resume}`,
        "_blank"
      );

    }
  };

  return (

    <div className="container mt-4">

      <div className="card p-4">

        <h2>My Profile</h2>

        <hr />

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Role:</strong> {role}
        </p>

        <p>
          <strong>Resume:</strong>{" "}
          {resume || "No Resume Uploaded"}
        </p>

        <hr />

        <h4>Skills</h4>

        <input
          className="form-control mb-3"
          placeholder="Java, Spring Boot, React"
          value={skills}
          onChange={(e) =>
            setSkills(e.target.value)
          }
        />

        <button
          className="btn btn-primary mb-3"
          onClick={saveSkills}
        >
          Save Skills
        </button>

        {resume && (

          <div className="mt-3">

            <button
              className="btn btn-outline-primary btn-sm me-2"
              onClick={viewResume}
            >
              📄 View Resume
            </button>

            <a
              href={`https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/uploads/${resume}`}
              download
              className="btn btn-outline-success btn-sm"
            >
              ⬇ Download Resume
            </a>

          </div>

        )}

      </div>

    </div>
  );
}

export default Profile;