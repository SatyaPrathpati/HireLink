import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {

    try {

      const res = await axios.post(
        "https://hirelink-recruitment-and-job-portal-cjrz.onrender.com/api/users/login",
        {
          email,
          password
        }
      );

      if (res.data) {

        localStorage.setItem(
          "isLoggedIn",
          "true"
        );

        localStorage.setItem(
          "email",
          res.data.email
        );
        localStorage.setItem(
          "name",
          res.data.name
        );

        localStorage.setItem(
          "role",
          res.data.role
        );

        alert(
          `Login Successful as ${res.data.role}`
        );

        if (
          res.data.role === "RECRUITER"
        ) {

          window.location.href =
            "/recruiter";

        } else {

          window.location.href =
            "/jobs";
        }

      } else {

        alert("Invalid Credentials");
      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");
    }
  };

  return (
    <div className="container mt-5">

      <div
        className="card p-4 mx-auto"
        style={{ maxWidth: "400px" }}
      >

        <h2 className="text-center mb-4">
          Login
        </h2>

        <input
          className="form-control mb-3"
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          className="form-control mb-3"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          className="btn btn-primary"
          onClick={login}
        >
          Login
        </button>

      </div>

    </div>
  );
}

export default Login;