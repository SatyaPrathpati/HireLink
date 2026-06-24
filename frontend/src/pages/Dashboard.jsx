import React, { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {

  const [stats, setStats] = useState({
    totalJobs: 0,
    totalApplications: 0,
    acceptedApplications: 0,
    rejectedApplications: 0,
    pendingApplications: 0
  });

  const role = localStorage.getItem("role");

  useEffect(() => {

    axios
      .get("http://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/dashboard/stats")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));

  }, []);

  if (role !== "RECRUITER") {

    return (
      <div className="container mt-5">
        <h2 className="text-danger">
          Access Denied
        </h2>
      </div>
    );
  }

  return (
    <div className="container mt-4">

      <h1 className="mb-4">
        Recruiter Dashboard
      </h1>

      <div className="row">

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Jobs</h5>
              <h2>{stats.totalJobs}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Total Applications</h5>
              <h2>{stats.totalApplications}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Accepted</h5>
              <h2>{stats.acceptedApplications}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Rejected</h5>
              <h2>{stats.rejectedApplications}</h2>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-center shadow">
            <div className="card-body">
              <h5>Pending</h5>
              <h2>{stats.pendingApplications}</h2>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default Dashboard;