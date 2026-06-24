import React, { useState, useEffect } from "react";
import axios from "axios";

function Recruiter() {

  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    skills: "",
    description: ""
  });

  const [jobs, setJobs] = useState([]);
  const [applications, setApplications] = useState([]);
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const [interview, setInterview] = useState({
    interviewDate: "",
    interviewTime: "",
    meetingLink: ""
  });
  const role = localStorage.getItem("role");

  useEffect(() => {
    loadJobs();
  }, []);

  const loadJobs = async () => {
    try {

      const res = await axios.get(
        "http://localhost:8081/api/jobs"
      );

      setJobs(res.data);

    } catch (error) {
      console.log(error);
    }
  };

  if (role !== "RECRUITER") {
    return (
      <div className="container mt-5">
        <h2 className="text-danger">
          Access Denied
        </h2>
      </div>
    );
  }

  const createJob = async () => {
    try {

      await axios.post(
        "http://localhost:8081/api/jobs",
        job
      );

      alert("Job Created Successfully");

      setJob({
        title: "",
        company: "",
        location: "",
        salary: "",
        skills: "",
        description: ""
      });

      loadJobs();

    } catch (error) {

      console.log(error);
      alert("Job Creation Failed");
    }
  };

  const viewApplicants = async (jobId) => {

    try {

      const res = await axios.get(
        `http://localhost:8081/api/applications/job/${jobId}`
      );

      setApplications(res.data);

    } catch (error) {

      console.log(error);
      alert("Failed to Load Applicants");
    }
  };

  const acceptApplicant = async (id) => {

    try {

      await axios.put(
        `http://localhost:8081/api/applications/${id}/accept`
      );

      alert("Applicant Accepted");

    } catch (error) {

      console.log(error);
    }
  };

  const rejectApplicant = async (id) => {

    try {

      await axios.put(
        `http://localhost:8081/api/applications/${id}/reject`
      );

      alert("Applicant Rejected");

    } catch (error) {

      console.log(error);
    }
  };
  const scheduleInterview = async () => {

    try {

      await axios.put(
        `http://localhost:8081/api/applications/${selectedApplicant.id}/schedule`,
        interview
      );

      alert("Interview Scheduled Successfully");

      setSelectedApplicant(null);

      setInterview({
        interviewDate: "",
        interviewTime: "",
        meetingLink: ""
      });

    } catch (error) {

      console.log(error);

      alert("Interview Scheduling Failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Create New Job</h2>

      <input
        className="form-control mb-2"
        placeholder="Title"
        value={job.title}
        onChange={(e) =>
          setJob({
            ...job,
            title: e.target.value
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Company"
        value={job.company}
        onChange={(e) =>
          setJob({
            ...job,
            company: e.target.value
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Location"
        value={job.location}
        onChange={(e) =>
          setJob({
            ...job,
            location: e.target.value
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Salary"
        value={job.salary}
        onChange={(e) =>
          setJob({
            ...job,
            salary: e.target.value
          })
        }
      />

      <input
        className="form-control mb-2"
        placeholder="Skills"
        value={job.skills}
        onChange={(e) =>
          setJob({
            ...job,
            skills: e.target.value
          })
        }
      />

      <textarea
        className="form-control mb-3"
        placeholder="Description"
        value={job.description}
        onChange={(e) =>
          setJob({
            ...job,
            description: e.target.value
          })
        }
      />

      <button
        className="btn btn-primary mb-4"
        onClick={createJob}
      >
        Create Job
      </button>

      <hr />

      <h2>Posted Jobs</h2>

      {jobs.map((job) => (

        <div
          key={job.id}
          className="card p-3 mb-3"
        >

          <h4>{job.title}</h4>

          <p>
            <strong>Company:</strong> {job.company}
          </p>

          <button
            className="btn btn-info"
            onClick={() =>
              viewApplicants(job.id)
            }
          >
            View Applicants
          </button>

        </div>

      ))}
      {selectedApplicant && (

        <div className="card p-3 mb-4">

          <h3>
            Schedule Interview
          </h3>

          <p>
            Candidate:
            <strong>
              {" "}
              {selectedApplicant.applicantName}
            </strong>
          </p>

          <input
            type="date"
            className="form-control mb-2"
            value={interview.interviewDate}
            onChange={(e) =>
              setInterview({
                ...interview,
                interviewDate: e.target.value
              })
            }
          />

          <input
            type="time"
            className="form-control mb-2"
            value={interview.interviewTime}
            onChange={(e) =>
              setInterview({
                ...interview,
                interviewTime: e.target.value
              })
            }
          />

          <input
            type="text"
            placeholder="Google Meet Link"
            className="form-control mb-3"
            value={interview.meetingLink}
            onChange={(e) =>
              setInterview({
                ...interview,
                meetingLink: e.target.value
              })
            }
          />

          <button
            className="btn btn-primary"
            onClick={scheduleInterview}
          >
            Save Interview
          </button>

        </div>

      )}

      <hr />

      <h2>Applicants</h2>

      {applications.length === 0 ? (
        <p>No Applicants Found</p>
      ) : (

        applications.map((app) => (

          <div
            key={app.id}
            className="card p-3 mb-2"
          >

            <p>
              <strong>Name:</strong> {app.applicantName}
            </p>

            <p>
              <strong>Email:</strong> {app.applicantEmail}
            </p>

            <p>
              <strong>Resume:</strong> {app.resumeFileName}
            </p>

            <p>
              <strong>Status:</strong> {app.status}
            </p>

            {app.resumeFileName && (
              <a
                href={`http://localhost:8081/uploads/${app.resumeFileName}`}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm me-2"
              >
                View Resume
              </a>
            )}

            <button
              className="btn btn-success btn-sm me-2"
              onClick={() =>
                acceptApplicant(app.id)
              }
            >
              Accept
            </button>

            <button
              className="btn btn-danger btn-sm"
              onClick={() =>
                rejectApplicant(app.id)
              }
            >
              Reject
            </button>
            <button
              className="btn btn-warning btn-sm ms-2"
              onClick={() =>
                setSelectedApplicant(app)
              }
            >
              Schedule Interview
            </button>

          </div>

        ))

      )}

    </div>
  );
}

export default Recruiter;