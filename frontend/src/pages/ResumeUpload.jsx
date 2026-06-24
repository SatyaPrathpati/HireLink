import React, { useState } from "react";
import axios from "axios";

function ResumeUpload() {

  const [file, setFile] = useState(null);

  const uploadResume = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      await axios.post(
        "https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/resume/upload",
        formData
      );

      localStorage.setItem(
        "resumeFileName",
        file.name
      );

        alert("Resume Uploaded Successfully");

    } catch (error) {

      console.log(error);
      alert("Upload Failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Upload Resume</h2>

      <input
        type="file"
        className="form-control"
        onChange={(e) =>
          setFile(e.target.files[0])
        }
      />

      <br />

      <button
        className="btn btn-primary"
        onClick={uploadResume}
      >
        Upload Resume
      </button>

    </div>
  );
}

export default ResumeUpload;