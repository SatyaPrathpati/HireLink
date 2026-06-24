import React, { useEffect, useState } from "react";

function SavedJobs() {

  const [savedJobs, setSavedJobs] = useState([]);

  useEffect(() => {

    const jobs =
      JSON.parse(
        localStorage.getItem("savedJobs")
      ) || [];

    setSavedJobs(jobs);

  }, []);

  const removeJob = (id) => {

    const updatedJobs =
      savedJobs.filter(
        (job) => job.id !== id
      );

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );

    alert("Job Removed Successfully");
  };

  return (
    <div className="container mt-4">

      <h2>Saved Jobs</h2>

      {savedJobs.length === 0 ? (

        <p>No Saved Jobs Found</p>

      ) : (

        savedJobs.map((job) => (

          <div
            key={job.id}
            className="card mb-3"
          >
            <div className="card-body">

              <h4>{job.title}</h4>

              <p>
                <b>Company:</b> {job.company}
              </p>

              <p>
                <b>Location:</b> {job.location}
              </p>

              <p>
                <b>Salary:</b> {job.salary}
              </p>

              <button
                className="btn btn-danger"
                onClick={() =>
                  removeJob(job.id)
                }
              >
                Remove
              </button>

            </div>
          </div>

        ))
      )}

    </div>
  );
}

export default SavedJobs;