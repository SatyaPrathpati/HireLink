import React, { useEffect, useState } from "react";
import axios from "axios";

function MyApplications() {

  const [applications, setApplications] =
    useState([]);

  const email =
    localStorage.getItem("email");

  useEffect(() => {

    const loadApplications = async () => {

      try {

        console.log(
          "Logged in Email:",
          email
        );

        const res = await axios.get(
          `https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/applications/user/${email}`
        );

        console.log(
          "Applications:",
          res.data
        );

        setApplications(res.data);

      } catch (error) {

        console.log(error);
      }
    };

    loadApplications();

  }, [email]);

  return (

    <div className="container mt-4">

      <h2 className="mb-4">
        My Applications
      </h2>

      {applications.length === 0 ? (

        <div className="alert alert-warning">
          No Applications Found
        </div>

      ) : (

        applications.map((app) => (

          <div
            key={app.id}
            className="card shadow-sm mb-3"
          >

            <div className="card-body">

              <h5>
                Application #{app.id}
              </h5>

              <p>
                <strong>Name:</strong>{" "}
                {app.applicantName}
              </p>

              <p>
                <strong>Email:</strong>{" "}
                {app.applicantEmail}
              </p>

              <p>
                <strong>Job ID:</strong>{" "}
                {app.jobId}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                <span
                  className={
                    app.status === "ACCEPTED"
                      ? "text-success"
                      : app.status === "REJECTED"
                      ? "text-danger"
                      : "text-primary"
                  }
                >
                  {app.status}
                </span>
              </p>

              <p>
                <strong>Resume:</strong>{" "}
                {app.resumeFileName}
              </p>

              {app.interviewDate && (

                <div className="alert alert-info mt-3">

                  <h5>
                    Interview Scheduled
                  </h5>

                  <p>
                    <strong>Date:</strong>{" "}
                    {app.interviewDate}
                  </p>

                  <p>
                    <strong>Time:</strong>{" "}
                    {app.interviewTime}
                  </p>

                  <p>
                    <strong>Meeting Link:</strong>{" "}
                    <a
                      href={app.meetingLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Join Interview
                    </a>
                  </p>

                </div>

              )}

            </div>

          </div>

        ))

      )}

    </div>
  );
}

export default MyApplications;