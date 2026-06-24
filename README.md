# HireLink – Recruitment and Job Portal System
The platform connects job seekers and recruiters through online hiring system. Job seekers register, log in, upload resumes, search,apply for jobs, track application status,receive personalized job recommendations based on their skills. Recruiters can create and manage job postings, review applicants, view resumes, accept or reject apllications..

## Features

### Job Seeker Features

* User Registration and Login
* Browse Available Jobs
* Apply for Jobs
* Upload Resume
* View and Download Resume
* Track Application Status
* View Recommended Jobs Based on Skills
* View Scheduled Interview Details

### Recruiter Features

* Recruiter Login
* Create and Manage Job Postings
* View Applicants
* Accept or Reject Applications
* View Uploaded Resumes
* Schedule Interviews
* Dashboard Statistics

### Additional Features

* Email Notifications
* Skill-Based Job Recommendations
* Resume Management
* Role-Based Access Control
* Dashboard Analytics

---

## Technology Stack

### Frontend

* React.js
* Bootstrap
* Axios
* React Router

### Backend

* Spring Boot
* Spring Data JPA
* REST APIs
* Maven

### Database

* MySQL

### Tools

* Git
* GitHub
* VS Code
* Postman

---

## System Architecture

Frontend (React.js)
↓
REST API Calls (Axios)
↓
Backend (Spring Boot)
↓
Spring Data JPA
↓
MySQL Database

---

## Project Structure

HireLink

├── frontend/

│ ├── src/

│ ├── public/

│ └── package.json

│

├── backend/

│ ├── src/main/java/

│ ├── src/main/resources/

│ └── pom.xml

│

├── screenshots/

├── hirelink_db.sql

└── README.md

---

## Database

Database Name:

hirelink_db

Main Tables:

* users
* jobs
* applications

---

## Installation and Setup

### Clone Repository

git clone https://github.com/SatyaPrathpati/HireLink.git

### Backend Setup

1. Open backend project
2. Configure MySQL database in application.properties
3. Run:

mvn clean install

mvn spring-boot:run

Backend runs on:

http://localhost:8081

### Frontend Setup

1. Open frontend project
2. Install dependencies:

npm install

3. Run:

npm start

Frontend runs on:

http://localhost:3000

---

## Screenshots

Add screenshots of:

* Home Page
* Login Page
* Register Page
* Jobs Page
* Resume Upload
* My Applications
* Recruiter Dashboard
* Job Recommendations

---

## Future Enhancements

* AI-Based Resume Matching
* Real-Time Notifications
* Advanced Job Recommendation Engine
* Admin Dashboard
* Interview Calendar Integration

---

## Author

Satya Sree

B.Tech Information Technology

Full Stack Java Developer

---

## Conclusion

HireLink provides a complete recruitment management solution by integrating job seekers and recruiters on a single platform. The project demonstrates Full Stack Development skills using React.js, Spring Boot, REST APIs, and MySQL while implementing real-world recruitment workflows.

