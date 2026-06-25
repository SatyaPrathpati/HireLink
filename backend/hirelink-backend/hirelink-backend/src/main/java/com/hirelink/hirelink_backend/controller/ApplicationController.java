package com.hirelink.hirelink_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hirelink.hirelink_backend.model.Application;
import com.hirelink.hirelink_backend.service.ApplicationService;
import com.hirelink.hirelink_backend.model.InterviewRequest;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin(origins = {
                "http://localhost:3000",
                "https://hire-link-eight.vercel.app"
})
public class ApplicationController {

        @Autowired
        private ApplicationService applicationService;

        @PostMapping
        public Application applyForJob(
                        @RequestBody Application application) {

                return applicationService
                                .applyForJob(application);
        }

        @GetMapping
        public List<Application> getAllApplications() {

                return applicationService
                                .getAllApplications();
        }

        @GetMapping("/job/{jobId}")
        public List<Application> getApplicantsByJobId(
                        @PathVariable Long jobId) {

                return applicationService
                                .getApplicantsByJobId(jobId);
        }

        @GetMapping("/user/{email}")
        public List<Application> getUserApplications(
                        @PathVariable String email) {

                return applicationService
                                .getUserApplications(email);
        }

        @PutMapping("/{id}/accept")
        public Application acceptApplication(
                        @PathVariable Long id) {

                return applicationService
                                .acceptApplication(id);
        }

        @PutMapping("/{id}/reject")
        public Application rejectApplication(
                        @PathVariable Long id) {

                return applicationService
                                .rejectApplication(id);
        }

        @PutMapping("/{id}/schedule")
        public Application scheduleInterview(
                        @PathVariable Long id,
                        @RequestBody InterviewRequest request) {

                return applicationService
                                .scheduleInterview(id, request);
        }
}