import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Jobs from "./pages/Jobs";
import Recruiter from "./pages/Recruiter";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
import ResumeUpload from "./pages/ResumeUpload";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MyApplications from "./pages/MyApplications";
import Recommendations
from "./pages/Recommendations";
function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/jobs"
          element={<Jobs />}
        />

        <Route
          path="/recruiter"
          element={<Recruiter />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/saved-jobs"
          element={<SavedJobs />}
        />
        <Route
          path="/resume-upload"
          element={<ResumeUpload />}
        />
        <Route
          path="/applications"
          element={<MyApplications />}
        />
        <Route
          path="/recommendations"
          element={<Recommendations />}
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;