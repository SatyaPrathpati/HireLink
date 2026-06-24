import { useState } from "react";
import API from "../services/api";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "JOB_SEEKER",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      await API.post("/users/register", user);

      alert("Registration Successful");

    } catch (error) {

      console.log(error);
      alert("Registration Failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Register</h2>

      <form onSubmit={handleSubmit}>

        <input
          className="form-control mb-2"
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setUser({
              ...user,
              name: e.target.value
            })
          }
        />

        <input
          className="form-control mb-2"
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setUser({
              ...user,
              email: e.target.value
            })
          }
        />

        <input
          className="form-control mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setUser({
              ...user,
              password: e.target.value
            })
          }
        />

        <select
          className="form-control mb-3"
          value={user.role}
          onChange={(e) =>
            setUser({
              ...user,
              role: e.target.value
            })
          }
        >
          <option value="JOB_SEEKER">
            Job Seeker
          </option>

          <option value="RECRUITER">
            Recruiter
          </option>
        </select>

        <button
          className="btn btn-primary"
          type="submit"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default Register;