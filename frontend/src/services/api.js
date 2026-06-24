import axios from "axios";

const API = axios.create({
  baseURL: "hirelink-recruitment-and-job-portal-cjrz.onrender.com/api",
});

export default API;