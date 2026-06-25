import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container">

        <Link
          className="navbar-brand"
          to="/"
        >
          HireLink
        </Link>

        <div className="navbar-nav">

          <Link className="nav-link" to="/">
            Home
          </Link>

          {role === "JOB_SEEKER" && (
            <>
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>

              <Link className="nav-link" to="/saved-jobs">
                Saved Jobs
              </Link>
              <Link className="nav-link" to="/resume-upload">
                Resume Upload
              </Link>
              <Link className="nav-link" to="/applications">
                Applications
              </Link>
            </>
          )}

          {role === "RECRUITER" && (
            <>
              <Link className="nav-link" to="/recruiter">
                Recruiter
              </Link>

              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </>
          )
          }

          {isLoggedIn && (
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          )}

          {!isLoggedIn && (
            <>
              <Link className="nav-link" to="/login">
                Login
              </Link>

              <Link className="nav-link" to="/register">
                Register
              </Link>

            </>
          )}

          {isLoggedIn && (
            <button
              className="btn btn-danger ms-3"
              onClick={logout}
            >
              Logout
            </button>
          )}

        </div>

      </div>

    </nav>
  );
}

export default Navbar;