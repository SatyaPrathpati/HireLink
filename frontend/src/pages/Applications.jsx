import React, { useEffect, useState } from "react";
import axios from "axios";

function Applications() {

  const [applications, setApplications] = useState([]);

  useEffect(() => {

    axios
      .get("https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/applications")
      .then((res) => setApplications(res.data))
      .catch((err) => console.log(err));

  }, []);

  return (
    <div>

      <h2>My Applications</h2>

      {applications.map((app) => (

        <div
          key={app.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px"
          }}
        >
          <h3>Application #{app.id}</h3>

          <p>
            <b>User ID:</b> {app.userId}
          </p>

          <p>
            <b>Job ID:</b> {app.jobId}
          </p>

          <p>
            <b>Status:</b> {app.status}
          </p>

        </div>

      ))}

    </div>
  );
}

export default Applications;