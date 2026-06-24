import React, { useEffect, useState } from "react";
import axios from "axios";

function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [editingJob, setEditingJob] = useState(null);

  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [companyFilter, setCompanyFilter] = useState("");

  const role = localStorage.getItem("role");

  useEffect(() => {
    loadJobs();
  }, []);
  const loadJobs = () => {
    axios.get("https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/jobs")
      .then((res) => setJobs(res.data))
      .catch((err) => console.log(err));
  };

  const applyJob = async (jobId) => {

    try {

      const email =
        localStorage.getItem("email");

      const name =
        localStorage.getItem("name");

      const resumeFileName =
        localStorage.getItem("resumeFileName");

      await axios.post(
        "http://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/applications",
        {
          userId: 1,
          jobId: jobId,

          applicantName:
            name || "Applicant",

          applicantEmail:
            email || "",

          resumeFileName:
            resumeFileName || "No Resume",

          status: "APPLIED"
        }
      );

      alert("Applied Successfully!");

    } catch (error) {

      console.log(error);

      alert("Application Failed");
    }
  };

  const saveJob = (job) => {

    const existingJobs =
      JSON.parse(
        localStorage.getItem("savedJobs")
      ) || [];

    const alreadySaved =
      existingJobs.find(
        (j) => j.id === job.id
      );

    if (alreadySaved) {

      alert("Job Already Saved");
      return;
    }

    existingJobs.push(job);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(existingJobs)
    );

    alert("Job Saved Successfully");
  };

  const deleteJob = async (id) => {

    try {

      await axios.delete(
        `http://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/jobs/${id}`
      );

      alert("Job Deleted Successfully");

      setJobs(
        jobs.filter(
          (job) => job.id !== id
        )
      );

    } catch (error) {

      console.log(error);
      alert("Delete Failed");
    }
  };

  const editJob = (job) => {
    setEditingJob({ ...job });
  };

  const updateJob = async () => {

    try {

      await axios.put(
        `http://localhost:8081/api/jobs/${editingJob.id}`,
        editingJob
      );

      alert("Job Updated Successfully");

      loadJobs();

      setEditingJob(null);

    } catch (error) {

      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container mt-4">

      {editingJob && (

        <div className="card p-3 mb-4">

          <h2>Edit Job</h2>

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Title"
            value={editingJob.title}
            onChange={(e) =>
              setEditingJob({
                ...editingJob,
                title: e.target.value
              })
            }
          />

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Company"
            value={editingJob.company}
            onChange={(e) =>
              setEditingJob({
                ...editingJob,
                company: e.target.value
              })
            }
          />

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Location"
            value={editingJob.location}
            onChange={(e) =>
              setEditingJob({
                ...editingJob,
                location: e.target.value
              })
            }
          />

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Salary"
            value={editingJob.salary}
            onChange={(e) =>
              setEditingJob({
                ...editingJob,
                salary: e.target.value
              })
            }
          />

          <input
            className="form-control mb-2"
            type="text"
            placeholder="Skills"
            value={editingJob.skills}
            onChange={(e) =>
              setEditingJob({
                ...editingJob,
                skills: e.target.value
              })
            }
          />

          <textarea
            className="form-control mb-2"
            placeholder="Description"
            value={editingJob.description}
            onChange={(e) =>
              setEditingJob({
                ...editingJob,
                description: e.target.value
              })
            }
          />

          <button
            className="btn btn-success me-2"
            onClick={updateJob}
          >
            Update Job
          </button>

          <button
            className="btn btn-secondary"
            onClick={() =>
              setEditingJob(null)
            }
          >
            Cancel
          </button>

        </div>
      )}

      <h2 className="mb-3">
        Available Jobs
      </h2>

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Search Job Title..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <input
        className="form-control mb-2"
        type="text"
        placeholder="Filter by Location..."
        value={locationFilter}
        onChange={(e) =>
          setLocationFilter(e.target.value)
        }
      />

      <input
        className="form-control mb-4"
        type="text"
        placeholder="Filter by Company..."
        value={companyFilter}
        onChange={(e) =>
          setCompanyFilter(e.target.value)
        }
      />

      {jobs
        .filter((job) =>
          job.title
            ?.toLowerCase()
            .includes(
              search.toLowerCase()
            )
        )
        .filter((job) =>
          job.location
            ?.toLowerCase()
            .includes(
              locationFilter.toLowerCase()
            )
        )
        .filter((job) =>
          job.company
            ?.toLowerCase()
            .includes(
              companyFilter.toLowerCase()
            )
        )
        .map((job) => (

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

              <p>
                <b>Skills:</b> {job.skills}
              </p>

              <button
                className="btn btn-primary me-2"
                onClick={() =>
                  applyJob(job.id)
                }
              >
                Apply
              </button>

              <button
                className="btn btn-success me-2"
                onClick={() =>
                  saveJob(job)
                }
              >
                Save Job
              </button>

              {role === "RECRUITER" && (
                <>
                  <button
                    className="btn btn-warning me-2"
                    onClick={() =>
                      editJob(job)
                    }
                  >
                    Edit Job
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteJob(job.id)
                    }
                  >
                    Delete Job
                  </button>
                </>
              )}

            </div>

          </div>

        ))}

    </div>
  );
}

export default Jobs;